import {TablePageComponent} from "./table-page/table-page.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {DetailViewerComponent} from "./detail-viewer/detail-viewer.component";

export const AppRoutes: any = [
    { path: "", component: LandingPageComponent },
    { path: "table-page", component: TablePageComponent },
    { path: "detail-viewer", component: DetailViewerComponent }
];

export const AppComponents: any = [
    LandingPageComponent,
    TablePageComponent,
    DetailViewerComponent
];