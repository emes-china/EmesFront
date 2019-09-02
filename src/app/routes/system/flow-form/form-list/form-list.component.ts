import { Component, Injector, OnInit } from '@angular/core';
import { STColumn } from '@delon/abc';
import { ArrayService } from '@delon/util';
import { BaseComponent, ModalService, StatusColumnBadge, DrawerService } from '@shared';
import { IFormService } from '@System';
import { FormEditComponent } from '../form-edit/form-edit.component';

@Component({
  selector: 'zc-form-list',
  templateUrl: './form-list.component.html',
  styles: [],
})
export class FormListComponent extends BaseComponent implements OnInit {
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
    { title: '标题', index: 'title', default: '-' },
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
            this.drawerSrv.edit(FormEditComponent, { record: _record, extra: this.selectNodes }).subscribe(x => {
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
  constructor(
    injector: Injector,
    private arrSrv: ArrayService,
    private formSrv: IFormService,
    private drawerSrv: DrawerService,
  ) {
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
    this.formSrv.query({ request: { name: '' } }).subscribe((x: any) => {
      if (!x) return;
      this.list = x;
    });
  }

  add() {
    this.drawerSrv.add(FormEditComponent, { record: this.initialForm, extra: this.selectNodes }).subscribe(x => {
      if (x) {
        this.refresh();
      }
    });
  }

  delete($event) {
    if ($event.id !== undefined) {
      this.formSrv.delete({ request: { id: $event.id } }).subscribe(x => {
        this.notifySrv.success();
        this.getList();
      });
    } else {
      this.notifySrv.info('请选择需要删除的记录！');
    }
  }
}
