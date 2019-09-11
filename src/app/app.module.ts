import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { AppComponents, AppRoutes } from "./app.routing";
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { PageHeaderComponent } from './page-header/page-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    declarations: [
        AppComponent,
        PageHeaderComponent,
        ...AppComponents
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule,
        RouterModule.forRoot(AppRoutes),
        NgbModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatExpansionModule,
        AgGridModule.withComponents([])
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
