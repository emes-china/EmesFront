import { Injector } from '@angular/core';
import { Router } from '@angular/router';
import { ReuseTabService } from '@delon/abc';
import { NotificationService } from '../service/notification.service';

export class BaseComponent {
  protected notifySrv: NotificationService;
  constructor(public injector: Injector) {
    this.notifySrv = injector.get(NotificationService);
  }
  close($event: any) {
    const rt = this.injector.get(ReuseTabService);
    if (!rt.closable) {
      this.injector.get(NotificationService).info('当前页不允许关闭！');
      return;
    }
    rt.close(this.injector.get(Router).url);
  }
}
