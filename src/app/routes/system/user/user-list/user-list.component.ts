import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { STColumn, STColumnButton, STData, STPage } from '@delon/abc';
import { ArrayService, deepCopy } from '@delon/util';
import { ModalService, Mode, StatusColumnBadge } from '@shared';
import { BaseComponent } from '@shared/components/base.component';
import { TreeHelper } from '@shared/utils/nz-tree.helper';
import { IUserService } from '@System/api/iUser.service';
import { NzFormatEmitEvent, NzTreeComponent } from 'ng-zorro-antd';
import { UserEditComponent } from '../user-edit/user-edit.component';
import { IOrganizationService } from '@System';

@Component({
  selector: 'zc-user-list',
  templateUrl: './user-list.component.html',
  styles: [],
})
export class UserListComponent extends BaseComponent implements OnInit {
  columns: STColumn[] = [
    { title: '账号', index: 'account' },
    { title: '姓名', index: 'name' },
    { title: '所属部门', index: 'orgName' },
    { title: '状态', index: 'status', type: 'badge', badge: StatusColumnBadge },
    {
      title: '操作',
      buttons: [
        {
          text: '编辑',
          icon: 'edit',
          type: 'link',
          click: (_record, modal) => {
            this.edit(_record);
          },
        },
        {
          text: '禁用',
          icon: 'close-circle',
          type: 'del',
          popTitle: '确认禁用吗？',
          click: (_record, modal) => {
            this.userSrv.changestatus({ request: { status: 2, id: _record.id } }).subscribe(x => {
              this.notifySrv.success();
              this.getSubItem();
            });
          },
          iif: (item: STData, btn: STColumnButton, column: STColumn) => {
            return item.status === 1;
          },
        },
        {
          text: '启用',
          icon: 'check-circle',
          type: 'del',
          popTitle: '确认启用吗？',
          click: (_record, modal) => {
            this.userSrv.changestatus({ request: { status: 1, id: _record.id } }).subscribe(x => {
              this.notifySrv.success();
              this.getSubItem();
            });
          },
          iif: (item: STData, btn: STColumnButton, column: STColumn) => {
            return item.status === 2;
          },
        },
        {
          text: '删除',
          icon: 'delete',
          type: 'del',
          click: (record, _modal, comp) => {
            this.delete(record);
          },
          iif: (item: STData, btn: STColumnButton, column: STColumn) => {
            return true;
          },
        },
      ],
    },
  ];

  initialOrg = {
    parentId: undefined,
    name: '',
    status: 1,
  };
  org;
  @ViewChild('tree', { static: false }) tree: NzTreeComponent;
  keyword;
  list = [];
  nodes = [];
  selectNodes = [];
  expandedKeys = [];

  initialUser = {
    account: '',
    password: '',
    name: '',
    sex: 1,
    orgId: undefined,
    status: 1,
  };

  constructor(
    injector: Injector,
    private arrSrv: ArrayService,
    private orgSrv: IOrganizationService,
    private userSrv: IUserService,
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
    this.org = this.initialOrg;
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
    this.userSrv.query({ request: { name: this.keyword, orgId: this.org.id } }).subscribe((x: any) => {
      if (!x) return;
      this.list = x;
    });
  }

  add() {
    this.modalSrv.add(UserEditComponent, { record: this.initialUser, extra: this.selectNodes }).subscribe(x => {
      if (x) {
        this.refresh();
      }
    });
  }

  select(e: any) {
    this.org = e.node.origin;
    this.getSubItem();
  }

  edit(record: any) {
    record = {
      id: record.id,
      status: record.status,
      name: record.name,
    };
    this.modalSrv.edit(UserEditComponent, { record, Mode: Mode.Edit, extra: this.selectNodes }).subscribe(x => {
      if (x) {
        this.refresh();
      }
    });
  }

  delete(record: any) {
    if (record.id !== undefined) {
      this.userSrv.delete({ request: { id: record.id } }).subscribe(x => {
        this.notifySrv.success();
        this.getSubItem();
      });
    } else {
      this.notifySrv.info('请选择需要删除的记录！');
    }
  }

  async expandChange(e: NzFormatEmitEvent) {
    this.expandedKeys = TreeHelper.nzTreeGetExpanded(this.tree);
    if (e.eventName === 'expand') {
      if (e.node.getChildren().length === 0 && e.node.isExpanded) {
        if (e.node.origin.extraData && e.node.origin.extraData.Id) {
          // await this.refreshMenuChildren(e);
        }
      }
    }
  }
}
