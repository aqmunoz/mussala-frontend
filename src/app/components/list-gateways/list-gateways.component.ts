import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Gateway } from 'src/app/shared/gateway';
import { ApiService } from './../../shared/api.service';

@Component({
  selector: 'app-list-gateways',
  templateUrl: './list-gateways.component.html',
  styleUrls: ['./list-gateways.component.css']
})
export class ListGatewaysComponent implements OnInit {

  position = new FormControl('above');
  gatewayData: any = [];
  dataSource!: MatTableDataSource<Gateway>;
  @ViewChild('paginator') paginator!: MatPaginator;
  displayedColumns: string[] = ['_id', 'name', 'serial', 'address', 'action'];

  constructor(private gatewayApi: ApiService) { 
    
  }

  ngOnInit(): void {
    this.gatewayApi.GetGateways().subscribe(data => {
      this.gatewayData = data;      
      this.dataSource = new MatTableDataSource<Gateway>(this.gatewayData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })
  }

  deleteGateway(index: number, e: { _id: any; }){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.gatewayApi.DeleteGateway(e._id).subscribe()
    }
  }

}
