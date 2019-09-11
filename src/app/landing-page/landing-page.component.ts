import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { PageHeaderComponent } from './page-header';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(["table-page"]);
  }
}
