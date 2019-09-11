import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { DataService } from '../data.service';
import { Band } from '../Band';

@Component({
  selector: 'detail-viewer',
  templateUrl: './detail-viewer.component.html',
  styleUrls: ['./detail-viewer.component.css']
})
export class DetailViewerComponent implements OnInit {
   data: DataService;
   band: Band;

  constructor(private location: Location, data: DataService) {
      data.getBandDetails(1).subscribe(response => {
          this.band = response;
          console.log(this.band);
      });
      }

  ngOnInit() {
    this.band = new Band();
  }

  goBack() {
    //TODO - change the way this navigates back
    this.location.back();
  }
}
