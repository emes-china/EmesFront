import { Injectable, Inject } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { tap, map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { fromEvent, merge, Subscription } from 'rxjs';
import { subMinutes, differenceInMinutes, addMinutes } from 'date-fns';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  loginUrl = '/passport/login';
  unAuthorizedUrl = '/exception/403';
  private user = {
    userName: '',
    password: '',
  };
  tokenTimespan = new Date();
  activeTimespen = new Date();
  probeSub$: Subscription;
  difIntv;

  constructor(private http: _HttpClient, @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService) {}

  login(userName: string, password: string) {
    return this.http
      .post('/api/user/authentication?_allow_anonymous=true', {
        request: {
          userName,
          password,
        },
      })
      .pipe(
        tap(x => {
          this.user = {
            userName,
            password,
          };
          this.tokenTimespan = addMinutes(new Date(), 25); // 加25分钟
        }),
      );
  }

  enableProbe() {
    if (this.probeSub$) {
      this.probeSub$.unsubscribe();
    }
    if (this.difIntv) {
      clearInterval(this.difIntv);
    }
    const clickSource = fromEvent(document.body, 'click');
    const keydownSource = fromEvent(document.body, 'keydown');
    const mousemoveSource = fromEvent(document.body, 'mousemove');
    const mousewheelSource = fromEvent(document.body, 'mousewheel');
    this.probeSub$ = merge(clickSource, keydownSource, mousemoveSource, mousewheelSource)
      .pipe(debounceTime(1000 * 60))
      .subscribe(x => {
        this.activeTimespen = new Date();
      });
    this.difIntv = setInterval(() => {
      const difTokenTime = differenceInMinutes(this.tokenTimespan, new Date());
      const difActiveTime = differenceInMinutes(new Date(), this.activeTimespen);
      if (difTokenTime >= 0 && difTokenTime <= 4 && difActiveTime < 25) {
        this.login(this.user.userName, this.user.password).subscribe(res => {
          const token = {
            token: res,
          };
          this.tokenService.set(token);
        });
      }
      if (difTokenTime > 28) {
        this.tokenService.clear();
      }
    }, 1000 * 60);
  }
}
