import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Item } from '../model/item';

import { ItemService } from '../services/item.service';
import { Local } from 'protractor/built/driverProviders';

@Component({
    selector: 'item-detail-component',
    templateUrl: './item-detail.component.html',
    styleUrls: ['./item-detail.component.css']
})

export class ItemDetailComponent implements OnInit {

    item: Item;

    constructor(private route: ActivatedRoute,
        private itemService: ItemService,
        private location: Location) {

    }

    ngOnInit() {
        this.item = new Item();
        this.getItem();
    }

    getItem() {
        const id = this.route.snapshot.paramMap.get('id');
        this.itemService.getItem(id).subscribe(item => this.item = item);
    }

    goBack() {
        this.location.back();
    }
}