import { UserCreateComponent } from './../user-create/user-create.component';
import { Component, OnInit } from '@angular/core';
import { STColumn } from '@delon/abc';
import { IUserService } from '../../api';
import { DrawerHelper } from '@delon/theme';

@Component({
  selector: 'emes-user-list',
  templateUrl: './user-list.component.html',
  styles: [],
})
export class UserListComponent implements OnInit {
  constructor(private userSrv: IUserService, private drawerHelper: DrawerHelper) {}
  // mock
  columns: STColumn[] = [
    { title: '姓名', index: 'name', default: '-' },
    { title: '系统名', index: 'systemName' },
    { title: '锁定', type: 'yn', index: 'isLock' },
    { title: '生效时间', type: 'date', index: 'effectiveDate' },
    { title: '备注', index: 'notes' },
  ];
  list = [];
  ngOnInit() {
    this.getList();
  }
  getList() {
    this.userSrv.query({ request: {} }).subscribe((x: any) => {
      this.list = x;
    });
  }
  create() {
    this.drawerHelper
      .create(
        '新增账号',
        UserCreateComponent,
        {},
        {
          size: 'xl',
        },
      )
      .subscribe(x => {
        if (x) {
          this.getList();
        }
      });
  }
}
