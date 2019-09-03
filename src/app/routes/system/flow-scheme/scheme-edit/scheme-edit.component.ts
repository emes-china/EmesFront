import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { _HttpClient } from '@delon/theme';
import { deepCopy, LazyService } from '@delon/util';
import { BaseDrawerComponent, customTranslate, initialStatusSelected } from '@shared';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import { NzDrawerRef } from 'ng-zorro-antd';
import { ISchemeService } from '@System';

@Component({
  selector: 'zc-scheme-edit',
  templateUrl: './scheme-edit.component.html',
  styles: [
    `
      #canvas {
        width: 1100px;
        height: 680px;
      }
    `,
  ],
})
export class SchemeEditComponent extends BaseDrawerComponent implements OnInit {
  @ViewChild('f', { static: false }) f: NgForm;
  ueFl;
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
  modeler;
  customTranslateModule = {
    translate: ['value', customTranslate],
  };
  constructor(
    injector: Injector,
    drawerRef: NzDrawerRef,
    private http: _HttpClient,
    private schemeSrv: ISchemeService,
    private lazySrv: LazyService,
  ) {
    super(injector, drawerRef);
  }

  reset() {
    this.f.reset(this.initialForm);
  }

  ok() {
    let srv;
    // if (this.mode == Mode.Add) {
    //   srv = this.schemeSrv.create({ request: this.record });
    // } else if (this.mode == Mode.Edit) {
    //   srv = this.schemeSrv.update({ request: this.record });
    // }
    // srv.subscribe(x => {
    //   this.notifySrv.success();
    //   this.reset();
    //   this.drawerRef.close(true);
    // });
  }

  ngOnInit(): void {
    this.modeler = new BpmnModeler({
      container: '#canvas',
      additionalModules: [this.customTranslateModule],
    });
    this.http
      .get('assets/bpmn/newDiagram.bpmn', {
        headers: { observe: 'response' },
        responseType: 'text',
      })
      .subscribe(d => {
        this.modeler.importXML(d, err => {
          if (err) {
            console.error(err);
          } else {
            console.log('Success!');
          }
        });
      });
  }
}
