import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable()
    export class UsersProvider {
        constructor(public http: HttpClient){

        }
        all(){
            return this.http.get('/json/users.json');
        }
    }

