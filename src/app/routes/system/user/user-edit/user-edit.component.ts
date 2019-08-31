import { Component, Injector, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { deepCopy } from '@delon/util';
import { BaseModalComponent } from '@shared';
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
  loading = false;

  initialUser = {
    parentId: '',
    loginName: '',
    name: '',
    orgName: '',
    orgId: [],
    status: 1,
    summary: '',
  };

  statusSelected = deepCopy(initialStatusSelected);

  constructor(injector: Injector, public modalRef: NzModalRef, private userSrv: IUserService) {
    super(injector, modalRef);
  }

  reset() {
    this.f.reset(this.initialUser);
  }

  ok() {
    this.loading = true;
    if (this.record.id === undefined) {
      this.userSrv.create({ request: this.record }).subscribe(x => {
        this.notifySrv.success();
        this.reset();
        this.modalSrv.closeAll();
        this.loading = false;
      });
    } else {
      this.userSrv.update(this.record).subscribe(x => {
        this.notifySrv.success();
        this.reset();
        this.modalSrv.closeAll();
        this.loading = false;
      });
    }
  }
}
