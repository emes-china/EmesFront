import { Component, OnInit } from '@angular/core';
import { STColumn } from '@delon/abc';
import { DrawerHelper } from '@delon/theme';
import { IPostService } from '../../api';
@Component({
  selector: 'emes-post-list',
  templateUrl: './post-list.component.html',
  styles: [],
})
export class PostListComponent implements OnInit {
  constructor(private postSrv: IPostService, private drawerHelper: DrawerHelper) {}
  // mock
  columns: STColumn[] = [
    { title: '名称', index: 'name', default: '-' },
    { title: '编号', index: 'no' },
    { title: '助记码', index: 'mnemonicCode' },
    { title: '职责', index: 'notes' },
  ];
  list = [];
  ngOnInit() {
    this.getList();
  }
  getList() {
    this.postSrv.query({ request: {} }).subscribe((x: any) => {
      this.list = x;
    });
  }
  create() {}
}
