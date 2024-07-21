import { Component } from '@angular/core';

@Component({
  selector: 'app-node-list',
  templateUrl: './node-list.component.html',
  styleUrl: './node-list.component.scss',
})
export class NodeListComponent {
  //
  isExpanded: boolean = false;

  toggleWidth() {
    this.isExpanded = !this.isExpanded;
  }
}
