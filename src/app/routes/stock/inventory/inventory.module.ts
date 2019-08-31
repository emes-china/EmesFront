import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryRoutingModule } from './inventory-routing.module';

@NgModule({
  declarations: [InventoryListComponent],
  imports: [SharedModule, InventoryRoutingModule],
})
export class InventoryModule {}
