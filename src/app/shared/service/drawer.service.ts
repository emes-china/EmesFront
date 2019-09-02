import { Overlay } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { ModalHelperOptions, DrawerHelperOptions } from '@delon/theme';
import { deepMerge } from '@delon/util';
import { Mode } from '@shared/model/mode';
import { ModalOptionsForService, NzDrawerService, NzDrawerServiceModule, NzDrawerOptions } from 'ng-zorro-antd';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: NzDrawerServiceModule,
})
export class DrawerService extends NzDrawerService {
  constructor(overlay: Overlay) {
    super(overlay);
  }
  private defaultAddOptions: DrawerHelperOptions = {
    size: 'lg',
    drawerOptions: {
      nzTitle: '新增',
      nzContentParams: {
        mode: Mode.Add,
      },
    },
  };
  private defaultEditOptions: DrawerHelperOptions = {
    size: 'lg',
    drawerOptions: {
      nzTitle: '编辑',
      nzContentParams: {
        mode: Mode.Edit,
      },
    },
  };

  add(comp: any, params?: any, options?: DrawerHelperOptions): Observable<any> {
    return this.createDrawer('新增', comp, params, options, this.defaultAddOptions);
  }

  edit(comp: any, params?: any, options?: DrawerHelperOptions): Observable<any> {
    return this.createDrawer('编辑', comp, params, options, this.defaultEditOptions);
  }

  /**
   * 构建一个抽屉
   */
  createDrawer(
    title: string,
    comp: any,
    params?: any,
    options?: DrawerHelperOptions,
    defaultOptionsH?: DrawerHelperOptions,
  ): Observable<any> {
    options = deepMerge(
      {
        size: 'md',
        footer: true,
        footerHeight: 55,
        exact: true,
        drawerOptions: {
          nzPlacement: 'right',
          nzWrapClassName: '',
        },
      },
      defaultOptionsH,
      options,
    );
    return new Observable((observer: Observer<any>) => {
      const { size, footer, footerHeight, drawerOptions } = options as DrawerHelperOptions;
      if (drawerOptions && drawerOptions.nzContentParams) {
        drawerOptions.nzContentParams = { ...params, ...drawerOptions.nzContentParams };
      }
      const defaultOptions: NzDrawerOptions = {
        nzContent: comp,
        nzContentParams: params,
        nzTitle: title,
      };

      if (typeof size === 'number') {
        defaultOptions[
          drawerOptions!.nzPlacement === 'top' || drawerOptions!.nzPlacement === 'bottom' ? 'nzHeight' : 'nzWidth'
        ] = options!.size;
      } else {
        defaultOptions.nzWrapClassName = (drawerOptions!.nzWrapClassName + ` drawer-${options!.size}`).trim();
        delete drawerOptions!.nzWrapClassName;
      }

      if (footer) {
        const { nzPlacement, nzHeight } = drawerOptions as NzDrawerOptions;
        // Should be header * footer, because of includes header
        const reduceHeight = footerHeight! * 2 - 2;
        if (nzPlacement === 'left' || nzPlacement === 'right') {
          defaultOptions.nzBodyStyle = {
            height: `calc(100% - ${reduceHeight}px)`,
            overflow: 'auto',
          };
        } else {
          defaultOptions.nzBodyStyle = {
            height: `${+(nzHeight || 256) - reduceHeight}px`,
            overflow: 'auto',
          };
        }
      }

      const subject = this.create({ ...defaultOptions, ...drawerOptions });
      const afterClose$ = subject.afterClose.subscribe((res: any) => {
        if (options!.exact === true) {
          if (res != null) {
            observer.next(res);
          }
        } else {
          observer.next(res);
        }
        observer.complete();
        afterClose$.unsubscribe();
      });
    });
  }
}
