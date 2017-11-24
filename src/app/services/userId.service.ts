import { Injectable } from '@angular/core';

@Injectable()
export class UserIdService{

    constructor(){}

    userId: string;

    setUserId(id: string){
        this.userId = id;
    }

    getUserId(): string{
        return this.userId;
    }

} 