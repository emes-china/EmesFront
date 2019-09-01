import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { BaseModalComponent, initialStatusSelected, Mode } from '@shared';
import { NgForm } from '@angular/forms';
import { deepCopy } from '@delon/util';
import { NzModalRef } from 'ng-zorro-antd';
import { IOrganizationService, IModuleService } from '@System';

@Component({
  selector: 'zc-module-edit',
  templateUrl: './module-edit.component.html',
  styles: [],
})
export class ModuleEditComponent extends BaseModalComponent {
  @ViewChild('f', { static: false }) f: NgForm;
  initialModule = {
    parentId: undefined,
    name: '',
    sortNo: 0,
    cascadeId: '',
    aclCode: '',
    code: '',
    url: '',
    icon: '',
  };
  statusSelected = deepCopy(initialStatusSelected);

  constructor(injector: Injector, modalRef: NzModalRef, private moduleSrv: IModuleService) {
    super(injector, modalRef);
  }

  reset() {
    this.f.reset(this.initialModule);
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
      srv = this.moduleSrv.create({ request: this.record });
    } else if (this.mode === Mode.Edit) {
      srv = this.moduleSrv.update({ request: this.record });
    }
    srv.subscribe(x => {
      this.notifySrv.success();
      this.reset();
      this.modalRef.close(true);
    });
  }
}
