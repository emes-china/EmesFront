import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { BaseModalComponent, initialStatusSelected, Mode } from '@shared';
import { NgForm } from '@angular/forms';
import { deepCopy } from '@delon/util';
import { NzModalRef } from 'ng-zorro-antd';
import { IModuleService } from '@System';

@Component({
  selector: 'zc-module-element-edit',
  templateUrl: './module-element-edit.component.html',
  styles: [],
})
export class ModuleElementEditComponent extends BaseModalComponent {
  @ViewChild('f', { static: false }) f: NgForm;
  initialModuleElement = {
    name: '',
    sort: 0,
    moduleId: '',
    aclCode: '',
    script: '',
    url: '',
    icon: '',
  };
  statusSelected = deepCopy(initialStatusSelected);

  constructor(injector: Injector, modalRef: NzModalRef, private moduleSrv: IModuleService) {
    super(injector, modalRef);
  }

  reset() {
    this.f.reset(this.initialModuleElement);
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
      srv = this.moduleSrv.createelement({ request: this.record });
    } else if (this.mode === Mode.Edit) {
      srv = this.moduleSrv.updateelement({ request: this.record });
    }
    srv.subscribe(x => {
      this.notifySrv.success();
      this.reset();
      this.modalRef.close(true);
    });
  }
}
