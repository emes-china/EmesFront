import { Component, OnInit, Injector } from '@angular/core';
import { BaseComponent, StatusColumnBadge, DrawerService } from '@shared';
import { STColumn } from '@delon/abc';
import { SchemeEditComponent } from '../scheme-edit/scheme-edit.component';
import { ISchemeService } from '@System';

@Component({
  selector: 'zc-scheme-list',
  templateUrl: './scheme-list.component.html',
  styles: [],
})
export class SchemeListComponent extends BaseComponent implements OnInit {
  nodes = [];
  selectNodes = [];
  initialForm = {
    title: '',
    name: '',
    desc: '',
    status: 1,
    frmType: 0,
    webId: undefined,
    fields: 0,
    contentData: '',
    contentParse: '',
    content: '',
    sortCode: 10,
  };
  keyword = '';
  columns: STColumn[] = [
    { title: '名称', index: 'name' },
    { title: '描述', index: 'desc', default: '-' },
    { title: '状态', index: 'status', type: 'badge', badge: StatusColumnBadge },
    {
      title: '操作',
      buttons: [
        {
          text: '编辑',
          icon: 'edit',
          type: 'link',
          click: (_record, modal) => {
            this.drawerSrv
              .edit(
                SchemeEditComponent,
                { record: _record, extra: this.selectNodes },
                {
                  size: 'xl',
                },
              )
              .subscribe(x => {
                if (x) {
                  this.refresh();
                }
              });
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
  constructor(injector: Injector, private schemeSrv: ISchemeService, private drawerSrv: DrawerService) {
    super(injector);
  }
  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.getList();
  }

  all() {
    this.keyword = '';
    this.refresh();
  }
  getList() {
    // this.schemeSrv.query({ request: { name: '' } }).subscribe((x: any) => {
    //   if (!x) return;
    //   this.list = x;
    // });
  }

  add() {
    this.drawerSrv
      .add(
        SchemeEditComponent,
        { record: this.initialForm, extra: this.selectNodes },
        {
          size: 'xl',
        },
      )
      .subscribe(x => {
        if (x) {
          this.refresh();
        }
      });
  }

  delete($event) {
    if ($event.id !== undefined) {
      // this.schemeSrv.delete({ request: { id: $event.id } }).subscribe(x => {
      //   this.notifySrv.success();
      //   this.getList();
      // });
    } else {
      this.notifySrv.info('请选择需要删除的记录！');
    }
  }
}
