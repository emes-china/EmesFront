import { Component, OnInit, ViewChild, Injector, AfterViewInit, OnDestroy } from '@angular/core';
import { BaseModalComponent, Mode, BaseDrawerComponent } from '@shared';
import { NgForm } from '@angular/forms';
import { initialStatusSelected } from '@shared/model/status-type';
import { deepCopy, LazyService } from '@delon/util';
import { NzModalRef, NzDrawerRef } from 'ng-zorro-antd';
import { IFormService } from '@System';
declare const UE: any;

@Component({
  selector: 'zc-form-edit',
  templateUrl: './form-edit.component.html',
  styles: [],
})
export class FormEditComponent extends BaseDrawerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('f', { static: false }) f: NgForm;
  ueFl;
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
  statusSelected = deepCopy(initialStatusSelected);

  constructor(injector: Injector, drawerRef: NzDrawerRef, private formSrv: IFormService, private lazySrv: LazyService) {
    super(injector, drawerRef);
  }

  reset() {
    this.f.reset(this.initialForm);
  }

  ok() {
    let srv;
    this.record.content = this.ueFl.getContent();
    if (this.mode == Mode.Add) {
      srv = this.formSrv.create({ request: this.record });
    } else if (this.mode == Mode.Edit) {
      srv = this.formSrv.update({ request: this.record });
    }
    srv.subscribe(x => {
      this.notifySrv.success();
      this.reset();
      this.drawerRef.close(true);
    });
  }
  ngAfterViewInit(): void {
    this.ueFl = UE.getEditor('fl-editor', {
      // allowDivTransToP: false,//阻止转换div 为p
      toolleipi: true,
      textarea: 'design_content',
      // 这里可以选择自己需要的工具按钮名称,此处仅选择如下五个
      toolbars: [
        [
          'fullscreen',
          'source',
          '|',
          'undo',
          'redo',
          '|',
          'bold',
          'italic',
          'underline',
          'fontborder',
          'strikethrough',
          'removeformat',
          '|',
          'forecolor',
          'backcolor',
          'insertorderedlist',
          'insertunorderedlist',
          '|',
          'indent',
          '|',
          'justifyleft',
          'justifycenter',
          'justifyright',
          'justifyjustify',
        ],
      ],
      // 关闭字数统计
      wordCount: false,
      // 关闭elementPath
      elementPathEnabled: false,
      autoHeightEnabled: true,
      // 默认的编辑区域高度
      initialFrameHeight: 430,
      UEDITOR_HOME_URL: './assets/ueditor/',
      themePath: '/assets/ueditor/themes/',
      iframeCssUrl: '/assets/ueditor/formdesign/bootstrap/css/bootstrap.min.css', // 引入自身 css使编辑器兼容你网站css
      // 更多其他参数，请参考ueditor.config.js中的配置项
    });
    this.ueFl.ready(x => {
      this.ueFl.setContent(this.record.content);
    });
  }

  ngOnDestroy(): void {
    this.ueFl.destroy();
  }
}
