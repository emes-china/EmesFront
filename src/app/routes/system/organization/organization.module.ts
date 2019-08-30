import { NgModule } from '@angular/core';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [OrganizationListComponent],
  imports: [SharedModule, OrganizationRoutingModule],
})
export class OrganizationModule {}
