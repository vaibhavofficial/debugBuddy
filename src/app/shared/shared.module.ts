import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';

import { NodeListComponent } from './components/node-list/node-list.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
  imports: [MaterialModule],
  declarations: [NodeListComponent, ProgressBarComponent],
  exports: [MaterialModule, NodeListComponent, ProgressBarComponent],
})
export class SharedModule {}
