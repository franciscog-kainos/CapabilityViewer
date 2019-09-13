import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'company-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Career Lattice V2.0';

rowData = [
    { business_development: 'Toyota', model: 'Celica', price: 35000 },
    { business_development: 'Ford', model: 'Mondeo', price: 32000 },
    { business_development: 'Porsche', model: 'Boxter', price: 72000 }
];


 columnDefs = [
  {
      headerName: 'Sales and Marketing',
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

  constructor () { }
}
