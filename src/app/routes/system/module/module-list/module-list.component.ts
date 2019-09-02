import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IModuleService } from '@System';
import { BaseComponent, ModalService, ArrayService } from '@shared';
import { STColumn, STChange } from '@delon/abc';
import { ModuleEditComponent } from '../module-edit/module-edit.component';
import { ModuleElementEditComponent } from '../module-element-edit/module-element-edit.component';
export interface TreeNodeInterface {
  /**
   * 上级模块  Desc:上级机构
   */
  parentId?: string;
  name?: string;
  /**
   * 排序号
   */
  sortNo?: number;
  /**
   * 节点语义ID
   */
  cascadeId?: string;
  /**
   * 权限编码
   */
  aclCode?: number;
  /**
   * 模块标记
   */
  code?: string;
  /**
   * 地址
   */
  url?: string;
  /**
   * 图标
   */
  icon?: string;
  id?: string;
  level: number;
  expand: boolean;
  children?: TreeNodeInterface[];
}

@Component({
  selector: 'zc-module-list',
  templateUrl: './module-list.component.html',
  styles: [],
})
export class ModuleListComponent extends BaseComponent implements OnInit {
  nodes = [];
  selectNodes = [];
  module;
  initialModule = {
    parentId: undefined,
    name: '',
    sortNo: 0,
    cascadeId: '',
    aclCode: '',
    code: '',
    url: '',
    icon: '',
  };
  moduleElement;
  initialModuleElement = {
    name: '',
    sort: 0,
    moduleId: '',
    aclCode: '',
    script: '',
    url: '',
    icon: '',
  };

  keyword = '';
  columns: STColumn[] = [
    { title: '--', index: 'id', type: 'radio' },
    { title: '名称', index: 'name' },
    { title: '权限编码', index: 'aclCode' },
    { title: '调用脚本', index: 'script' },
    { title: '图标', index: 'icon' },
  ];
  list = [];
  mapOfExpandedData: { [key: string]: TreeNodeInterface[] } = {};

  constructor(
    injector: Injector,
    private arrSrv: ArrayService,
    private moduleSrv: IModuleService,
    private modalSrv: ModalService,
  ) {
    super(injector);
  }
  ngOnInit() {
    this.module = this.initialModule;
    this.moduleElement = this.initialModuleElement;
    this.refresh();
  }
  refresh() {
    this.getList();
    this.getSubItem();
  }

  all() {
    this.keyword = '';
    this.refresh();
  }
  getList() {
    this.moduleSrv.query({ request: { name: '' } }).subscribe((x: any) => {
      if (!x) return;
      this.nodes = this.arrSrv.arrToTree(x, {
        parentIdMapName: 'parentId',
      });
      this.nodes.forEach(item => {
        this.mapOfExpandedData[item.id] = this.convertTreeToList(item);
      });
      this.selectNodes = this.arrSrv.arrToTreeNode(x, {
        parentIdMapName: 'parentId',
        titleMapName: 'name',
      });
    });
  }

  getSubItem() {
    this.moduleSrv.queryelement({ request: { moduleId: this.module.id, name: this.keyword } }).subscribe((x: any) => {
      if (!x) return;
      this.list = x;
    });
  }

  add() {
    this.modalSrv.add(ModuleEditComponent, { record: this.initialModule, extra: this.selectNodes }).subscribe(x => {
      if (x) {
        this.refresh();
      }
    });
  }
  select($event) {
    this.module = $event.node.origin;
    this.getSubItem();
  }

  delete($event) {
    if (this.module.id !== undefined) {
      this.moduleSrv.delete({ request: { id: this.module.id } }).subscribe(x => {
        this.notifySrv.success();
        this.getList();
        this.getSubItem();
      });
    } else {
      this.notifySrv.info('请选择需要删除的记录！');
    }
  }

  edit($event) {
    if (this.module.id !== undefined) {
      this.modalSrv.edit(ModuleEditComponent, { record: this.module, extra: this.selectNodes }).subscribe(x => {
        if (x) {
          this.refresh();
        }
      });
    } else {
      this.notifySrv.info('请选择需要编辑的记录！');
    }
  }

  change(ret: STChange) {
    if (ret.type === 'radio') {
      this.moduleElement = ret.radio;
    }
  }

  addElement($event) {
    if (this.module) {
      this.initialModuleElement.moduleId = this.module.id;
    }
    this.modalSrv
      .add(ModuleElementEditComponent, { record: this.initialModuleElement, extra: this.selectNodes })
      .subscribe(x => {
        if (x) {
          this.refresh();
        }
      });
  }

  editElement($event) {
    if (this.moduleElement.id !== undefined) {
      this.modalSrv
        .edit(ModuleElementEditComponent, { record: this.moduleElement, extra: this.selectNodes })
        .subscribe(x => {
          if (x) {
            this.refresh();
          }
        });
    } else {
      this.notifySrv.info('请选择需要编辑的记录！');
    }
  }

  deleteElement($event) {
    if (this.moduleElement.id !== undefined) {
      this.moduleSrv.deleteelement({ request: { id: this.moduleElement.id } }).subscribe(x => {
        this.notifySrv.success();
        this.getList();
        this.getSubItem();
      });
    } else {
      this.notifySrv.info('请选择需要删除的记录！');
    }
  }

  //#region tree
  collapse(array: TreeNodeInterface[], data: TreeNodeInterface, $event: boolean): void {
    if ($event === false) {
      if (data.children) {
        data.children.forEach(d => {
          const target = array.find(a => a.id === d.id)!;
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root: object): TreeNodeInterface[] {
    const stack: any[] = [];
    const array: any[] = [];
    const hashMap = {};
    stack.push({ ...root, level: 0, expand: true });

    while (stack.length !== 0) {
      const node = stack.pop();
      this.visitNode(node, hashMap, array);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({ ...node.children[i], level: node.level + 1, expand: true, parent: node });
        }
      }
    }

    return array;
  }

  visitNode(node: TreeNodeInterface, hashMap: { [key: string]: any }, array: TreeNodeInterface[]): void {
    if (!hashMap[node.id]) {
      hashMap[node.id] = true;
      array.push(node);
    }
  }

  trClick(item) {
    this.arrSrv.visitTree(this.nodes, i => {
      i.isCheck = i.id === item.id;
    });
    this.module = item;
    this.nodes.forEach(i => {
      this.mapOfExpandedData[i.id] = this.convertTreeToList(i);
    });
    // this.nodes = [...this.nodes];
  }
  //#endregion
}
