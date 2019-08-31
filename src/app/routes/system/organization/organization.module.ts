import { NgModule } from '@angular/core';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { SharedModule } from '@shared';
import { OrganizationEditComponent } from './organization-edit/organization-edit.component';

@NgModule({
  declarations: [OrganizationListComponent, OrganizationEditComponent],
  imports: [SharedModule, OrganizationRoutingModule],
  entryComponents: [OrganizationEditComponent],
})
export class OrganizationModule {}
