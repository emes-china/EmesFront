import { Injectable } from '@angular/core';
import { NzModalService, NzModalControlService, ModalOptionsForService, NzModalServiceModule } from 'ng-zorro-antd';
import { Overlay } from '@angular/cdk/overlay';
import { Observable, Observer } from 'rxjs';
import { ModalHelperOptions } from '@delon/theme';
import { deepMerge } from '@delon/util';
import { Mode } from '@shared/model/mode';

@Injectable({
  providedIn: NzModalServiceModule,
})
export class ModalService extends NzModalService {
  constructor(overlay: Overlay, modalControl: NzModalControlService) {
    super(overlay, modalControl);
  }
  private defaultAddOptions: ModalHelperOptions = {
    size: 'md',
    modalOptions: {
      nzTitle: '新增',
      nzComponentParams: {
        mode: Mode.Add,
      },
      nzClosable: false,
      nzOnOk: c => {
        c.ok();
        return false;
      },
    },
  };
  private defaultEditOptions: ModalHelperOptions = {
    size: 'md',
    modalOptions: {
      nzTitle: '编辑',
      nzComponentParams: {
        mode: Mode.Edit,
      },
      nzClosable: false,
      nzOnOk: c => {
        c.ok();
        return false;
      },
    },
  };

  add(comp: any, params?: any, options?: ModalHelperOptions): Observable<any> {
    return this.createModal(comp, params, options, this.defaultAddOptions);
  }

  edit(comp: any, params?: any, options?: ModalHelperOptions): Observable<any> {
    return this.createModal(comp, params, options, this.defaultEditOptions);
  }
  private createModal(
    comp: any,
    params?: any,
    options?: ModalHelperOptions,
    defaultOptionsH?: ModalHelperOptions,
  ): Observable<any> {
    options = deepMerge(
      {
        size: 'lg',
        exact: true,
        includeTabs: false,
      },
      defaultOptionsH,
      options,
    );
    return new Observable((observer: Observer<any>) => {
      const { size, includeTabs, modalOptions } = options as ModalHelperOptions;
      let cls = '';
      let width = '';
      if (size) {
        if (typeof size === 'number') {
          width = `${size}px`;
        } else {
          cls = `modal-${size}`;
        }
      }
      if (includeTabs) {
        cls += ' modal-include-tabs';
      }
      if (modalOptions && modalOptions.nzWrapClassName) {
        cls += ` ${modalOptions.nzWrapClassName}`;
        delete modalOptions.nzWrapClassName;
      }
      if (modalOptions && modalOptions.nzComponentParams) {
        modalOptions.nzComponentParams = { ...params, ...modalOptions.nzComponentParams };
      }
      const defaultOptions: ModalOptionsForService = {
        nzWrapClassName: cls,
        nzContent: comp,
        nzWidth: width ? width : undefined,
        nzComponentParams: params,
      };
      const subject = this.create({ ...defaultOptions, ...modalOptions });
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
