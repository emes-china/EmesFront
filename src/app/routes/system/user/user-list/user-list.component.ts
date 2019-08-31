import { Component, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { STColumn, STColumnButton, STData } from '@delon/abc';
import { deepCopy } from '@delon/util';
import { BaseComponent } from '@shared/components/base.component';
import { StatusColumnBadge, ArrayService } from '@shared';
import { IUserService } from '@System/api/iUser.service';
import { initialStatusSelected } from '../../role/role-list/role-list.component';

@Component({
  selector: 'zc-user-list',
  templateUrl: './user-list.component.html',
  styles: [],
})
export class UserListComponent extends BaseComponent implements OnInit {
  @ViewChild('f', { static: false }) f: NgForm;
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
  user;
  keyword = '';
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
  list = [];

  statusSelected: { Text: any; Value: any }[] = deepCopy(initialStatusSelected);

  @ViewChild('contentTip', { static: false }) contentTip: TemplateRef<any>;
  @ViewChild('footerTip', { static: false }) footerTip: TemplateRef<any>;
  isVisible = false;
  title = '新增用户';
  loading = false;

  constructor(injector: Injector, private arrSrv: ArrayService, private userSrv: IUserService) {
    super(injector);
  }

  ngOnInit() {
    this.user = this.initialUser;
    this.getList();
  }

  refresh() {
    this.getList();
  }

  reset() {
    this.f.reset(this.initialUser);
  }

  all() {
    this.keyword = '';
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

  add($event: any) {
    this.user = this.initialUser;
    this.isVisible = true;
  }

  addChild($event: any) {
    const pid = this.user.id;
    this.user = this.initialUser;
    this.user.parentId = pid;
    this.isVisible = true;
  }

  select($event: any) {
    this.user = $event.node.origin;
    this.getSubItem();
  }

  edit($event: any) {
    this.user = $event.node.origin;
    this.isVisible = true;
  }

  handleCancel = () => {
    this.isVisible = false;
  };

  handleOk = () => {
    this.isVisible = false;
  };

  save($event: any) {
    if (this.user.id === undefined) {
      this.userSrv.create({ request: this.user }).subscribe(x => {
        this.notifySrv.success();
        this.getList();
        this.reset();
      });
    } else {
      this.userSrv.update(this.user).subscribe(x => {
        this.notifySrv.success();
        this.getList();
        this.reset();
      });
    }
  }

  delete($event: any) {
    if (this.user.id !== undefined) {
      this.userSrv.delete({ request: { id: this.user.id } }).subscribe(x => {
        this.notifySrv.success();
        this.reset();
        this.getList();
      });
    } else {
      this.notifySrv.info('请选择需要删除的记录！');
    }
  }
}
