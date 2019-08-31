import { Component, OnInit, Input } from '@angular/core';
import { IRoleService } from '@System';
import { NotificationService } from '@core';
import { NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'zc-role-edit',
  templateUrl: './role-edit.component.html',
  styles: [],
})
export class RoleEditComponent implements OnInit {
  private _record = null;
  @Input()
  set record(value) {
    if (value) {
      this._record = value;
    }
  }
  get record() {
    return this._record;
  }

  constructor(private modal: NzModalRef, private notifySrv: NotificationService, private roleSrv: IRoleService) {}

  ngOnInit() {}
}
