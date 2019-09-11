import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DataService } from '../data.service';
import { Band } from '../Band';
import { Role } from '../Role';
import { Observable } from 'rxjs';

@Component({
    selector: 'detail-viewer',
    templateUrl: './detail-viewer.component.html',
    styleUrls: ['./detail-viewer.component.css']
})
export class DetailViewerComponent implements OnInit {
    data: DataService;
    band: Band;
    role: Role;
    role$: Observable<Role>;

    constructor(private location: Location, data: DataService, private route: ActivatedRoute, private router: Router) {
        data.getBandDetails(1).subscribe(response => {
            this.band = response;
            console.log(this.band);
        });

        data.getRole(1).subscribe(response => {
            this.role = response;
            console.log(this.role);
        });
    }

    ngOnInit() {
        this.band = new Band();

        //let id = this.route.snapshot.paramMap.get('id');
        //this.role = this.data.getRole(id);
        this.role$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.data.getRole(params.get('id')))
        );
    }

    goBack() {
        //TODO - change the way this navigates back
        this.router.navigate(['/table-page']);
    }
}
