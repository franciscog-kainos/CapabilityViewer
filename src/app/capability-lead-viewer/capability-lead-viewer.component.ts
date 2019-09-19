import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../data.service";
import {Capability} from "../Capability";
import {Location} from "@angular/common";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {ICapability} from '../icapability';
import {IUser} from "../IUser";

@Component({
  selector: 'capability-lead-viewer',
  templateUrl: './capability-lead-viewer.component.html',
  styleUrls: ['./capability-lead-viewer.component.css']
})
export class CapabilityLeadViewerComponent implements OnInit {
  data: DataService;
  @Input() capability: ICapability;
  @Input() leader: IUser;
  id: string;

  constructor(private location: Location, data: DataService, private route: ActivatedRoute, private router: Router) {
    route.paramMap.subscribe((params: ParamMap) =>{
          this.id = params.get('id');
        }
    );

    data.getCapability(this.id).subscribe(response => {
      this.capability = response;
      console.log(this.capability);
      data.getUser(this.capability.leader_id).subscribe(value => {
        this.leader = value;
      });
    });
  }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['/table-page']);
  }
}
