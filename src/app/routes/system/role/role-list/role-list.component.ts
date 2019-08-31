import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { STColumn, STColumnButton, STComponent, STData, STPage } from '@delon/abc';
import { ModalHelper } from '@delon/theme';
import { deepCopy } from '@delon/util';
import { BaseComponent } from '@shared/components/base.component';
import { StatusColumnBadge } from '@shared';
import { IRoleService } from '@System';
import { NzModalService } from 'ng-zorro-antd';
import { RoleEditComponent } from '../role-edit/role-edit.component';
import { Mode } from '@core';

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

  constructor(injector: Injector, private roleSrv: IRoleService, private modalSrv: NzModalService) {
    super(injector);
  }

  ngOnInit() {
    this.getList();
  }

  refresh() {
    this.getList();
  }

  stChange(e: any) {
    switch (e.type) {
      case 'pi':
        this.searchParams.PageIndex = e.pi;
        this.getList(false);
        break;
      case 'ps':
        this.searchParams.PageSize = e.ps;
        this.getList();
        break;
    }
  }

  getList(resetPageIndex = true) {
    if (resetPageIndex) {
      this.searchParams.PageIndex = 1;
    }
    this.roleSrv.query({ request: this.searchParams as any }).subscribe((x: any) => {
      if (!x) {
        return;
      }
      this.list = x;
    });
  }

  add() {
    const nzModalRef = this.modalSrv.create({
      nzContent: RoleEditComponent,
      nzTitle: '新增',
      nzComponentParams: {
        mode: Mode.Add,
      },
      nzOnOk: e => {
        e.save();
        return false;
      },
    });

    if (nzModalRef) {
      nzModalRef.afterClose.subscribe(x => {
        if (x) {
          this.getList();
        }
      });
    }
  }

  edit(record: any) {
    record = {
      id: record.id,
      status: record.status,
      name: record.name,
    };
    const nzModalRef = this.modalSrv.create({
      nzContent: RoleEditComponent,
      nzTitle: `编辑`,
      nzComponentParams: {
        record,
        mode: Mode.Edit,
      },
      nzOnOk: e => {
        e.save();
        return false;
      },
    });

    if (nzModalRef) {
      nzModalRef.afterClose.subscribe(x => {
        if (x) {
          this.getList();
        }
      });
    }
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
