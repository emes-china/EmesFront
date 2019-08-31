import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { BaseModalComponent, Mode } from '@shared';
import { NgForm } from '@angular/forms';
import { initialStatusSelected } from '@shared/model/status-type';
import { deepCopy } from '@delon/util';
import { NzModalRef } from 'ng-zorro-antd';
import { IFormService } from '@System';

@Component({
  selector: 'zc-form-edit',
  templateUrl: './form-edit.component.html',
  styles: [],
})
export class FormEditComponent extends BaseModalComponent {
  @ViewChild('f', { static: false }) f: NgForm;
  initialOrg = {
    parentId: undefined,
    name: '',
    status: 1,
  };
  statusSelected = deepCopy(initialStatusSelected);

  constructor(injector: Injector, modalRef: NzModalRef, private formSrv: IFormService) {
    super(injector, modalRef);
  }

  reset() {
    this.f.reset(this.initialOrg);
  }

  ok() {
    let srv;
    if (this.mode == Mode.Add) {
      srv = this.formSrv.create({ request: this.record });
    } else if (this.mode == Mode.Edit) {
      srv = this.formSrv.update({ request: this.record });
    }
    srv.subscribe(x => {
      this.notifySrv.success();
      this.reset();
      this.modalRef.close(true);
    });
  }
}
