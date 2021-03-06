import { Component, Injector, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { deepCopy } from '@delon/util';
import { BaseModalComponent } from '@shared';
import { initialStatusSelected } from '@shared/model/status-type';
import { IRoleService } from '@System';
import { NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'zc-role-edit',
  templateUrl: './role-edit.component.html',
  styles: [],
})
export class RoleEditComponent extends BaseModalComponent {
  @ViewChild('f', { static: false }) f: NgForm;
  loading = false;

  initialRole = {
    parentId: '',
    name: '',
    status: 1,
    sortNo: 10,
  };

  statusSelected = deepCopy(initialStatusSelected);

  constructor(injector: Injector, public modalRef: NzModalRef, private roleSrv: IRoleService) {
    super(injector, modalRef);
  }

  reset() {
    this.f.reset(this.initialRole);
  }

  ok() {
    this.loading = true;
    if (this.record.id === undefined) {
      this.roleSrv.create({ request: this.record }).subscribe(x => {
        this.notifySrv.success();
        this.reset();
        this.modalRef.close(true);
        this.loading = false;
      });
    } else {
      this.roleSrv.update({ request: this.record }).subscribe(x => {
        this.notifySrv.success();
        this.reset();
        this.modalRef.close(true);
        this.loading = false;
      });
    }
  }
}
