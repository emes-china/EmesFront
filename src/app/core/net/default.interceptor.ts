import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse,
  HttpEvent,
  HttpResponseBase,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { NzMessageService, NzNotificationService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { environment } from '@env/environment';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { NotificationService } from '../service/notification.service';
import { camelCaseJSONKey, isJson, getRealJsonData } from '@shared/utils/json';
import { AppService } from '../service/app.service';

const CODEMESSAGE = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
enum StatusCode {
  /// <summary>
  /// 成功调用
  /// </summary>
  OK = 200,

  /// <summary>
  /// 通信错误
  /// </summary>
  CommunicationError = 501,

  /// <summary>
  /// 平台架构异常
  /// </summary>
  CPlatformError = 502,

  /// <summary>
  /// 业务处理异常
  /// </summary>
  BusinessError = 503,

  /// <summary>
  /// 输入错误
  /// </summary>
  ValidateError = 504,

  /// <summary>
  /// 数据访问错误
  /// </summary>
  DataAccessError = 505,

  /// <summary>
  /// 用户友好类异常
  /// </summary>
  UserFriendly = 506,

  /// <summary>
  /// 未被认证
  /// </summary>
  UnAuthentication = 401,

  /// <summary>
  /// 未授权
  /// </summary>
  UnAuthorized = 403,

  /// <summary>
  /// 请求错误
  /// </summary>
  RequestError = 500,

  /// <summary>
  /// 未知错误
  /// </summary>
  UnKnownError = -1,
}

/**
 * 默认HTTP拦截器，其注册细节见 `app.module.ts`
 */
@Injectable()
export class DefaultInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  private get notification(): NotificationService {
    return this.injector.get(NotificationService);
  }

  private get appSrv(): AppService {
    return this.injector.get(AppService);
  }

  private goTo(url: string) {
    setTimeout(() => this.injector.get(Router).navigateByUrl(url));
  }

  private checkStatus(ev: HttpResponseBase | any) {
    if ((ev.status >= 200 && ev.status < 300) || ev.status === 401 || ev.ignore) {
      return;
    }

    const errortext = CODEMESSAGE[ev.status] || ev.statusText;
    this.notification.error(`请求错误 ${ev.status}: ${ev.url}【${errortext}】`);
  }

  private handleData(ev: HttpResponseBase): Observable<any> {
    // 可能会因为 `throw` 导出无法执行 `_HttpClient` 的 `end()` 操作
    if (ev.status > 0) {
      this.injector.get(_HttpClient).end();
    }
    this.checkStatus(ev);
    // 业务处理：一些通用操作
    switch (ev.status) {
      case 200:
        // 业务层级错误处理，以下是假定restful有一套统一输出格式（指不管成功与否都有相应的数据格式）情况下进行处理
        // 例如响应内容：
        //  错误内容：{ status: 1, msg: '非法参数' }
        //  正确内容：{ status: 0, response: {  } }
        // 则以下代码片断可直接适用
        if (ev instanceof HttpResponse) {
          const body: any = ev.body;
          if (body && body.isSucceed === false) {
            this.emesMessage(body);
            // 继续抛出错误中断后续所有 Pipe、subscribe 操作，因此：
            // this.http.get('/').subscribe() 并不会触发
            return throwError({ ignore: true });
          } else if (body && body.isSucceed === true) {
            // 重新修改 `body` 内容为 `response` 内容，对于绝大多数场景已经无须再关心业务状态码
            return of(
              new HttpResponse({
                ...ev,
                // body: isJson(body.entity) ? camelCaseJSONKey(getRealJsonData(body.entity)) : body.entity,
                body: isJson(body.entity) ? camelCaseJSONKey(JSON.parse(body.entity)) : body.entity,
              }),
            );
            // 或者依然保持完整的格式
            // return of(ev);
          }
        }
        break;
      case 401:
        this.notification.error(`未登录或登录已过期，请重新登录。`);
        // 清空 token 信息
        (this.injector.get(DA_SERVICE_TOKEN) as ITokenService).clear();
        this.goTo(this.appSrv.loginUrl);
        break;
      case 403:
      case 404:
      case 500:
        this.goTo(`/exception/${ev.status}`);
        break;
      default:
        if (ev instanceof HttpErrorResponse) {
          console.warn('未可知错误，大部分是由于后端不支持CORS或无效配置引起', ev);
          return throwError(ev);
        }
        break;
    }
    return of(ev);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // 统一加上服务端前缀
    let url = req.url;
    if (!url.startsWith('https://') && !url.startsWith('http://')) {
      if (!environment.production && url.startsWith('assets/')) {
      } else {
        url = environment.SERVER_URL + url;
      }
    }

    const newReq = req.clone({ url });
    return next.handle(newReq).pipe(
      mergeMap((event: any) => {
        // 允许统一对请求错误处理
        if (event instanceof HttpResponseBase) return this.handleData(event);
        // 若一切都正常，则后续操作
        return of(event);
      }),
      catchError((err: HttpErrorResponse) => this.handleData(err)),
    );
  }

  private emesMessage(body: any) {
    switch (body.statusCode) {
      case StatusCode.UnAuthentication:
        this.notification.error(body.message);
        this.goTo(this.appSrv.loginUrl);
        break;
      case StatusCode.UnAuthorized:
        this.notification.error(body.message);
        this.goTo(this.appSrv.unAuthorizedUrl);
        break;
      case StatusCode.UserFriendly:
        this.notification.info(body.message);
        break;
      case StatusCode.ValidateError:
        this.notification.warning(body.message);
        break;
      default:
        this.notification.error(body.message);
        break;
    }
  }
}
