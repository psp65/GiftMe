import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Item } from '../model/item';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'item-search',
  templateUrl: './item-search.component.html',
  styleUrls: [ './item-search.component.css' ]
})

export class ItemSearchComponent implements OnInit {
  items: Observable<Item[]>;  
  private searchTerms = new Subject<string>();

  constructor(private itemService: ItemService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.items = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.itemService.searchItems(term)),
    );
  }
}