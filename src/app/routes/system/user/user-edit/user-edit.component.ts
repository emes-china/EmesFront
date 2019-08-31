import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Mode, NotificationService } from '@core';
import { deepCopy } from '@delon/util';
import { IUserService } from '@System';
import { NzModalService } from 'ng-zorro-antd';

export const initialStatusSelected = [{ Text: '停用', Value: 2 }, { Text: '正常', Value: 1 }];

@Component({
  selector: 'zc-user-edit',
  templateUrl: './user-edit.component.html',
  styles: [],
})
export class UserEditComponent implements OnInit {
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

  statusSelected: { Text: any; Value: any }[] = deepCopy(initialStatusSelected);

  private _record = deepCopy(this.initialUser);
  @Input()
  set record(value) {
    if (value) {
      this._record = { ...this._record, ...value };
    }
  }
  get record() {
    return this._record;
  }

  @Input()
  mode: Mode = Mode.Add;

  @Input()
  extra: any = [];

  constructor(
    private modalSrv: NzModalService,
    private notifySrv: NotificationService,
    private userSrv: IUserService,
  ) {}

  ngOnInit() {}

  reset() {
    this.f.reset(this.initialUser);
  }

  save() {
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
