import { Component } from '@angular/core';
import { AppListData } from '../../core/constants/constant';
import { DashboardService } from './../../core/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  displayedColumns: string[] = ['id', 'name', 'post', 'age']; // Define columns to be displayed

  // Example data
  // appListData: AppListData[] = [];
  appListData: AppListData[] = [
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

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.dashboardService.getAppList().subscribe(
      (lists) => {
        this.appListData = lists;
        console.log('appListData', this.appListData);
      },
      (error) => {
        console.error('Error fetching lists:', error);
      }
    );
  }

  getAppListId(id: string) {
    console.log('Dashboard id', id);
    this.dashboardService.getAppDetails(id).subscribe(
      (details) => {
        console.log('appListData', details);
      },
      (error) => {
        console.error('Error fetching details:', error);
      }
    );
  }
}
