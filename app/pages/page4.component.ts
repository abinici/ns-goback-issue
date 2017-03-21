import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import frameModule = require("ui/frame");

@Component({
    moduleId: module.id,
    selector: "page4",
    templateUrl: "./page4.component.html",
})
export class Page4Component implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        
    }

    goback() {
        let page2BackstackEntry = frameModule.topmost().backStack[2];
        frameModule.topmost().goBack(page2BackstackEntry);
    }
}
