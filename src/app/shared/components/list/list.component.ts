import { Component, ViewChild, AfterViewInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { UserData, pageSizeOptions } from '../../../core/constants/constant';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  pageSizeOptions = pageSizeOptions;
  @Input() displayedColumns: string[] = [];
  @Input() userData: UserData[] = [];

  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(this.userData);
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.userData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  rowClicked(user: UserData) {
    console.log('Row clicked: ', user);
    // Implement your logic here for what happens when a row is clicked
  }
}
