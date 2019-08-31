import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Mode, NotificationService } from '@core';
import { deepCopy } from '@delon/util';
import { IRoleService } from '@System';
import { NzModalService } from 'ng-zorro-antd';

export const initialStatusSelected = [{ Text: '停用', Value: 2 }, { Text: '正常', Value: 1 }];

@Component({
  selector: 'zc-role-edit',
  templateUrl: './role-edit.component.html',
  styles: [],
})
export class RoleEditComponent implements OnInit {
  @ViewChild('f', { static: false }) f: NgForm;
  loading = false;

  initialRole = {
    parentId: '',
    name: '',
    status: 1,
    sortNo: 10,
  };
  statusSelected: { Text: any; Value: any }[] = deepCopy(initialStatusSelected);

  private _record = deepCopy(this.initialRole);
  @Input()
  set record(value) {
    if (value) {
      this._record = value;
    }
  }
  get record() {
    return this._record;
  }

  @Input()
  mode: Mode = Mode.Add;

  constructor(
    private modalSrv: NzModalService,
    private notifySrv: NotificationService,
    private roleSrv: IRoleService,
  ) {}

  ngOnInit() {}

  reset() {
    this.f.reset(this.initialRole);
  }

  save() {
    this.loading = true;
    if (this.record.id === undefined) {
      this.roleSrv.create({ request: this.record }).subscribe(x => {
        this.notifySrv.success();
        this.reset();
        this.modalSrv.closeAll();
        this.loading = false;
      });
    } else {
      this.roleSrv.update({ request: this.record }).subscribe(x => {
        this.notifySrv.success();
        this.reset();
        this.modalSrv.closeAll();
        this.loading = false;
      });
    }
  }
}
