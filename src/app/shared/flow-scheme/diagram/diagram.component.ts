import {
  Component,
  OnInit,
  AfterContentInit,
  OnChanges,
  OnDestroy,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  Input,
  SimpleChanges,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import * as BpmnJS from 'bpmn-js/dist/bpmn-modeler.production.min.js';
import { customTranslate } from '../lang/customTranslate';

@Component({
  selector: 'zc-diagram',
  template: `
    <div #ref class="diagram-container"></div>
  `,
  styles: [
    `
      .diagram-container {
        height: 100%;
        width: 100%;
      }
    `,
  ],
})
export class DiagramComponent implements AfterContentInit, OnChanges, OnDestroy {
  private bpmnJS: BpmnJS;
  @ViewChild('ref', { static: true }) private el: ElementRef;
  @Output() private importDone: EventEmitter<any> = new EventEmitter();

  @Input() private url: string;

  customTranslateModule = {
    translate: ['value', customTranslate],
  };

  constructor(private http: HttpClient) {
    this.bpmnJS = new BpmnJS({
      additionalModules: [this.customTranslateModule],
    });

    this.bpmnJS.on('import.done', ({ error }) => {
      if (!error) {
        this.bpmnJS.get('canvas').zoom('fit-viewport');
      }
    });
  }

  ngAfterContentInit(): void {
    this.bpmnJS.attachTo(this.el.nativeElement);
  }

  ngOnChanges(changes: SimpleChanges) {
    // re-import whenever the url changes
    if (changes.url) {
      this.loadUrl(changes.url.currentValue);
    }
  }

  ngOnDestroy(): void {
    this.bpmnJS.destroy();
  }

  /**
   * Load diagram from URL and emit completion event
   */
  loadUrl(url: string) {
    return this.http
      .get(url, { responseType: 'text' })
      .pipe(
        catchError(err => throwError(err)),
        importDiagram(this.bpmnJS),
      )
      .subscribe(
        warnings => {
          this.importDone.emit({
            type: 'success',
            warnings,
          });
        },
        err => {
          this.importDone.emit({
            type: 'error',
            error: err,
          });
        },
      );
  }
}

/**
 * An operator that imports the first XML piped via the piped diagram XML
 * into the passed BpmnJS instance.
 */
export const importDiagram = bpmnJS => <Object>(source: Observable<string>) =>
  new Observable<string>(observer => {
    const subscription = source.subscribe({
      next(xml: string) {
        // canceling the subscription as we are interested
        // in the first diagram to display only
        subscription.unsubscribe();

        bpmnJS.importXML(xml, (err, warnings) => {
          if (err) {
            observer.error(err);
          } else {
            observer.next(warnings);
          }

          observer.complete();
        });
      },
      error(e) {
        console.log('ERROR');
        observer.error(e);
      },
      complete() {
        observer.complete();
      },
    });
  });
