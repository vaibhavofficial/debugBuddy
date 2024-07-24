import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface UserData {
  id: string;
  name: string;
  post: string;
  age: string;
  // Add more fields as needed
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  displayedColumns: string[] = ['id', 'name', 'post', 'age']; // Define columns to be displayed

  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.userData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor() {
    this.dataSource = new MatTableDataSource(this.userData);
  }

  rowClicked(user: UserData) {
    console.log('Row clicked: ', user);
    // Implement your logic here for what happens when a row is clicked
  }
}
