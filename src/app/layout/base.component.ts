import { Component, Inject, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { ReuseTabService } from '@delon/abc';
import { NotificationService } from '@core';

@Component({
  selector: 'emes-base',
  template: ``,
})
export class BaseComponent {
  constructor(public injector: Injector) {}

  close($event) {
    const rt = this.injector.get(ReuseTabService);
    if (!rt.closable) {
      this.injector.get(NotificationService).info('当前页不允许关闭！');
      return;
    }
    rt.close(this.injector.get(Router).url);
  }
}
