import { Component, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { deepCopy } from '@delon/util';
import { NotificationService, ArrayService, groupBy, ArrayServiceGetKeysByTreeNodeOptions } from '@shared';
import { NzDrawerRef, NzFormatEmitEvent, NzTreeNode, NzTreeComponent } from 'ng-zorro-antd';
import { IModuleService, IRoleService } from '@System';

@Component({
  selector: 'zc-role-drawer',
  templateUrl: './role-drawer.component.html',
  styles: [],
})
export class RoleDrawerComponent {
  @ViewChild('nzTreeComponent', { static: false }) nzTreeComponent: any;
  step = 1; // 步骤
  isShowLastBtn = false; // 是否显示上一步按钮
  isShowNextBtn = true; // 是否显示下一步按钮
  private _record: any;
  private _extra: any;
  fields=[];
  @Input()
  set record(value: any) {
    if (value) {
      this._record = deepCopy(value);
    }
    this.getAcl();
  }
  get record() {
    return this._record;
  }

  @Input()
  set extra(value: any) {
    this._extra = deepCopy(value);
  }
  get extra() {
    return this._extra;
  }

  moduleIds = [];

  meList = [];

  aclList = [];
  originalAcl = [];
  defaultCheckedKeys = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private ref: NzDrawerRef,
    private arrSrv: ArrayService,
    private moduleSrv: IModuleService,
    private roleSrv: IRoleService,
    private notifySrv: NotificationService,
  ) {}

  nzClick(event: NzFormatEmitEvent) {
    event.node.isChecked = deepCopy(event.node.isSelected);
  }

  nzCheckBox(event: NzFormatEmitEvent) {
    event.node.isSelected = deepCopy(event.node.isChecked);
  }

  getKeyCode(tree) {
    const opt = {
      includeHalfChecked: false,
    };
    const keys: any[] = [];
    this.arrSrv.visitTree(tree, (item: NzTreeNode, parent: NzTreeNode, deep: number) => {
      if (item.isChecked || (opt.includeHalfChecked && item.isHalfChecked)) {
        keys.push(item);
      }
    });
    return keys;
  }

  /**
   * 上一步
   */
  lastStep() {
    if (this.step === 1) {
      const ms = this.getKeyCode(this.extra);
      this.moduleIds = ms.map(x => x.origin.id);
      this.aclList = ms.map(x => x.origin.aclCode);
      this.meList = [];
    }
    if (this.step > 1) {
      this.step -= 1;
      if (this.step === 1) {
        this.isShowLastBtn = false;
      }
    }
  }

  /**
   * 下一步
   */
  nextStep() {
    if (this.step === 2) {
      this.save();

      return;
    }
    if (this.step < 3) {
      this.step += 1;
      this.isShowLastBtn = true;
    }
    if (this.step === 2) {
      const ms = this.getKeyCode(this.extra);
      this.aclList = ms.map(x => x.origin.aclCode);
      this.moduleSrv.queryelementbymids({ request: { ids: this.moduleIds } }).subscribe((x: any) => {
        x.forEach(e => {
          e.checked = this.originalAcl.some(a => a == e.aclCode);
        });
        this.meList = groupBy(x, o => [o.moduleId, o.moduleName]);
      });
    }
  }

  cancel() {
    this.ref.close();
  }

  pClick(item) {
    item.forEach(element => {
      element.checked = item.checked;
    });
  }

  save() {
    let aclCodes = [];
    this.meList.forEach(e => {
      e.forEach(m => {
        if (m.checked) {
          aclCodes.push(m.aclCode);
        }
      });
    });
    aclCodes = [...aclCodes, ...this.aclList];
    this.roleSrv.allocateacl({ request: { roleId: this.record.id, aclCodes } }).subscribe(x => {
      this.ref.close(true);
    });
  }

  getAcl() {
    this.defaultCheckedKeys = [];
    this.roleSrv.queryaclbyids({ request: { ids: [this._record.id] } }).subscribe((x: any) => {
      if (x.length > 0) {
        this.originalAcl = x[0].aclCode.split(',');
        const keys = [];
        this.arrSrv.visitTree(this.extra, item => {
          if (this.originalAcl.some(a => a == item.origin.aclCode)) {
            keys.push(item.key);
          }
        });
        this.defaultCheckedKeys = keys;
      }
    });
  }
}
