import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({ name: 'status' })
export class StatusPipe implements PipeTransform {
  constructor(private dom: DomSanitizer) {}

  transform(value: number): SafeHtml {
    let html = '';
    switch (value) {
      case 1:
        html = `<span class="text-success">正常</span>`;
        break;
      case 2:
        html = `<span class="text-danger">停用</span>`;
        break;
      default:
        html = `<span class="text-grey">未知</span>`;
        break;
    }
    return this.dom.bypassSecurityTrustHtml(html);
  }
}
