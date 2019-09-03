import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryEditComponent } from './inventory-edit/inventory-edit.component';

@NgModule({
  declarations: [InventoryListComponent, InventoryEditComponent],
  imports: [SharedModule, InventoryRoutingModule],
})
export class InventoryModule {}
