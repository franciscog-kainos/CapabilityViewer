import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from '../data.service';
import { JobFamily } from '../JobFamily';
import { Role } from '../Role';
import { Capability } from '../Capability';
import { Band } from '../Band';
import { Observable } from 'rxjs';
import { GridOptions } from 'ag-grid-community';
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
  public gridOptions: GridOptions;
  
  ngOnInit() {
    console.log(this.gridOptions.api)
  }

  onGridReady() {
    console.log(this.gridOptions.api);
}

  constructor(private location: Location, data: DataService) {
    this.gridOptions = <GridOptions>{};
    data.getAllFromDatabase().subscribe(responseList => {
      //DO EVERYTHING INSIDE SUBSCRIPTION
      this.jobFamilies = responseList[0];
      this.capabilities = responseList[1];
      this.bands = responseList[2];
      this.roles = responseList[3];
      this.generateTable(this.jobFamilies, this.capabilities, this.bands, this.roles);
    });
  }

  goBack() {
    this.location.back();
  }

  generateTable(jobFamilies: JobFamily[], capabilities: Capability[], bands: Band[], roles: Role[]) {
    this.rowData = [
      { business_development: 'Toyota', model: 'Celica', price: 35000 },
      { business_development: 'Ford', model: 'Mondeo', price: 32000 },
      { business_development: 'Porsche', model: 'Boxter', price: 72000 }
    ];


    this.columnDefs = [
      {
        headerName: jobFamilies[0].job_family_name,
        children: [
          { headerName: capabilities[0].capability_name, field: 'business_development', width: 150, filter: 'agTextColumnFilter' },
          { headerName: capabilities[1].capability_name, field: 'age', width: 90, filter: 'agNumberColumnFilter' },
          { headerName: 'Sales', field: 'country', width: 120 }
        ]
      },
      {
        headerName: jobFamilies[1].job_family_name,
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
      rowData: this.rowData,
    };

  }

  onCellClicked(event){
    var focusedCell = this.gridOptions.api.getFocusedCell();
    var row = this.gridOptions.api.getDisplayedRowAtIndex(focusedCell.rowIndex);
    var cellValue = this.gridOptions.api.getValue(focusedCell.column, row)
    window.alert("This is a cell of value " + cellValue);
    console.log("Cell selected");
  }

  onColumnClicked(event){
    window.alert("This is a column");
    console.log("Column selected");
  }
}
