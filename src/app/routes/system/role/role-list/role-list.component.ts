import { Component, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationService } from '@core';
import { STColumn, STColumnButton, STData, STComponent } from '@delon/abc';
import { deepCopy } from '@delon/util';
import { BaseComponent } from '@layout/base.component';
import { StatusColumnBadge } from '@shared';
import { IRoleService } from '@System';
import { NzModalService } from 'ng-zorro-antd';

export const initialStatusSelected = [{ Text: '停用', Value: 2 }, { Text: '正常', Value: 1 }];

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'zc-role-list',
  templateUrl: './role-list.component.html',
  styles: [],
})
export class RoleListComponent extends BaseComponent implements OnInit {
  @ViewChild('f', { static: false }) f: NgForm;
  nodes = [];
  selectNodes = [];
  initialRole = {
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
          text: '删除',
          icon: 'delete',
          type: 'del',
          click: (record, _modal, comp) => {
            this.role = record;
            this.delete(record);
          },
          iif: (item: STData, btn: STColumnButton, column: STColumn) => {
            return true;
          },
        },
      ],
    },
  ];
  list = [{ id: 1, name: 'aaa', status: 1 }, { id: 2, name: 'aaa', status: 1 }];

  statusSelected: { Text: any; Value: any }[] = deepCopy(initialStatusSelected);

  @ViewChild('contentTip', { static: false }) contentTip: TemplateRef<any>;
  @ViewChild('footerTip', { static: false }) footerTip: TemplateRef<any>;
  isVisible = false;
  title = '新增角色';
  loading = false;

  constructor(injector: Injector, private roleSrv: IRoleService, private modalSrv: NzModalService) {
    super(injector);
  }

  ngOnInit() {
    this.role = this.initialRole;
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
      this.notifySrv.success();
    });
  }

  add($event: any) {
    this.role = this.initialRole;
    this.isVisible = true;
  }

  edit($event: any) {
    this.role = $event;
    this.isVisible = true;
  }

  handleCancel = () => {
    this.isVisible = false;
  };

  handleOk = () => {
    this.isVisible = false;
  };

  save($event: any) {
    // this.loading = true;
    if (this.role.id === undefined) {
      this.roleSrv.create({ request: this.role }).subscribe(x => {
        this.notifySrv.success();
        this.getList();
        this.reset();
        this.loading = false;
      });
    } else {
      this.roleSrv.update(this.role).subscribe(x => {
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
}
