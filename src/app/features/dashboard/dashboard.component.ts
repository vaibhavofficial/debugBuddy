import { Component } from '@angular/core';
import { UserData } from '../../core/constants/constant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  displayedColumns: string[] = ['id', 'name', 'post', 'age']; // Define columns to be displayed

  // Example data
  userData: UserData[] = [
    { id: '1', name: 'Alice', post: 'developer', age: '33' },
    { id: '2', name: 'Bob', post: 'developer', age: '33' },
    { id: '3', name: 'Charlie', post: 'developer', age: '33' },

    { id: '1', name: 'Alice', post: 'developer', age: '33' },
    { id: '2', name: 'Bob', post: 'developer', age: '33' },
    { id: '3', name: 'Charlie', post: 'developer', age: '33' },

    { id: '1', name: 'Alice', post: 'developer', age: '33' },
    { id: '2', name: 'Bob', post: 'developer', age: '33' },
    { id: '3', name: 'Charlie', post: 'developer', age: '33' },

    { id: '1', name: 'Alice', post: 'developer', age: '33' },
    { id: '2', name: 'Bob', post: 'developer', age: '33' },
    { id: '3', name: 'Charlie', post: 'developer', age: '33' },

    { id: '1', name: 'Alice', post: 'developer', age: '33' },
    { id: '2', name: 'Bob', post: 'developer', age: '33' },
    { id: '3', name: 'Charlie', post: 'developer', age: '33' },

    // Add more data as needed
  ];
}
