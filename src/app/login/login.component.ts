import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../auth.service';
import { AuthUser } from '../AuthUser';
import {DataService} from '../data.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  	private data: DataService;
  	authUser: AuthUser;

	constructor(private router: Router, private route: ActivatedRoute, data: DataService, private authenticationService: AuthenticationService) {
  		this.data = data;
	}

    ngOnInit() {

    	this.authUser = new AuthUser();

    }

    login() : void {

    	if (this.authenticationService.login(this.authUser.user_username)) {

        	this.router.navigate(['/landing-page']);

        } else {

        	
        	
        }
    }
}