import { Component, Injector, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { LazyService } from '@delon/util';
import { BaseDrawerComponent } from '@shared';
import { ISchemeService } from '@System';
import { NzDrawerRef } from 'ng-zorro-antd';

@Component({
  selector: 'zc-scheme-edit',
  templateUrl: './scheme-edit.component.html',
  styles: [],
})
export class SchemeEditComponent extends BaseDrawerComponent implements OnInit {
  constructor(injector: Injector, drawerRef: NzDrawerRef, private schemeSrv: ISchemeService) {
    super(injector, drawerRef);
  }
  diagramUrl = 'assets/bpmn/newDiagram.bpmn';
  importError?: Error;

  ngOnInit(): void {}

  handleImported(event) {
    const { type, error, warnings } = event;

    if (type === 'success') {
      console.log(`Rendered diagram (%s warnings)`, warnings.length);
    }

    if (type === 'error') {
      console.error('Failed to render diagram', error);
    }

    this.importError = error;
  }
}
