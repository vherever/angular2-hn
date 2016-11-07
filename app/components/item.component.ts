import {Component, Input, OnInit} from '@angular/core';
@Component({
    selector: 'item',
    templateUrl: 'app/templates/item.component.html'
})
export class ItemComponent implements OnInit{
    @Input() itemID: number;

    constructor() {}

    ngOnInit() {}
}
