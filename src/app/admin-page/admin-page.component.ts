import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { JobFamily } from '../JobFamily';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'company-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  data: DataService;
  public newFamily: JobFamily;


  constructor(dataservice: DataService, private _snackBar: MatSnackBar) { 
    this.data = dataservice;
  }

  ngOnInit() {
    this.newFamily = new JobFamily();

  }

  
  addFamily(addForm): void{
    const familyToAdd: JobFamily = this.newFamily;
    this.newFamily = new JobFamily();
    console.log(familyToAdd);
    this.data.addFamily(familyToAdd);
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
    duration: 2000,
    });
  }
}
