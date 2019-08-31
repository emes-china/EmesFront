import { Component, OnInit, Injector, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { BaseComponent } from '@layout/base.component';
import { Router } from '@angular/router';
import { IOrganizationService } from '@System';
import { NotificationService, ArrayService } from '@core';
import { STColumn } from '@delon/abc';
import { StatusColumnBadge } from '@shared';
import { OrganizationEditComponent } from '../organization-edit/organization-edit.component';
import { ModalHelper } from '@delon/theme';

@Component({
  selector: 'zc-organization-list',
  templateUrl: './organization-list.component.html',
  styles: [],
})
export class OrganizationListComponent extends BaseComponent implements OnInit {
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
          type: 'modal',
          modal: {
            component: OrganizationEditComponent,
          },
          click: (_record, modal) => {},
        },
        {
          text: '删除',
          icon: 'delete',
          type: 'del',
          click: (record, _modal, comp) => {
            this.delete(record);
          },
        },
      ],
    },
  ];
  list = [];
  constructor(
    injector: Injector,
    private arrSrv: ArrayService,
    private orgSrv: IOrganizationService,
    private modalHelper: ModalHelper,
  ) {
    super(injector);
  }
  ngOnInit() {
    this.org = this.initialOrg;
    this.getList();
  }
  refresh() {
    this.getList();
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
    this.modalHelper.create(OrganizationEditComponent, { record: { org: this.initialOrg } }).subscribe(x => {
      console.log(x);
    });
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

  delete($event) {
    if ($event.id !== undefined) {
      this.orgSrv.delete({ request: { id: $event.id } }).subscribe(x => {
        this.notifySrv.success();
        this.getList();
        this.getSubItem();
      });
    } else {
      this.notifySrv.info('请选择需要删除的记录！');
    }
  }
}
