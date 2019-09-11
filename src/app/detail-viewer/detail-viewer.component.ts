import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'detail-viewer',
  templateUrl: './detail-viewer.component.html',
  styleUrls: ['./detail-viewer.component.css']
})
export class DetailViewerComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    //TODO - change the way this navigates back
    this.location.back();
  }
}
