import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Profile } from '../model/profile';

import { UserIdService } from '../services/userId.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit{
  
  userId: string;
  profile: Profile;

  constructor(
    private userIdService: UserIdService,
    private profileService: ProfileService,
    private router: Router){}

  ngOnInit(){

    this.userId = this.userIdService.getUserId();

    console.log(this.userId);
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
