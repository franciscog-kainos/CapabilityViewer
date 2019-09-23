import {Component, OnInit, Output} from '@angular/core';
import {Location} from '@angular/common';
import {DataService} from '../data.service';
import {Role} from '../Role';
import {Capability} from '../Capability';
import {Band} from '../Band';
import {GridApi, GridOptions} from 'ag-grid-community';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'table-page',
    templateUrl: './table-page.component.html',
    styleUrls: ['./table-page.component.css']
})

export class TablePageComponent implements OnInit {

    roles: Role[];
    bands: Band[];
    capabilities: Capability[];
    data: DataService;
    columnDefs = [];
    rowData = [];
    public gridOptions: GridOptions;
    components;
    private gridApi: GridApi;
    filterText: string;
    private params;

    ngOnInit() {
        console.log(this.gridOptions.api);
        console.log('init called');
    }

    onGridReady(params) {
        // Preparation for grid api
        this.params = params;
        this.gridApi = params.api;
        this.data.generateTableData(
            (update) => {
                this.gridApi.setRowData(update);
            },
            (update) => {
                this.gridApi.setColumnDefs(update);
                Capability.numberOfCapabilities = update.length;
            });
    }

    quickFilter() {
        // Use ag-grids search function
        this.gridApi.setQuickFilter(this.filterText);
    }


    constructor(private location: Location, data: DataService, private route: ActivatedRoute, private router: Router) {
        this.data = data;
        this.gridOptions = <GridOptions>{};
        this.components = {nameCellRenderer: NameCellRenderer};


    }

    goBack() {
        this.router.navigate(['/landing-page']);
    }

    navigateToDetailView(type: string, id: number) {
        this.router.navigate(['/detail-viewer/' + type + "/" + id]);
    }

    navigateToCapabilityView(id: number) {
        this.router.navigate(['/capability/' + id]);
    }

    onCellClicked(event) {
        var focusedCell = this.gridOptions.api.getFocusedCell();
        var row = this.gridOptions.api.getDisplayedRowAtIndex(focusedCell.rowIndex);
        var cellValue = this.gridOptions.api.getValue(focusedCell.column, row);

        if (cellValue.type == "role") {
            var id = cellValue.role_id;
        } else if (cellValue.type == "band") {
            var id = cellValue.band_id;
        }

        this.navigateToDetailView(cellValue.type, id);
    }
}

//TODO - ON COLUMN HEADER CLICKED

function NameCellRenderer() {

}

NameCellRenderer.prototype.init = function (params) {
    this.eGui = document.createElement('span');
    if (params.value != undefined) {
        if (params.value.type == 'role') {
            this.eGui.innerHTML = params.value.role_name;
        } else {
            this.eGui.innerHTML = params.value.band_name;
        }
    }
};

NameCellRenderer.prototype.getGui = function () {
    return this.eGui;
};
