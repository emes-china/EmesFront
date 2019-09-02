import { Component, Injector, OnInit } from '@angular/core';
import { STColumn, STColumnButton, STComponent, STData, STPage } from '@delon/abc';
import { Mode, StatusColumnBadge, ModalService, ArrayService } from '@shared';
import { BaseComponent } from '@shared/components/base.component';
import { IRoleService, IModuleService } from '@System';
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
  keyword = '';
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
              return { record, extra: this.selectNodes };
            },
          },
          click: (_record, modal) => {
            if (modal) {
              this.refresh();
            }
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
  selectNodes = [];
  initialRole = {
    parentId: '',
    name: '',
    status: 1,
    sortNo: 10,
  };

  constructor(
    injector: Injector,
    private moduleSrv: IModuleService,
    private arrSrv: ArrayService,
    private roleSrv: IRoleService,
    private modalSrv: ModalService,
  ) {
    super(injector);
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.getList();
    this.getModule();
  }

  getList() {
    this.roleSrv.query({ request: { name: this.keyword } }).subscribe((x: any) => {
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
    this.modalSrv.edit(RoleEditComponent, { record }).subscribe(x => {
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

  getModule() {
    this.moduleSrv.query({ request: { name: '' } }).subscribe((x: any) => {
      if (!x) return;
      this.selectNodes = this.arrSrv.arrToTreeNode(x, {
        parentIdMapName: 'parentId',
        titleMapName: 'name',
      });
    });
  }
}
