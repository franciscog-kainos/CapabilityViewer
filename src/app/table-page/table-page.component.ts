import {Component, OnInit, Output} from '@angular/core';
import {Location} from '@angular/common';
import {DataService} from '../data.service';
import {JobFamily} from '../JobFamily';
import {Role} from '../Role';
import {Capability} from '../Capability';
import {Band} from '../Band';
import {Observable} from 'rxjs';
import {GridOptions} from 'ag-grid-community';
import {ActivatedRoute, Router} from '@angular/router';

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

    private width = 200;

    public gridOptions: GridOptions;
    components;

    ngOnInit() {
        console.log(this.gridOptions.api);
    }

    onGridReady() {
        console.log(this.gridOptions.api);
    }

    constructor(private location: Location, data: DataService, private route: ActivatedRoute, private router: Router) {
        this.gridOptions = <GridOptions> {};
        this.components = {nameCellRenderer: NameCellRenderer};
        this.data = data;
        data.getAllFromDatabase().subscribe(responseList => {
            //DO EVERYTHING INSIDE SUBSCRIPTION
            this.jobFamilies = responseList[0];
            this.capabilities = responseList[1];
            this.bands = responseList[2];
            this.roles = responseList[3];
            this.generateTable(this.jobFamilies, this.capabilities, this.bands, this.roles);
            this.filterWithUser();
        });
    }

    filterWithUser() {
        if (this.data.mockUser) {
            this.generateTable(this.jobFamilies, [this.data.mockUser.capability], this.bands, this.roles);
        }
    }

    goBack() {
        this.router.navigate(['/landing-page']);
    }

    navigateToDetailView(type: string, id: number) {
        this.router.navigate(['/detail-viewer/' + type + '/' + id]);
    }

    generateTable(jobFamilies: JobFamily[], capabilities: Capability[], bands: Band[], roles: Role[]) {
        this.rowData = [];

        var currentBandId = 1; //bands start at one

        var rowToAppend = [];
        var columnsToShow = ['firstColumn', 'secondColumn', 'thirdColumn', 'fourthColumn'];

        var j = 0;

        var k = 0;
        rowToAppend['bandLevels'] = bands[k]; //The very first item in the row should be the band level.
        bands[k].type = 'band';
        var i;
        for (i = 0; i < roles.length; i++) { //for each role
            if (currentBandId == roles[i].band_id) {
                //we are in the current band, object should be appended to with new roles
                rowToAppend[columnsToShow[j]] = roles[i]; //Here we are building up the row with the new role
                roles[i].type = 'role';

            } else {
                // band has changed, we should push the new band and create a new one.

                rowToAppend['bandLevels'] = bands[k];  //add band level for new row
                bands[k].type = 'band';
                k++;

                this.rowData.push(rowToAppend); //push the completed band row

                rowToAppend = []; //empty the row that was being built up
                j = 0; //reset the counter which keeps track of which columns should be shown (so that it starts building the new row from column 0)

                //Add a role to the new band with
                rowToAppend[columnsToShow[j]] = roles[i];
                roles[i].type = 'role';
            }
            j++;
            currentBandId = roles[i].band_id; // update what band we are in
        }

        rowToAppend['bandLevels'] = bands[k];
        bands[k].type = 'band';
        this.rowData.push(rowToAppend);
        // When the loop has finished, push the final row it was building up.

        console.log('Full data \n');
        this.columnDefs = [

            {
                headerName: 'Band Level',
                children: [
                    {headerName: '', cellRenderer: 'nameCellRenderer', field: 'bandLevels', width: 0, filter: 'agTextColumnFilter'},
                ]
            },
            {
                headerName: 'Sales and Marketing',
                children: [
                    {
                        headerName: 'Business development',
                        cellRenderer: 'nameCellRenderer',
                        field: 'firstColumn',
                        width: this.width,
                        filter: 'agTextColumnFilter'
                    },
                    {
                        headerName: 'Account Management',
                        cellRenderer: 'nameCellRenderer',
                        field: 'secondColumn',
                        width: this.width,
                        filter: 'agNumberColumnFilter'
                    },
                    {headerName: 'Sales', cellRenderer: 'nameCellRenderer', field: 'thirdColumn', width: this.width},
                    {headerName: 'Sales', cellRenderer: 'nameCellRenderer', field: 'fourthColumn', width: this.width}
                ]
            },
            {
                headerName: 'Technical',
                children: [
                    {headerName: 'Software engineer', field: 'sda', width: this.width, columnGroupShow: 'open'},
                    {headerName: 'Data Engineering', columnGroupShow: 'open', field: 'total', width: this.width, filter: 'agNumberColumnFilter'},
                ]
            }
        ];
    }

    onCellClicked(event) {
        var focusedCell = this.gridOptions.api.getFocusedCell();
        var row = this.gridOptions.api.getDisplayedRowAtIndex(focusedCell.rowIndex);
        var cellValue = this.gridOptions.api.getValue(focusedCell.column, row);

        if (cellValue.type == 'role') {
            window.alert('This is a cell of type ' + cellValue.type + ' with id ' + cellValue.role_id);
        } else if (cellValue.type == 'band') {
            window.alert('This is a cell of type ' + cellValue.type + ' with id ' + cellValue.band_id);
        }
    }

    /*
      onColumnClicked(event){
        var focusedColumn = this.gridOptions.columnApi.getAllColumns();
        window.alert("Column things " + focusedColumn);
        console.log("Column selected");
      }*/

}

function NameCellRenderer() {

}

NameCellRenderer.prototype.init = function(params) {
    this.eGui = document.createElement('span');
    if (params.value != undefined) {
        if (params.value.type == 'role') {
            this.eGui.innerHTML = params.value.role_name;
        } else if (params.value.type == 'band') {
            this.eGui.innerHTML = params.value.band_name;
        }
    }
};

NameCellRenderer.prototype.getGui = function() {
    return this.eGui;
};
