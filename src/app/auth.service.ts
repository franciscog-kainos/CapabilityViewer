import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {DataService} from './data.service';
import { environment } from './environment';
import { AuthUser } from './AuthUser';
import { AuthResponse } from './AuthResponse';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private currentUserSubject: BehaviorSubject<AuthUser>;
    public currentUser: Observable<AuthUser>;
    authUsers: AuthUser[];
  	data: DataService;

    constructor(private http: HttpClient, data: DataService) {
    	// NEED TO CHANGE THIS TO USE DATABASE
    	this.data = data;
        this.currentUserSubject = new BehaviorSubject<AuthUser>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        
        data.getAllUsernames().subscribe(response => {
            this.authUsers = response;
        });
    }

    public get currentUserValue(): AuthUser {
        return this.currentUserSubject.value;
    }

    login(data) : Observable<AuthResponse> {

    	let authResponse = new AuthResponse(); 

    	for (var i = 0; i < this.authUsers.length; i++) {

	    	if (this.authUsers[i].user_username == data.user_username){
	    		i = i + 1;
	    		data.user_id=i;
	    		authResponse.user = data;
	    		return this.data.login(authResponse);
	    	}

	    }

	    // return false;

        // return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
        //     .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                // NEED TO CHANGE THIS TO USE DATABASE
    	//         localStorage.setItem('currentUser', JSON.stringify(user));
    	//         this.currentUserSubject.next(user);
    	//         return user;
    	//     }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}