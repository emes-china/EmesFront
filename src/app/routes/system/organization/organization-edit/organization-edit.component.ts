import { Component, Injector, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { deepCopy } from '@delon/util';
import { BaseModalComponent, Mode } from '@shared';
import { initialStatusSelected } from '@shared/model/status-type';
import { IOrganizationService } from '@System';
import { NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'zc-organization-edit',
  templateUrl: './organization-edit.component.html',
  styles: [],
})
export class OrganizationEditComponent extends BaseModalComponent {
  @ViewChild('f', { static: false }) f: NgForm;
  initialOrg = {
    parentId: undefined,
    name: '',
    status: 1,
  };
  statusSelected = deepCopy(initialStatusSelected);

  constructor(injector: Injector, modalRef: NzModalRef, private orgSrv: IOrganizationService) {
    super(injector, modalRef);
  }

  reset() {
    this.f.reset(this.initialOrg);
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
      srv = this.orgSrv.create({ request: this.record });
    } else if (this.mode === Mode.Edit) {
      srv = this.orgSrv.update({ request: this.record });
    }
    srv.subscribe(x => {
      this.notifySrv.success();
      this.reset();
      this.modalRef.close(true);
    });
  }
}
