import { Component, OnInit, Input, Injector } from '@angular/core';
import { IRoleService } from '@System';
import { NotificationService, BaseModalComponent } from '@shared';
import { NzModalRef } from 'ng-zorro-antd';

@Component({
  selector: 'zc-role-edit',
  templateUrl: './role-edit.component.html',
  styles: [],
})
export class RoleEditComponent extends BaseModalComponent {
  constructor(injector: Injector, modalRef: NzModalRef, private roleSrv: IRoleService) {
    super(injector, modalRef);
  }
}
