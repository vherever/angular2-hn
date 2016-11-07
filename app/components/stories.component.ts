import {Component, OnInit} from "@angular/core";
import {HackerNewsAPIService} from "../services/hackernews-api";
import {error} from "util";
@Component({
    selector: 'app-stories',
    templateUrl: 'app/templates/stories.component.html'
})
export class StoriesComponent implements OnInit {
    items: any;

    constructor(private _hackerNewsAPIService: HackerNewsAPIService) {}

    ngOnInit() {
        this._hackerNewsAPIService.fetchStories()
            .subscribe(
                items => this.items = items,
                error => console.log('Error fetching stories'));
    }
}
