import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  constructor() {}
}
