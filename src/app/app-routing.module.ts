import { NgModule } from '@angular/core';

import { LandingPageComponent } from "./landing-page/landing-page.component";
import { TablePageComponent } from "./table-page/table-page.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule, Routes} from "@angular/router";
import {DetailViewerComponent} from "./detail-viewer/detail-viewer.component";
import {CapabilityLeadViewerComponent} from "./capability-lead-viewer/capability-lead-viewer.component";

const appRoutes: Routes = [
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'table-page', component: TablePageComponent },
  { path: 'detail-viewer/:detailType/:detailID', component: DetailViewerComponent },
  { path: 'capability/:id', component: CapabilityLeadViewerComponent },
  { path: '',   redirectTo: '/landing-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forRoot(appRoutes),
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
