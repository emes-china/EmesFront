import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent, StatusColumnBadge, ModalService } from '@shared';
import { STColumn } from '@delon/abc';
import { ArrayService } from '@delon/util';
import { IOrganizationService } from '@System';
import { FormEditComponent } from '../form-edit/form-edit.component';

@Component({
  selector: 'zc-form-list',
  templateUrl: './form-list.component.html',
  styles: [],
})
export class FormListComponent extends BaseComponent implements OnInit {
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
            this.modalSrv.add(FormEditComponent, { record: _record, extra: this.selectNodes }).subscribe(x => {
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
    this.modalSrv.add(FormEditComponent, { record: this.initialOrg, extra: this.selectNodes }).subscribe(x => {
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
