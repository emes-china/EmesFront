import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd';
import { NgForm } from '@angular/forms';
import { IOrganizationService } from '@System';
import { NotificationService } from '@core';

@Component({
  selector: 'zc-organization-edit',
  templateUrl: './organization-edit.component.html',
  styles: [],
})
export class OrganizationEditComponent {
  @ViewChild('f', { static: false }) f: NgForm;
  @Input()
  record: any;
  initialOrg = {
    parentId: '',
    name: '',
    status: 1,
    sortNo: 10,
  };
  org;

  constructor(private modal: NzModalRef, private notifySrv: NotificationService, private orgSrv: IOrganizationService) {
    this.org = this.record;
  }

  reset() {
    this.f.reset(this.initialOrg);
  }
  save($event) {
    if (this.org.id === undefined) {
      this.orgSrv.create({ request: this.org }).subscribe(x => {
        this.notifySrv.success();
        this.reset();
      });
    } else {
      this.orgSrv.update(this.org).subscribe(x => {
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
