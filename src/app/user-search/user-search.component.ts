import { Component, OnInit } from '@angular/core';


import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Profile } from '../model/profile';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'user-search',
  templateUrl: './user-search.component.html',
  styleUrls: [ './user-search.component.css' ]
})

export class UserSearchComponent implements OnInit {
  profiles: Observable<Profile[]>;  
  private searchTerms = new Subject<string>();

  constructor(private profileService: ProfileService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.profiles = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.profileService.searchUsers(term)),
    );
  }
}