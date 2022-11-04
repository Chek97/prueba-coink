import { RouterModule, Routes } from "@angular/router";
import { LoginComponent, MainComponent } from "./components";


const APP_ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'main', component: MainComponent},
    { path: '**', component: LoginComponent },
];

export const app_routing = RouterModule.forRoot(APP_ROUTES);