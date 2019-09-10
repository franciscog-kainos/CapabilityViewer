import {TablePageComponent} from "./table-page/table-page.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";


export const AppRoutes: any = [
    { path: "", component: LandingPageComponent },
    { path: "table-page", component: TablePageComponent }
];

export const AppComponents: any = [
    LandingPageComponent,
    TablePageComponent
];