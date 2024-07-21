import { NgModule } from '@angular/core';
import { NodeListComponent } from './components/node-list/node-list.component';

@NgModule({
  declarations: [NodeListComponent],
  exports: [NodeListComponent],
})
export class SharedModule {}
