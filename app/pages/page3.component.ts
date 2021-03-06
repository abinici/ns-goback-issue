import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "page3",
    templateUrl: "./page3.component.html",
})
export class Page3Component implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        
    }

    gotoNextPage() {
        this.router.navigateByUrl('/page4');
    }
}
