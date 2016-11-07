import {Component, Input, OnInit} from '@angular/core';
import {HackerNewsAPIService} from "../services/hackernews-api";
import {Article} from "../models/article";
@Component({
    selector: 'item',
    templateUrl: 'app/templates/item.component.html'
})
export class ItemComponent implements OnInit {
    @Input() itemID: number;
    item: any;
    title: string;

    constructor(private _hackerNewsAPIService: HackerNewsAPIService) {}

    ngOnInit() {
        this._hackerNewsAPIService.fetchItem(this.itemID).subscribe(data => {
            this.item = data;
            // this.title = data.title;
        }, error => console.log('Could not load item' + this.itemID));
    }
}
