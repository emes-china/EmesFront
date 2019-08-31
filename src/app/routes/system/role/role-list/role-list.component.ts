import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { STColumn, STColumnButton, STComponent, STData } from '@delon/abc';
import { ModalHelper } from '@delon/theme';
import { deepCopy } from '@delon/util';
import { BaseComponent } from '@layout/base.component';
import { StatusColumnBadge } from '@shared';
import { IRoleService } from '@System';
import { NzModalService } from 'ng-zorro-antd';
import { RoleEditComponent } from '../role-edit/role-edit.component';

export const initialStatusSelected = [{ Text: '停用', Value: 2 }, { Text: '正常', Value: 1 }];

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'zc-role-list',
  templateUrl: './role-list.component.html',
  styles: [],
})
export class RoleListComponent extends BaseComponent implements OnInit {
  @ViewChild('f', { static: false }) f: NgForm;

  isVisible = false;
  title = '新增角色';
  loading = false;

  nodes = [];
  selectNodes = [];
  initialRole = {
    id: undefined,
    name: '',
    status: 1,
  };
  role: any;
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
    { title: '状态', index: 'status', type: 'badge', badge: StatusColumnBadge },
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
            this.role = record;
            this.delete(record);
          },
          iif: (item: STData, btn: STColumnButton, column: STColumn) => {
            return item.status === 2;
          },
        },
      ],
    },
  ];
  list = [];

  statusSelected: { Text: any; Value: any }[] = deepCopy(initialStatusSelected);

  constructor(
    injector: Injector,
    private roleSrv: IRoleService,
    private modalSrv: NzModalService,
    private modalHelper: ModalHelper,
  ) {
    super(injector);
  }

  ngOnInit() {
    this.role = deepCopy(this.initialRole);
    this.getList();
  }

  refresh() {
    this.getList();
  }

  reset() {
    this.f.reset(this.initialRole);
    this.handleCancel();
  }

  getList() {
    this.roleSrv.query({ request: { name: '' } }).subscribe((x: any) => {
      if (!x) {
        return;
      }
      this.list = x;
    });
  }

  add($event: any) {
    this.role = deepCopy(this.initialRole);
    this.isVisible = true;

    this.modalHelper.create(RoleEditComponent, { record: this.role }).subscribe(x => {
      console.log(x);
    });
  }

  edit($event: any) {
    this.role = {
      id: $event.id,
      status: $event.status,
      name: $event.name,
    };
    this.isVisible = true;
  }

  handleCancel = ($event?: any) => {
    this.isVisible = false;
  };

  handleOk = ($event?: any) => {
    this.save($event);
    return false;
    // this.isVisible = false;
  };

  save($event?: any) {
    // this.loading = true;
    if (this.role.id === undefined) {
      this.roleSrv.create({ request: this.role }).subscribe(x => {
        this.notifySrv.success();
        this.getList();
        this.reset();
        this.loading = false;
      });
    } else {
      this.roleSrv.update({ request: this.role }).subscribe(x => {
        this.notifySrv.success();
        this.getList();
        this.reset();
        this.loading = false;
      });
    }
  }

  delete($event: any) {
    if (this.role.id !== undefined) {
      this.roleSrv.delete({ request: { id: this.role.id } }).subscribe(x => {
        this.notifySrv.success();
        this.reset();
        this.getList();
      });
    } else {
      this.notifySrv.info('请选择需要删除的记录！');
    }
  }

  setStatus($event: any) {
    if ($event.id !== undefined) {
      const param = {
        id: $event.id,
        name: $event.name,
        status: $event.status === 1 ? 2 : 1,
      };
      this.roleSrv.update({ request: param }).subscribe(x => {
        this.notifySrv.success();
        this.reset();
        this.getList();
      });
    } else {
      this.notifySrv.info('请选择一条记录！');
    }
  }
}
