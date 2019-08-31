import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { BaseComponent } from '@layout/base.component';
import { Router } from '@angular/router';
import { IOrganizationService } from '@System';
import { NotificationService, ArrayService } from '@core';
import { STColumn } from '@delon/abc';
import { StatusColumnBadge } from '@shared';

@Component({
  selector: 'zc-organization-list',
  templateUrl: './organization-list.component.html',
  styles: [],
})
export class OrganizationListComponent extends BaseComponent implements OnInit {
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
  keyword = '';
  columns: STColumn[] = [
    { title: '层级ID', index: 'cascadeId', default: '-' },
    { title: '名称', index: 'name' },
    { title: '上级部门', index: 'parentName', default: '-' },
    { title: '状态', index: 'status', type: 'badge', badge: StatusColumnBadge },
    {
      title: '操作',
      buttons: [
        {
          text: '编辑',
          icon: 'edit',
          type: 'link',
          click: (_record, modal) => {},
        },
        {
          text: '删除',
          icon: 'delete',
          type: 'del',
          click: (record, _modal, comp) => {},
        },
      ],
    },
  ];
  list = [];
  constructor(injector: Injector, private arrSrv: ArrayService, private orgSrv: IOrganizationService) {
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
  all() {
    this.keyword = '';
    this.getList();
  }
  getList() {
    this.orgSrv.query({ request: { name: '' } }).subscribe((x: any) => {
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

  getSubItem() {
    this.orgSrv
      .subitem({ request: { id: this.org.id, name: this.keyword, pageIndex: 0, pageSize: 10 } })
      .subscribe((x: any) => {
        if (!x) return;
        this.list = x;
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
  select($event) {
    this.org = $event.node.origin;
    this.getSubItem();
  }
  edit($event) {
    this.org = $event.node.origin;
  }
  save($event) {
    if (this.org.id === undefined) {
      this.orgSrv.create({ request: this.org }).subscribe(x => {
        this.notifySrv.success();
        this.getList();
        this.reset();
      });
    } else {
      this.orgSrv.update(this.org).subscribe(x => {
        this.notifySrv.success();
        this.getList();
        this.reset();
      });
    }
  }
  delete($event) {
    if (this.org.id !== undefined) {
      this.orgSrv.delete({ request: { id: this.org.id } }).subscribe(x => {
        this.notifySrv.success();
        this.reset();
        this.getList();
      });
    } else {
      this.notifySrv.info('请选择需要删除的记录！');
    }
  }
}
