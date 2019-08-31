import { Injector, Input } from '@angular/core';
import { deepCopy } from '@delon/util';
import { NzModalRef } from 'ng-zorro-antd';
import { Mode } from '../model/mode';
import { ModalService } from '../service/modal.service';
import { NotificationService } from '../service/notification.service';

export class BaseModalComponent {
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
  constructor(public injector: Injector, public modalRef: NzModalRef) {
    this.notifySrv = injector.get(NotificationService);
    this.modalSrv = injector.get(ModalService);
  }
  ok() {
    this.modalRef.close(true);
  }

  cancel() {
    this.modalRef.close(false);
  }
}
