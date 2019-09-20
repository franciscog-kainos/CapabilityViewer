import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import {JobFamily} from '../JobFamily'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'company-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})


export class AdminPageComponent implements OnInit {
  data: DataService;
  jobFamilies: JobFamily[] = [
  ];

  newFamily: JobFamily;

  constructor(data: DataService,private _snackBar: MatSnackBar) {
    this.data = data;
    data.getAllJobFamilies().subscribe(responseList => {
      var loadedFamilies = responseList;
      var displayFamilies
      this.jobFamilies = loadedFamilies;
    });

  }

  editFamily(editForm): void{
    this.data.updateFamily(this.newFamily);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  ngOnInit() {
      this.newFamily = new JobFamily()
  }

}
