import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "page1",
    templateUrl: "./page1.component.html",
})
export class Page1Component implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        
    }

    gotoNextPage() {
        this.router.navigateByUrl('/page2');
    }
}
