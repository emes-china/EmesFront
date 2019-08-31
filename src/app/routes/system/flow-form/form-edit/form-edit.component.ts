import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { BaseModalComponent, Mode } from '@shared';
import { NgForm } from '@angular/forms';
import { initialStatusSelected } from '@shared/model/status-type';
import { deepCopy, LazyService } from '@delon/util';
import { NzModalRef } from 'ng-zorro-antd';
import { IFormService } from '@System';

@Component({
  selector: 'zc-form-edit',
  templateUrl: './form-edit.component.html',
  styles: [],
})
export class FormEditComponent extends BaseModalComponent {
  @ViewChild('f', { static: false }) f: NgForm;
  initialForm = {
    title: '',
    name: '',
    desc: '',
    status: 1,
    frmType: 0,
    webId: undefined,
    fields: 0,
    contentData: '',
    contentParse: '',
    content: '',
    sortCode: 10,
  };
  statusSelected = deepCopy(initialStatusSelected);

  constructor(injector: Injector, modalRef: NzModalRef, private formSrv: IFormService, private lazySrv: LazyService) {
    super(injector, modalRef);
    lazySrv
      .load([
        './assets/ueditor/ueditor.config.js',
        './assets/ueditor/ueditor.all.min.js',
        './assets/ueditor/lang/zh-cn/zh-cn.js',
        './assets/ueditor/formdesign/leipi.Formdesign.v4.js',
      ])
      .then(x => {
        console.log(x);
      });
  }

  reset() {
    this.f.reset(this.initialForm);
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
