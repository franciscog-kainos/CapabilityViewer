import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'company-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Career Lattice V2.0';

  constructor () { }
}
