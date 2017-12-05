import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { RegistryService } from '../services/registry.service';
import { UserIdService } from '../services/userId.service';
import { UserId } from '../model/userId';
import { Registry } from '../model/registry';
import { Item } from '../model/item';
import { SelfAssign } from '../model/selfassign';


@Component({
    selector: 'sharedregi-component',
    templateUrl: './shared-regi.component.html',
    styleUrls: ['./shared-regi.component.css']
})


export class SharedRegistryComponent implements OnInit {

    registry_names: Registry[];
    item_names: SelfAssign[];
    self_assigned: string;
    userId: UserId;
    special: SelfAssign;

    constructor(
        private registryService: RegistryService,
        private userIdService: UserIdService,
        private location: Location,
    ) { }

    ngOnInit() {
        this.registry_names = new Array<Registry>();
        this.item_names = new Array<SelfAssign>();
        this.userId = new UserId();
        this.special = new SelfAssign();

        this.userId["userId"] = this.userIdService.getUserId(); 

        this.getSharedRegistriesOfUser(this.userId);
    }



    getSharedRegistriesOfUser(userID: UserId) {
        this.self_assigned = null;

        this.registryService.getSharedWithUserRegisties(userID).subscribe(res => 
            this.registry_names = res
        );

    }

    getItemsForRegistry(registry: string) {
        this.self_assigned = null;

        this.registryService.getUserRegistiesItems(registry).subscribe(res => 
            this.item_names = res
        );
    }

    assignItemToMe(regi: string, item: string ) {

        this.special["assignedEmail"] = this.userIdService.getUserName(); 
        this.special["registryId"] = regi;
        this.special["itemId"] = item;

        this.registryService.setUserAssign(this.special);
    }

    goBack() {
        this.location.back();
    }


}
