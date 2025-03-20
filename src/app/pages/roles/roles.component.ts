import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { NzTableModule, NzTableQueryParams } from 'ng-zorro-antd/table';

interface Role {
  uuid: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [NzTableModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  total = 1;
  listOfRoles: Role[] = [];
  loading = true;
  pageSize = 5;
  pageIndex = 1;
  filterName = [
    { text: 'super-admin', value: 'super-admin' },
    { text: 'role-1', value: 'role-1' },
  ];

  loadDataFromServer(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    filter: Array<{ key: string; value: string[] }>
  ): void {
    this.loading = true;
    this.getUsers(pageIndex, pageSize, sortField, sortOrder, filter).subscribe(
      (data) => {
        this.loading = false;
        this.total = 5; // mock the total data here
        this.listOfRoles = data.results;
      }
    );
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex, sort, filter } = params;
    const currentSort = sort.find((item) => item.value !== null);
    const sortField = (currentSort && currentSort.key) || null;
    const sortOrder = (currentSort && currentSort.value) || null;
    this.loadDataFromServer(pageIndex, pageSize, sortField, sortOrder, filter);
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadDataFromServer(this.pageIndex, this.pageSize, null, null, []);
  }

  getUsers(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    filters: Array<{ key: string; value: string[] }>
  ): Observable<{ results: Role[] }> {
    let params = new HttpParams()
      .append('page', `${pageIndex}`)
      .append('limit', `${pageSize}`)
      .append('sortBy', `${sortField}`)
      .append('orderType', `${sortOrder}`);
    filters.forEach((filter) => {
      filter.value.forEach((value) => {
        params = params.append(filter.key, value);
      });
    });
    return this.http
      .get<{ data: { items: Role[] } }>(
        'http://localhost:4999/api/hades-context/v1/role-management/list/',
        {
          params,
        }
      )
      .pipe(
        map((response) => ({
          results: response.data.items,
        })),
        catchError(() => of({ results: [] }))
      );
  }
}
