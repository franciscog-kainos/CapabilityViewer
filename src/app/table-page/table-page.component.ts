import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {DataService } from '../data.service';
import { JobFamily } from '../JobFamily';

@Component({
  selector: 'table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.css']
})
export class TablePageComponent implements OnInit {
  data: DataService;
  jobFamilies: JobFamily[];

  constructor(private location: Location,  dataService: DataService) { 
   // var jobFamilies = this.data.jobFamilies;
   this.data = dataService;
   this.jobFamilies = this.getJobFamilies();
   console.log(this.jobFamilies);
  // console.log(this.data.getAllJobFamilies());
  //console.log(this.data.jobFamilies);
  }

  ngOnInit() {
    this.data.getAllJobFamilies();
   // console.log(this.data);
    //console.log(this.data.getJobFamilies());
  }

  goBack() {
    this.location.back();
  }

  getJobFamilies(): JobFamily[] {
    var jobFamilies = this.data.getJobFamilies();
    return jobFamilies;
  }


rowData = [
  { business_development: 'Toyota', model: 'Celica', price: 35000 },
  { business_development: 'Ford', model: 'Mondeo', price: 32000 },
  { business_development: 'Porsche', model: 'Boxter', price: 72000 }
];


columnDefs = [
{
    headerName: "this.data.jobFamilies",
    children: [
        {headerName: 'Business development', field: 'business_development', width: 150, filter: 'agTextColumnFilter'},
        {headerName: 'Account Management', field: 'age', width: 90, filter: 'agNumberColumnFilter'},
        {headerName: 'Sales', field: 'country', width: 120}
    ]
},
{
    headerName: 'Technical',
    children: [
        {headerName: 'Software engineer', field: 'sport', width: 90, columnGroupShow: 'open'},
        {headerName: 'Data Engineering', columnGroupShow: 'open', field: 'total', width: 100, filter: 'agNumberColumnFilter'},
    ]
}
];

gridOptions = {
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
