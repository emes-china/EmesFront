import { Component, Injector, OnInit } from '@angular/core';
import { STColumn, STData } from '@delon/abc';
import { ArrayService, Mode, StatusColumnBadge } from '@shared';
import { BaseComponent } from '@shared/components/base.component';
import { ModalService } from '@shared/service/modal.service';
import { IOrganizationService } from '@System';
import { OrganizationEditComponent } from '../organization-edit/organization-edit.component';

@Component({
  selector: 'zc-organization-list',
  templateUrl: './organization-list.component.html',
  styles: [],
})
export class OrganizationListComponent extends BaseComponent implements OnInit {
  nodes = [];
  selectNodes = [];
  initialOrg = {
    parentId: undefined,
    name: '',
    status: 1,
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
          click: (_record, modal) => {
            this.modalSrv.add(OrganizationEditComponent, { record: _record, extra: this.selectNodes }).subscribe(x => {
              if (x) {
                this.refresh();
              }
            });
          },
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
    private modalSrv: ModalService,
  ) {
    super(injector);
  }
  ngOnInit() {
    this.org = this.initialOrg;
    this.refresh();
  }
  refresh() {
    this.getList();
    this.getSubItem();
  }

  all() {
    this.keyword = '';
    this.refresh();
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

  add() {
    this.modalSrv.add(OrganizationEditComponent, { record: this.initialOrg, extra: this.selectNodes }).subscribe(x => {
      if (x) {
        this.refresh();
      }
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
