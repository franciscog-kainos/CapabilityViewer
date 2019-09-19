import { Component, OnInit } from '@angular/core';
import {GridApi, GridOptions} from 'ag-grid-community';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'table-header-click',
  templateUrl: './table-header-click.component.html',
  styleUrls: ['./table-header-click.component.css']
})
export class TableHeaderClickComponent implements OnInit {

  private params: any;

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
  }

  // equivalent of init in IHeaderComp
  // IHeaderCompParams is same as non Angular version
  agInit(params): void {
    this.params = params;
  }
  // no getGui() or destroy(), all handled by Angular

  onHeaderClick() {
    //TODO - within table-page.component.ts, in generateTable(), when capabilities intialised in as column headers (~line 130), set field as capability ID. This way we can retrieve it.
    console.log(this.params.column.colId);
    const routeId = this.params.column.colId.replace('capability_', '');
    console.log(routeId);
    this.router.navigate(['/capability/' + routeId]);
  }
}
