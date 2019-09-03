import { Component, OnInit, Injector } from '@angular/core';
import { STColumn } from '@delon/abc';
import { StatusColumnBadge, BaseComponent, DrawerService } from '@shared';
import { InventoryEditComponent } from '../inventory-edit/inventory-edit.component';
import { IStockService } from '@Stock';

@Component({
  selector: 'zc-inventory-list',
  templateUrl: './inventory-list.component.html',
  styles: [],
})
export class InventoryListComponent extends BaseComponent implements OnInit {
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
                InventoryEditComponent,
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
  constructor(injector: Injector, private stockSrv: IStockService, private drawerSrv: DrawerService) {
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
        InventoryEditComponent,
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
