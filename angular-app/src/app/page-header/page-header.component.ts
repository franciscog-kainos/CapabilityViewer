import { Component, OnInit } from '@angular/core';
import { Location, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  location: Location;

  constructor(public router: Router, location: Location) { }

  ngOnInit() { }

  goBack(){

  	if (this.router.url === '/table-page') {

      this.router.navigate(['/landing-page']);

	} else {

		this.router.navigate(['/table-page']);
	}
    
  };

}
