import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
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

  constructor(private location: Location, data: DataService) {
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
    this.role = new Role();
  }

  goBack() {
    //TODO - change the way this navigates back
    this.location.back();
  }
}
