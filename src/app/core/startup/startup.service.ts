import { Injectable, Injector, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { zip } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MenuService, SettingsService, TitleService, ALAIN_I18N_TOKEN, Menu } from '@delon/theme';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { ACLService } from '@delon/acl';
import { TranslateService } from '@ngx-translate/core';
import { I18NService } from '../i18n/i18n.service';

import { NzIconService } from 'ng-zorro-antd/icon';
import { ICONS_AUTO } from '../../../style-icons-auto';
import { ICONS } from '../../../style-icons';
import { AppService, ArrayService } from '@shared';

/**
 * Used for application startup
 * Generally used to get the basic data of the application, like: Menu Data, User Data, etc.
 */
@Injectable()
export class StartupService {
  constructor(
    iconSrv: NzIconService,
    private menuService: MenuService,
    private translate: TranslateService,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    private settingService: SettingsService,
    private aclService: ACLService,
    private titleService: TitleService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private httpClient: HttpClient,
    private injector: Injector,
    private appSrv: AppService,
    private arrSrv: ArrayService,
  ) {
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
  }

  private viaHttp(resolve: any, reject: any) {
    zip(this.httpClient.get(`assets/i18n/${this.i18n.defaultLang}.json`), this.httpClient.get('assets/app-data.json'))
      .pipe(
        catchError(([langData, appData]) => {
          resolve(null);
          return [langData, appData];
        }),
      )
      .subscribe(
        ([langData, appData]) => {
          // Setting language data
          this.translate.setTranslation(this.i18n.defaultLang, langData);
          this.translate.setDefaultLang(this.i18n.defaultLang);

          // Application data
          const res: any = appData;
          // Application information: including site name, description, year
          this.settingService.setApp(res.app);
          // User information: including name, avatar, email address
          this.settingService.setUser(res.user);
          // ACL: Set the permissions to full, https://ng-alain.com/acl/getting-started
          // this.aclService.setFull(true);
          // Menu data, https://ng-alain.com/theme/menu
          this.menuService.add(res.menu);
          // Can be set page suffix title, https://ng-alain.com/theme/title
          this.titleService.suffix = res.app.name;
        },
        () => {},
        () => {
          resolve(null);
        },
      );
  }

  private viaMockI18n(resolve: any, reject: any) {
    this.httpClient.get(`assets/i18n/${this.i18n.defaultLang}.json`).subscribe(langData => {
      this.translate.setTranslation(this.i18n.defaultLang, langData);
      this.translate.setDefaultLang(this.i18n.defaultLang);
      this.httpClient.get<any>('/api/user/acl').subscribe(acl => {
        const abs = acl.abilities && acl.abilities.length > 0 ? acl.abilities[0].split(',') : [];
        this.aclService.setAbility(abs);
        // Menu data, https://ng-alain.com/theme/menu
        if (this.tokenService.get().token) {
          this.appSrv.enableProbe();
          this.httpClient
            .post<any>('/api/module/query', {
              request: {
                name: '',
              },
            })
            .subscribe(x => {
              const tree = this.arrSrv.arrToTree(x, {
                parentIdMapName: 'parentId',
              });
              this.menuService.clear();
              this.menuService.add(this.generateMenu(tree));
            });
        }
      });
      this.viaMock(resolve, reject);
    });
  }

  private viaMock(resolve: any, reject: any) {
    // const tokenData = this.tokenService.get();
    // if (!tokenData.token) {
    //   this.injector.get(Router).navigateByUrl('/passport/login');
    //   resolve({});
    //   return;
    // }
    // mock
    const app: any = {
      name: `Emes`,
      description: `Emes ERP, do better`,
    };
    const user: any = {
      name: 'Admin',
      avatar: './assets/images/avatar.jpg',
      email: 'admin@emes.com',
      token: '123456789',
    };
    // Application information: including site name, description, year
    this.settingService.setApp(app);
    // User information: including name, avatar, email address
    this.settingService.setUser(user);
    // ACL: Set the permissions to full, https://ng-alain.com/acl/getting-started
    // this.aclService.setFull(true);

    // Can be set page suffix title, https://ng-alain.com/theme/title
    this.titleService.suffix = app.name;

    resolve({});
  }

  load(): Promise<any> {
    // only works with promises
    // https://github.com/angular/angular/issues/15088
    return new Promise((resolve, reject) => {
      // http
      // this.viaHttp(resolve, reject);
      // mock：请勿在生产环境中这么使用，viaMock 单纯只是为了模拟一些数据使脚手架一开始能正常运行
      this.viaMockI18n(resolve, reject);
    });
  }
  private generateMenu(data: any, isTop: boolean = true): Menu[] {
    const menu: Menu[] = [];
    data.forEach((d: any) => {
      const m: Menu = {
        text: d.name,
        link: d.url,
        icon: { type: 'icon', value: d.icon },
        acl: { ability: [`${d.aclCode}`] },
      };
      if (d.children && d.children.length > 0) {
        m.children = this.generateMenu(d.children, false);
      }
      menu.push(m);
    });
    return menu;
  }
}
