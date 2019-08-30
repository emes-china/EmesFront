import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// import { LicenseManager } from 'ag-grid-emes';
// LicenseManager.setLicenseKey(
//   'fvD4zeQKw67tN/bhxuXOVhHoftG6m6u0lFIsoOGscUiow/oOO6xc1N6VWJmZPKieP+lf10o6M7CrfG9vdAoP5w8pDMeEAxxIWxctucV9LhlIE5+tvI0EwfN125PrUFDqSeVKUobgS1Vps4PRVv/iqhwgEvEMO6tK9Kd+XNBkcXM=',
// );

import { preloaderFinished } from '@delon/theme';
preloaderFinished();

import { hmrBootstrap } from './hmr';

if (environment.production) {
  enableProdMode();
}

const bootstrap = () => {
  return platformBrowserDynamic()
    .bootstrapModule(AppModule, {
      defaultEncapsulation: ViewEncapsulation.Emulated,
      preserveWhitespaces: false,
    })
    .then(res => {
      if ((window as any).appBootstrap) {
        (window as any).appBootstrap();
      }
      return res;
    });
};

if (environment.hmr) {
  // tslint:disable-next-line: no-string-literal
  if (module['hot']) {
    hmrBootstrap(module, bootstrap);
  } else {
    console.error('HMR is not enabled for webpack-dev-server!');
    console.log('Are you using the --hmr flag for ng serve?');
  }
} else {
  bootstrap();
}
