import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "page2",
    templateUrl: "./page2.component.html",
})
export class Page2Component implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        
    }

    gotoNextPage() {
        this.router.navigateByUrl('/page3');
    }
}
