import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-node-list',
  templateUrl: './node-list.component.html',
  styleUrl: './node-list.component.scss',
})
export class NodeListComponent {
  @Input() data: any;

  //
  isExpanded: boolean = false;

  toggleWidth() {
    this.isExpanded = !this.isExpanded;
  }
}
