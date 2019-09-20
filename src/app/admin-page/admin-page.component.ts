import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Band} from '../Band';
import {Role} from '../Role';
import {TrainingResource} from '../TrainingResource';
import {Location} from '@angular/common';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {JobFamily} from '../JobFamily';
import {Training} from '../Training';
import {TrainingCategory} from '../TrainingCategory';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'company-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  data: DataService;
  trainings: Training[];
  trainingCategories: TrainingCategory[];
  newBand: Band;
  newTrainings: Array<Training>;

  // tslint:disable-next-line:max-line-length
  constructor(private location: Location, data: DataService, private route: ActivatedRoute, private router: Router, private _snackBar: MatSnackBar) {
    // Get data from API to be displayed
    this.data = data;
    data.getTrainings().subscribe(response => {
      this.trainings = response;
    });

    data.getTrainingCategories().subscribe(response => {
      this.trainingCategories = response;
    });
  }

  ngOnInit() {
    this.newBand = new Band(this.newBand);
    this.newTrainings = new Array<Training>();
  }

  addBand(addForm): void {
    const bandToAdd: Band = this.newBand;
    this.newBand = new Band(addForm);
    this.data.addBand(bandToAdd);
  }

  onSubmit() {
    //submit code here
    // pull data from form
    // split it into band and training info
    //create a band - i.e. add a band in db
    //retrieve the id of band we created, then id of trainings selected
    alert('submitted!');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
