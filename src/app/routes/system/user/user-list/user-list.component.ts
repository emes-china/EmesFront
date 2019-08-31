import { Component, Injector, OnInit } from '@angular/core';
import { STColumn, STColumnButton, STData, STPage } from '@delon/abc';
import { ArrayService, deepCopy } from '@delon/util';
import { ModalService, Mode, StatusColumnBadge } from '@shared';
import { BaseComponent } from '@shared/components/base.component';
import { IUserService } from '@System/api/iUser.service';
import { UserEditComponent } from '../user-edit/user-edit.component';

@Component({
  selector: 'zc-user-list',
  templateUrl: './user-list.component.html',
  styles: [],
})
export class UserListComponent extends BaseComponent implements OnInit {
  columns: STColumn[] = [
    { title: '账号', index: 'loginName' },
    { title: '姓名', index: 'name' },
    { title: '所属部门', index: 'orgName' },
    { title: '状态', index: 'badge', type: 'badge', badge: StatusColumnBadge },
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
          text: '禁用',
          icon: 'close-circle',
          type: 'del',
          popTitle: '确认禁用吗？',
          click: (_record, modal) => {},
          iif: (item: STData, btn: STColumnButton, column: STColumn) => {
            return true;
          },
        },
        {
          text: '启用',
          icon: 'check-circle',
          type: 'del',
          popTitle: '确认禁用吗？',
          click: (_record, modal) => {},
          iif: (item: STData, btn: STColumnButton, column: STColumn) => {
            return false;
          },
        },
        {
          icon: '删除',
          type: 'del',
          click: (record, _modal, comp) => {
            this.delete(_modal);
          },
          iif: (item: STData, btn: STColumnButton, column: STColumn) => {
            return true;
          },
        },
      ],
    },
  ];

  page: STPage = {
    show: true,
    front: true, // 后端分页 改为 false
    showSize: true,
    showQuickJumper: true,
    total: true,
  };

  searchParams = { Where: { KeyWord: null }, PageIndex: 1, PageSize: 30 };
  list = [];
  nodes = [];
  selectNodes = [];

  initialUser = {
    parentId: '',
    loginName: '',
    name: '',
    orgName: '',
    orgId: [],
    status: 1,
    summary: '',
  };

  constructor(
    injector: Injector,
    private arrSrv: ArrayService,
    private userSrv: IUserService,
    private modalSrv: ModalService,
  ) {
    super(injector);
  }

  ngOnInit() {
    this.getList();
  }

  refresh() {
    this.getList();
  }

  all() {
    this.searchParams.Where.KeyWord = '';
    this.getList();
  }

  getList() {
    this.userSrv.query({ request: { name: '' } }).subscribe((x: any) => {
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
    // this.userSrv
    //   .subitem({ request: { id: this.org.id, name: this.keyword, pageIndex: 0, pageSize: 10 } })
    //   .subscribe((x: any) => {
    //     if (!x) return;
    //   });
  }

  add() {
    this.modalSrv.add(UserEditComponent, { record: this.initialUser, extra: this.selectNodes }).subscribe(x => {
      if (x) {
        this.refresh();
      }
    });
  }

  addChild(node: any) {
    const record = deepCopy(this.initialUser);
    record.parentId = node.node.id;
    this.modalSrv.add(UserEditComponent, { record, extra: this.selectNodes }).subscribe(x => {
      if (x) {
        this.refresh();
      }
    });
  }

  select($event: any) {
    // this.user = $event.node.origin;
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
        this.getList();
      });
    } else {
      this.notifySrv.info('请选择需要删除的记录！');
    }
  }
}
