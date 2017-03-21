import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { Page1Component } from './pages/page1.component';
import { Page2Component } from './pages/page2.component';
import { Page3Component } from './pages/page3.component';
import { Page4Component } from './pages/page4.component';

const routes: Routes = [
    { path: "", redirectTo: "/page1", pathMatch: "full" },
    { path: "page1", component: Page1Component },
    { path: "page2", component: Page2Component },
    { path: "page3", component: Page3Component },
    { path: "page4", component: Page4Component }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }