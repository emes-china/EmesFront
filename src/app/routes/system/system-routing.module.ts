import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'organization',
    loadChildren: () => import('./organization/organization.module').then(m => m.OrganizationModule),
  },
  {
    path: 'post',
    loadChildren: () => import('./post/post.module').then(m => m.PostModule),
  },
  {
    path: 'role',
    loadChildren: () => import('./role/role.module').then(m => m.RoleModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  },
  {
    path: 'module',
    loadChildren: () => import('./module/module.module').then(m => m.ModuleModule),
  },
  {
    path: 'flow-form',
    loadChildren: () => import('./flow-form/flow-form.module').then(m => m.FlowFormModule),
  },
  {
    path: 'flow-scheme',
    loadChildren: () => import('./flow-scheme/flow-scheme.module').then(m => m.FlowSchemeModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemRoutingModule {}
