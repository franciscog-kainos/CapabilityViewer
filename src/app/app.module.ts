import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { PageHeaderComponent } from './page-header/page-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {TablePageComponent} from "./table-page/table-page.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {DetailViewerComponent} from "./detail-viewer/detail-viewer.component";
import { CapabilityLeadViewerComponent } from './capability-lead-viewer/capability-lead-viewer.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { TableHeaderClickComponent } from './table-header-click/table-header-click.component';
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    LandingPageComponent,
    TablePageComponent,
    DetailViewerComponent,
    PageNotFoundComponent,
    CapabilityLeadViewerComponent,
    TableHeaderClickComponent,
    AdminPageComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule,
        HttpClientModule,
        AgGridModule.withComponents([TableHeaderClickComponent]),
        BrowserAnimationsModule,
        MatExpansionModule,
        AppRoutingModule,
        CommonModule,
        MatCardModule,
        AppRoutingModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatMenuModule,
        MatInputModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
