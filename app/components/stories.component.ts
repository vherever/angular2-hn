import {Component, OnInit} from "@angular/core";
@Component({
    selector: 'app-stories',
    templateUrl: 'app/templates/stories.component.html'
})
export class StoriesComponent implements OnInit{
    items: number[];

    constructor() {
        this.items = Array(30);
    }

    ngOnInit() {

    }
}
