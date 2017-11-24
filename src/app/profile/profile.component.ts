import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Profile } from '../model/profile';

import { ProfileService } from '../services/profile.service';
import { UserIdService } from '../services/userId.service';

@Component({
    selector: 'profile-component',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit{
    @Input() profile: Profile;

    userId: string;

    constructor(
        private profileService: ProfileService,
        private userIdService: UserIdService,
        private router: Router) {};

    ngOnInit(){
        this.profile = new Profile();
        this.userId = this.userIdService.getUserId();
        
        if(this.userId == undefined){
          this.router.navigate(['/NotFound']);
        }

        this.getUserProfile(this.userId);
    }

    getUserProfile(userId: string) {

        this.profileService.getProfile(userId)
        .then(res => this.profile = res);
        
    }


}
  