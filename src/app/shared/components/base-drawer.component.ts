import { Injector, Input } from '@angular/core';
import { deepCopy } from '@delon/util';
import { NzModalRef, NzDrawerRef } from 'ng-zorro-antd';
import { Mode } from '../model/mode';
import { ModalService } from '../service/modal.service';
import { NotificationService } from '../service/notification.service';

export class BaseDrawerComponent {
  private _record: any;
  private _extra: any;
  @Input()
  set record(value: any) {
    this._record = deepCopy(value);
  }
  get record() {
    return this._record;
  }

  @Input()
  mode: Mode = Mode.Add;
  @Input()
  set extra(value: any) {
    this._extra = deepCopy(value);
  }
  get extra() {
    return this._extra;
  }
  protected notifySrv: NotificationService;
  protected modalSrv: ModalService;
  constructor(public injector: Injector, public drawerRef: NzDrawerRef) {
    this.notifySrv = injector.get(NotificationService);
    this.modalSrv = injector.get(ModalService);
  }
  ok() {
    this.drawerRef.close(true);
  }

  cancel() {
    this.drawerRef.close(false);
  }
}
