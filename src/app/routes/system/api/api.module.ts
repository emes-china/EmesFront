/**
 * Emes.Erp.ISystem
 *
 * OpenAPI spec version: 1.0.0.0
 * 
 *
 * NOTE: 当前文件是由工具自动生成，请不要修改.
 * Copyright (c) 2019-present anber<shuangyan_m@hotmail.com>
 * Do not edit the class manually.
 */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IModuleService } from './api/iModule.service';
import { IOrganizationService } from './api/iOrganization.service';
import { IPostService } from './api/iPost.service';
import { IRoleService } from './api/iRole.service';
import { ITestService } from './api/iTest.service';
import { IUserService } from './api/iUser.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    IModuleService,
    IOrganizationService,
    IPostService,
    IRoleService,
    ITestService,
    IUserService ]
})
export class ApiModule {
}
