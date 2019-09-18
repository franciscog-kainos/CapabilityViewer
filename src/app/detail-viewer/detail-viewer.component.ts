import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../data.service';
import { Band } from '../Band';
import { Role } from '../Role';
import { TrainingResource } from '../TrainingResource';

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
    trainingResources: TrainingResource[];
    categories: Set<string>;

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
             data.getBandTraining(this.detailID).subscribe(response => {
                 if(response != null){
                     this.trainingResources.push(response);
                     for(let resource of this.trainingResources){
                        if(resource && resource.training_category != null){
                         this.categories.add(resource.training_category);
                        }
                     }
                 }
            });

        }
    }

    ngOnInit() {
        this.band = new Band('');
        this.role = new Role('');
        this.trainingResources = [];
        this.categories = new Set();
    }

    goBack() {
        this.router.navigate(['/table-page']);
    }
}
