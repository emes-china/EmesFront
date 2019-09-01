import { Component, Injector, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { deepCopy } from '@delon/util';
import { BaseModalComponent, Mode } from '@shared';
import { initialStatusSelected } from '@shared/model/status-type';
import { IUserService } from '@System';
import { NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'zc-user-edit',
  templateUrl: './user-edit.component.html',
  styles: [],
})
export class UserEditComponent extends BaseModalComponent {
  @ViewChild('f', { static: false }) f: NgForm;
  passwordVisible = false;
  initialUser = {
    account: '',
    password: '',
    name: '',
    sex: 1,
    orgId: undefined,
    status: 1,
  };

  statusSelected = deepCopy(initialStatusSelected);

  constructor(injector: Injector, public modalRef: NzModalRef, private userSrv: IUserService) {
    super(injector, modalRef);
  }

  reset() {
    this.f.reset(this.initialUser);
  }

  ok() {
    for (const i in this.f.controls) {
      this.f.controls[i].markAsDirty();
      this.f.controls[i].updateValueAndValidity();
    }
    if (this.f.invalid) {
      return;
    }

    let srv;
    if (this.mode === Mode.Add) {
      srv = this.userSrv.create({ request: this.record });
    } else if (this.mode === Mode.Edit) {
      srv = this.userSrv.update({ request: this.record });
    }
    srv.subscribe(x => {
      this.notifySrv.success();
      this.reset();
      this.modalRef.close(true);
    });
  }
}
