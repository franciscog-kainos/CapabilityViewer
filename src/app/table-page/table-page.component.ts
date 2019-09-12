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

  generateTable(jobFamilies: JobFamily[], capabilities: Capability[], bands2: Band[], roles: Role[]) {
    this.rowData = [];
   
    var currentBandId = 1; //bands start at one

    var rowToAppend = []; 
    var columnsToShow = ["firstColumn","secondColumn","thirdColumn","fourthColumn"]; 

    var j = 0; 
    var bands = ["Executive","Principal","Manager","Senior","Associate"]; //Bands to display on the front end.
    
    var k = 0;
    rowToAppend["bandLevels"] = bands[k]; //The very first item in the row should be the band level.

    var i;
    for(i = 0; i < roles.length; i++){ //for each role
      if (currentBandId == roles[i].band_id){
      //we are in the current band, object should be appended to with new roles    
      rowToAppend[columnsToShow[j]]= roles[i].role_name; //Here we are building up the row with the new role

      } else {
        // band has changed, we should push the new band and create a new one.

        rowToAppend["bandLevels"]= bands[k];  //add band level for new row
        k++; 
        
        this.rowData.push(rowToAppend); //push the completed band row

        rowToAppend = []; //empty the row that was being built up
        j = 0; //reset the counter which keeps track of which columns should be shown (so that it starts building the new row from column 0)
        
        //Add a role to the new band with 
        rowToAppend[columnsToShow[j]]= roles[i].role_name;
      }
     j++; 
     currentBandId = roles[i].band_id; // update what band we are in
    }

    rowToAppend["bandLevels"]= bands[k];  
    this.rowData.push(rowToAppend);
    // When the loop has finished, push the final row it was building up. 

    console.log("Full data \n" );

    this.columnDefs = [
      {
        headerName: "Band Level",
        children: [
          { headerName: '', field: 'bandLevels', width: 0, filter: 'agTextColumnFilter' },
        ]
      },
      {
        headerName: "Sales and Marketing",
        children: [
          { headerName: 'Business development', field: 'firstColumn', width: 200, filter: 'agTextColumnFilter' },
          { headerName: 'Account Management', field: 'secondColumn', width: 200, filter: 'agNumberColumnFilter' },
          { headerName: 'Sales', field: 'thirdColumn', width: 200 },
          { headerName: 'Sales', field: 'fourthColumn', width: 200 }
        ]
      },
      {
        headerName: "Technical",
        children: [
          { headerName: 'Software engineer', field: 'sda', width: 200, columnGroupShow: 'open' },
          { headerName: 'Data Engineering', columnGroupShow: 'open', field: 'total', width: 200, filter: 'agNumberColumnFilter' },
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
