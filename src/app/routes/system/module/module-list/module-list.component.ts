import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IModuleService } from '@System';
import { BaseComponent } from '@shared';
import { ArrayService } from '@delon/util';

@Component({
  selector: 'zc-module-list',
  templateUrl: './module-list.component.html',
  styles: [],
})
export class ModuleListComponent extends BaseComponent implements OnInit {
  @ViewChild('f', { static: false }) f: NgForm;
  nodes = [];
  selectNodes = [];
  initialOrg = {
    parentId: '',
    name: '',
    status: 1,
    sortNo: 10,
  };
  org;
  constructor(injector: Injector, private arrSrv: ArrayService, private moduleSrv: IModuleService) {
    super(injector);
  }
  ngOnInit() {
    this.org = this.initialOrg;
    this.getList();
  }
  refresh() {
    this.getList();
  }
  reset() {
    this.f.reset(this.initialOrg);
  }
  getList() {
    this.moduleSrv.query({ request: {} }).subscribe((x: any) => {
      if (!x) return;
      this.nodes = this.arrSrv.arrToTreeNode(x, {
        parentIdMapName: 'parentId',
        titleMapName: 'name',
      });
      this.selectNodes = this.arrSrv.arrToTreeNode(x, {
        parentIdMapName: 'parentId',
        titleMapName: 'name',
      });
    });
  }

  add($event) {
    this.org = this.initialOrg;
  }
  addChild($event) {
    const pid = this.org.id;
    this.org = this.initialOrg;
    this.org.parentId = pid;
  }
  edit($event) {
    this.org = $event.node.origin;
  }
  save($event) {
    if (this.org.id === undefined) {
      this.moduleSrv.create({ request: this.org }).subscribe(x => {
        this.notifySrv.success();
        this.getList();
        this.reset();
      });
    } else {
      this.moduleSrv.update(this.org).subscribe(x => {
        this.notifySrv.success();
        this.getList();
        this.reset();
      });
    }
  }
  delete($event) {
    if (this.org.id !== undefined) {
      this.moduleSrv.delete({ request: { id: this.org.id } }).subscribe(x => {
        this.notifySrv.success();
        this.reset();
        this.getList();
      });
    } else {
      this.notifySrv.info('请选择需要删除的记录！');
    }
  }
}
