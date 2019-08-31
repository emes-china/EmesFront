import { Component, Injector, OnInit } from '@angular/core';
import { STColumn, STColumnButton, STComponent, STData, STPage } from '@delon/abc';
import { Mode, StatusColumnBadge, ModalService } from '@shared';
import { BaseComponent } from '@shared/components/base.component';
import { IRoleService } from '@System';
import { NzModalService } from 'ng-zorro-antd';
import { RoleEditComponent } from '../role-edit/role-edit.component';
import { RoleDrawerComponent } from '../role-drawer/role-drawer.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'zc-role-list',
  templateUrl: './role-list.component.html',
  styles: [],
})
export class RoleListComponent extends BaseComponent implements OnInit {
  columns: STColumn[] = [
    {
      title: '角色名称',
      index: 'name',
      type: 'link',
      click: (record: STData, instance?: STComponent) => {
        this.edit(record);
      },
    },
    { title: '状态', index: 'status', type: 'badge', width: 100, badge: StatusColumnBadge },
    {
      title: '操作',
      width: 200,
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
          text: '分配模块',
          icon: 'plus',
          type: 'drawer',
          drawer: {
            component: RoleDrawerComponent,
            title: '角色分配可见模块',
            size: 'lg',
            drawerOptions: { nzMaskClosable: false },
            params: (record: STData) => {
              return { record };
            },
          },
          click: (_record, modal) => {
            if (modal) {
              this.refresh();
            }
          },
        },
        {
          text: '禁用',
          icon: 'close-circle',
          type: 'del',
          popTitle: '确认禁用吗？',
          click: (_record, modal) => {
            this.setStatus(_record);
          },
          iif: (item: STData, btn: STColumnButton, column: STColumn) => {
            return item.status === 1;
          },
        },
        {
          text: '启用',
          icon: 'check-circle',
          type: 'del',
          popTitle: '确认禁用吗？',
          click: (_record, modal) => {
            this.setStatus(_record);
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
            return item.status === 2;
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

  initialRole = {
    parentId: '',
    name: '',
    status: 1,
    sortNo: 10,
  };

  constructor(injector: Injector, private roleSrv: IRoleService, private modalSrv: ModalService) {
    super(injector);
  }

  ngOnInit() {
    this.refresh();
  }

  refresh(resetPageIndex = true) {
    if (resetPageIndex) {
      this.searchParams.PageIndex = 1;
    }
    this.getList();
  }

  stChange(e: any) {
    switch (e.type) {
      case 'pi':
        this.searchParams.PageIndex = e.pi;
        this.refresh(false);
        break;
      case 'ps':
        this.searchParams.PageSize = e.ps;
        this.refresh();
        break;
    }
  }

  getList() {
    this.roleSrv.query({ request: this.searchParams as any }).subscribe((x: any) => {
      if (!x) {
        return;
      }
      this.list = x;
    });
  }

  add() {
    this.modalSrv.add(RoleEditComponent, { record: this.initialRole }).subscribe(x => {
      if (x) {
        this.refresh();
      }
    });
  }

  edit(record: any) {
    record = {
      id: record.id,
      status: record.status,
      name: record.name,
    };
    this.modalSrv.edit(RoleEditComponent, { record, Mode: Mode.Edit }).subscribe(x => {
      if (x) {
        this.refresh();
      }
    });
  }

  delete(e: any) {
    if (e.id !== undefined) {
      this.roleSrv.delete({ request: { id: e.id } }).subscribe(x => {
        this.notifySrv.success();
        this.getList();
      });
    } else {
      this.notifySrv.info('请选择需要删除的记录！');
    }
  }

  setStatus(e: any) {
    if (e.id !== undefined) {
      const param = {
        id: e.id,
        name: e.name,
        status: e.status === 1 ? 2 : 1,
      };
      this.roleSrv.update({ request: param }).subscribe(x => {
        this.notifySrv.success();
        this.getList();
      });
    } else {
      this.notifySrv.info('请选择一条记录！');
    }
  }
}
