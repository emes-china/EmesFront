import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserListComponent],
  imports: [SharedModule, UserRoutingModule],
  entryComponents: [],
})
export class UserModule {}
