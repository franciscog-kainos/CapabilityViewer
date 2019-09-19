import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { JobFamily } from '../JobFamily';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'company-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  data: DataService;
  public newFamily: JobFamily;


  constructor(dataservice: DataService) { 
    this.data = dataservice;
   
    /*this.data.addFamily(newFamily).subscribe(res => {

    })*/
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
}
