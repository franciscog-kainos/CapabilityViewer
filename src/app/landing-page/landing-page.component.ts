import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {User} from '../user';
import {Capability} from '../Capability';
import {Role} from '../Role';
import {Band} from '../Band';
import {DataService} from '../data.service';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  private data: DataService;


  constructor(private router: Router, data: DataService) {
    this.data = data;
  }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(["table-page"]);
  }
}
