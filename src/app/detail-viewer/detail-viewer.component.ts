import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../data.service';
import { Band } from '../Band';
import { Role } from '../Role';

@Component({
    selector: 'detail-viewer',
    templateUrl: './detail-viewer.component.html',
    styleUrls: ['./detail-viewer.component.css']
})
export class DetailViewerComponent implements OnInit {
    data: DataService;
    band: Band;
    role: Role;
    detailID: string;
    detailType: string;

    constructor(private location: Location, data: DataService, private route: ActivatedRoute, private router: Router) {
        //Get parameters from page url
        route.paramMap.subscribe((params: ParamMap) =>{
                this.detailID = params.get('detailID');
                this.detailType = params.get('detailType');
            }
        );

        //Get data from API to be displayed
        if (this.detailType == "role") {
            data.getRole(this.detailID).subscribe(response => {
                this.role = response;
            });
        }

        if(this.detailType == "band"){
            data.getBand(this.detailID).subscribe(response => {
                this.band = response;
            });
        }
    }

    ngOnInit() {
        this.band = new Band('');
    }

    goBack() {
        this.router.navigate(['/table-page']);
    }
}
