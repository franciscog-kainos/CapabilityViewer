import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from '../data.service';
import { JobFamily } from '../JobFamily';
import { Role } from '../Role';
import { Capability } from '../Capability';
import { Band } from '../Band';
import { Observable } from 'rxjs';

@Component({
  selector: 'table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})

export class TablePageComponent implements OnInit {

  jobFamilies: JobFamily[];
  roles: Role[];
  bands: Band[];
  capabilities: Capability[];
  data: DataService;
  rowData = [];
  columnDefs = [];
  
  ngOnInit() {
  }

  constructor(private location: Location, data: DataService) {
    data.getAllJobFamilies().subscribe(res => {
      this.jobFamilies = res;
      this.makeTheTable(this.jobFamilies);
    });
  }

  goBack() {
    this.location.back();
  }

  makeTheTable(jobFamilies: JobFamily[]) {
    this.rowData = [
      { business_development: 'Toyota', model: 'Celica', price: 35000 },
      { business_development: 'Ford', model: 'Mondeo', price: 32000 },
      { business_development: 'Porsche', model: 'Boxter', price: 72000 }
    ];


    this.columnDefs = [
      {
        headerName: jobFamilies[0].job_family_name,
        children: [
          { headerName: 'Business development', field: 'business_development', width: 150, filter: 'agTextColumnFilter' },
          { headerName: 'Account Management', field: 'age', width: 90, filter: 'agNumberColumnFilter' },
          { headerName: 'Sales', field: 'country', width: 120 }
        ]
      },
      {
        headerName: jobFamilies[1],
        children: [
          { headerName: 'Software engineer', field: 'sport', width: 90, columnGroupShow: 'open' },
          { headerName: 'Data Engineering', columnGroupShow: 'open', field: 'total', width: 100, filter: 'agNumberColumnFilter' },
        ]
      }
    ];

    var gridOptions = {
      defaultColDef: {
        sortable: true,
        resizable: true,
        filter: true
      },
      debug: true,
      columnDefs: this.columnDefs,
      rowData: this.rowData
    };
  }
}
