import { Injectable } from '@angular/core';
import { NzNotificationService, NzMessageService } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private notifySrv: NzNotificationService, private msgSrv: NzMessageService) {}

  success(m: string = '') {
    this.notifySrv.create('success', '执行成功', m);
  }
  error(m: string = '') {
    this.notifySrv.create('error', '执行失败', m);
  }
  info(m: string = '') {
    this.notifySrv.create('info', '温馨提示', m);
  }
  warning(m: string = '') {
    this.notifySrv.create('warning', '警告提示', m);
  }
  loading(m: string = '') {
    this.msgSrv.loading(m);
  }
}
