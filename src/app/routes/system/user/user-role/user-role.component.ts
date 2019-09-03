import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { BaseModalComponent, initialStatusSelected, Mode } from '@shared';
import { NgForm } from '@angular/forms';
import { deepCopy } from '@delon/util';
import { NzModalRef } from 'ng-zorro-antd';
import { IUserService } from '@System';

@Component({
  selector: 'zc-user-role',
  templateUrl: './user-role.component.html',
  styles: [],
})
export class UserRoleComponent extends BaseModalComponent {
  constructor(injector: Injector, public modalRef: NzModalRef, private userSrv: IUserService) {
    super(injector, modalRef);
  }

  ok() {
    const roles = this.extra.filter(x => x.direction === 'right');
    const roleIds = roles.map(x => x.id);
    this.userSrv.allocaterole({ request: { userId: this.record.id, roleIds } }).subscribe(x => {
      this.notifySrv.success();
      this.modalRef.close(true);
    });
  }
}
