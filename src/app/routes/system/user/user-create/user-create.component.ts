import { NotificationService } from './../../../../core/service/notification.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DrawerHelper } from '@delon/theme';
import { IUserService } from '../../api';
import { NzDrawerRef } from 'ng-zorro-antd';

@Component({
  selector: 'emes-user-create',
  templateUrl: './user-create.component.html',
  styles: [],
})
export class UserCreateComponent {
  @ViewChild('f', { static: false }) f: NgForm;
  user: any = {};
  initialuser = {
    name: '',
    password: '',
    isLock: false,
    isLimitDuplicateLogin: false,
    effectiveDate: new Date(),
    notes: '',
  };
  org = this.initialuser;
  constructor(private userSrv: IUserService, private notifySrv: NotificationService, private drawerRef: NzDrawerRef) {}
  reset() {
    this.f.reset();
  }
  save() {
    this.userSrv.create({ request: this.user }).subscribe(x => {
      this.notifySrv.success();
      this.drawerRef.close(true);
    });
  }
}
