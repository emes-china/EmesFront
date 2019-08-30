import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUserService } from '../../api';
import { NotificationService } from '@core';
import { NzDrawerRef } from 'ng-zorro-antd';

@Component({
  selector: 'emes-post-create',
  templateUrl: './post-create.component.html',
  styles: [],
})
export class PostCreateComponent {
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
