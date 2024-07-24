import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';

import { NodeListComponent } from './components/node-list/node-list.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  imports: [MaterialModule],
  declarations: [NodeListComponent, ProgressBarComponent, ListComponent],
  exports: [
    MaterialModule,
    NodeListComponent,
    ProgressBarComponent,
    ListComponent,
  ],
})
export class SharedModule {}
