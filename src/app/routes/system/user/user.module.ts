import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from './user-routing.module';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  declarations: [UserListComponent, UserEditComponent],
  imports: [SharedModule, UserRoutingModule],
  entryComponents: [],
})
export class UserModule {}
