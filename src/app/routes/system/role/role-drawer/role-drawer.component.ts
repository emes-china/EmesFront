import { Component, Input } from '@angular/core';
import { deepCopy } from '@delon/util';
import { NotificationService } from '@shared';
import { NzDrawerRef, NzFormatEmitEvent } from 'ng-zorro-antd';

@Component({
  selector: 'zc-role-drawer',
  templateUrl: './role-drawer.component.html',
  styles: [],
})
export class RoleDrawerComponent {
  step = 1; // 步骤
  isShowLastBtn = false; // 是否显示上一步按钮
  isShowNextBtn = true; // 是否显示下一步按钮
  private _record = [];

  @Input()
  set record(value: any) {
    if (value) {
      this._record = deepCopy(value);
      this.queryList();
    }
  }
  get record() {
    return this._record;
  }

  nodes: any[] = [
    {
      title: '流程中心',
      key: '0-0',
      children: [
        { title: '已处理流程', key: '0-0-0', isLeaf: true },
        { title: '待处理流程', key: '0-0-1', isLeaf: true },
        { title: '我的流程', key: '0-0-2', isLeaf: true },
      ],
    },
    {
      title: '基础配置',
      key: '0-1',
      children: [
        { title: '流程设计', key: '0-1-0-0', isLeaf: true },
        { title: '部门管理', key: '0-1-0-1', isLeaf: true },
        { title: '表单设计', key: '0-1-0-2', isLeaf: true },
        { title: '分类管理', key: '0-1-0-3', isLeaf: true },
        { title: '模块管理', key: '0-1-0-4', isLeaf: true },
        { title: '角色管理', key: '0-1-0-5', isLeaf: true },
        { title: '资源管理', key: '0-1-0-6', isLeaf: true },
        { title: '用户管理', key: '0-1-0-7', isLeaf: true },
      ],
    },
    {
      title: '消息日志',
      key: '0-2',
      children: [
        { title: '系统消息', key: '0-2-0', isLeaf: true },
        { title: '我的消息', key: '0-2-1', isLeaf: true },
        { title: '我的消息', key: '0-2-2', isLeaf: true },
        { title: '我的消息', key: '0-2-3', isLeaf: true },
      ],
    },
  ];
  defaultCheckedKeys = ['0-0-0', '0-1-0-0', '0-2-0'];
  defaultSelectedKeys = ['0-0-0', '0-1-0-0', '0-2-0'];
  defaultExpandedKeys = ['0-0', '0-1', '0-2'];

  operates = [
    {
      pname: '流程中心',
      name: '已处理流程',
      isSys: true,
      isField: false,
      children: [{ checked: true, name: '查看详情' }],
    },
    {
      pname: '流程中心',
      name: '待处理流程',
      isSys: true,
      isField: false,
      children: [{ checked: true, name: '处理' }, { checked: true, name: '进度详情' }],
    },
    {
      pname: '流程设计',
      name: '待处理流程',
      isSys: true,
      isField: false,
      children: [{ checked: true, name: '查看' }, { checked: true, name: '删除' }, { checked: true, name: '添加' }],
    },
    {
      pname: '基础配置',
      name: '分类管理',
      isSys: false,
      isField: true,
      children: [{ checked: true, name: '编辑' }, { checked: true, name: '删除' }, { checked: true, name: '添加' }],
    },
    {
      pname: '基础配置',
      name: '资源管理',
      isSys: false,
      isField: true,
      children: [{ checked: true, name: '编辑' }, { checked: true, name: '删除' }, { checked: true, name: '添加' }],
    },
  ];

  fields = [
    {
      pname: '基础配置',
      name: '分类管理',
      isSys: false,
      isField: true,
      children: [
        { checked: true, name: '名称' },
        { checked: true, name: '是否可用' },
        { checked: true, name: '排序号' },
        { checked: true, name: '分类图标' },
        { checked: true, name: '分类描述' },
        { checked: true, name: '分类类型ID' },
        { checked: true, name: 'ID' },
      ],
    },
    {
      pname: '基础配置',
      name: '资源管理',
      isSys: false,
      isField: true,
      children: [
        { checked: true, name: '排序号' },
        { checked: true, name: '描述' },
        { checked: true, name: '支援所属应用ID' },
        { checked: true, name: '所属应用名称' },
        { checked: true, name: '分类名称' },
        { checked: true, name: '分类ID' },
        { checked: true, name: '是否可用' },
        { checked: true, name: '节点语义ID' },
        { checked: true, name: '功能模块名称' },
        { checked: true, name: '父节点流水号' },
        { checked: true, name: '父节点名称' },
        { checked: true, name: 'ID' },
      ],
    },
  ];

  constructor(private ref: NzDrawerRef, private notifySrv: NotificationService) {}

  nzClick(event: NzFormatEmitEvent) {
    event.node.isChecked = deepCopy(event.node.isSelected);
  }

  nzCheckBox(event: NzFormatEmitEvent) {
    event.node.isSelected = deepCopy(event.node.isChecked);
  }

  /**
   * 上一步
   */
  lastStep() {
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
    if (this.step < 3) {
      this.step += 1;
      this.isShowLastBtn = true;
    }

    if (this.step === 3) {
      this.ref.close(true);
    }
  }

  /**
   * 根据角色查询模块
   */
  queryList() {
    //
  }

  cancel() {
    this.ref.close();
  }
}
