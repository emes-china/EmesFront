import { NgModule } from '@angular/core';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { SharedModule } from '@shared';
import { PostCreateComponent } from './post-create/post-create.component';

@NgModule({
  declarations: [PostListComponent, PostCreateComponent],
  imports: [SharedModule, PostRoutingModule],
  entryComponents: [PostCreateComponent],
})
export class PostModule {}
