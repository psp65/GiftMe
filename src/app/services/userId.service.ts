import { Injectable } from '@angular/core';

@Injectable()
export class UserIdService{

    userId: string;
    userName: string;

    setUserId(id: string){
        this.userId = id;
    }

    setUserName(name: string){
        this.userName = name;
    }

    getUserId(): string{
        return this.userId;
    }

    getUserName(): string{
        return this.userName;
    }

} 