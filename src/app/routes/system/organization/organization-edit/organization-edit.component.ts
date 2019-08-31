import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd';
import { NgForm } from '@angular/forms';
import { IOrganizationService } from '@System';
import { NotificationService, Mode } from '@core';

@Component({
  selector: 'zc-organization-edit',
  templateUrl: './organization-edit.component.html',
  styles: [],
})
export class OrganizationEditComponent {
  @ViewChild('f', { static: false }) f: NgForm;
  @Input()
  record: any;
  @Input()
  mode: Mode = Mode.Add;
  @Input()
  extra: any;

  initialOrg = {
    parentId: '',
    name: '',
    status: 1,
    sortNo: 10,
  };
  constructor(
    private modal: NzModalRef,
    private notifySrv: NotificationService,
    private orgSrv: IOrganizationService,
  ) {}

  reset() {
    this.f.reset(this.initialOrg);
  }
  save() {
    if (this.record.id === undefined) {
      this.orgSrv.create({ request: this.record }).subscribe(x => {
        this.notifySrv.success();
        this.reset();
      });
    } else {
      this.orgSrv.update(this.record).subscribe(x => {
        this.notifySrv.success();
        this.reset();
      });
    }
  }
  ok() {
    this.modal.close(`new time: ${+new Date()}`);
    this.cancel();
  }

  cancel() {
    this.modal.destroy();
  }
}
