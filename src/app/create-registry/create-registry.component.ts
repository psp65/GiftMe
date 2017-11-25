import { Component, OnInit, Input } from '@angular/core';

import { UserId } from '../model/userId';
import { Registry } from '../model/registry';


@Component({
    selector: 'create-registry-component',
    templateUrl: './create-registry.component.html',
    styleUrls: ['./create-registry.component.css']
})

export class CreateRegistryComponent implements OnInit{
    @Input() registry: Registry;
    createRegistryExpand: boolean;
    

    constructor(){

    }

    ngOnInit(){
        this.registry = new Registry();
    }

    expandCreateRegistry(){
        this.createRegistryExpand = !this.createRegistryExpand;
      }
      
}