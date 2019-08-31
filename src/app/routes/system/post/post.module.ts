import { NgModule } from '@angular/core';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [PostListComponent],
  imports: [SharedModule, PostRoutingModule],
  entryComponents: [],
})
export class PostModule {}
