import {
  Component,
  ViewChild,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { AppListData, pageSizeOptions } from '../../../core/constants/constant';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  pageSizeOptions = pageSizeOptions;
  @Input() displayedColumns: string[] = [];
  @Input() appListData: AppListData[] = [];
  @Output() appListEvent = new EventEmitter<string>();

  dataSource: MatTableDataSource<AppListData>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(this.appListData);
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.appListData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  rowClicked(app: AppListData) {
    console.log('Row clicked: ', app);
    this.appListEvent.emit(app.id);
  }
}
