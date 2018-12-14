
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Page } from "ionic-angular/umd/navigation/nav-util";


@Injectable()
    export class UsersProvider {
        header: HttpHeaders;
       
        constructor(public http: HttpClient){

            this.header = new HttpHeaders();
            this.header = this.header.append('Content-type', 'application/json');
            this.header = this.header.append('Accept', 'application/json');
        }
        
        all(){
            let url = '/epi/user/_search';
            return this.http.get(url, {headers: this.header})
        }
        
        add(user){
            let url = '/epi/user/' + user.id;
            return this.http.post(url, {"name": user.name, "email": user.email}, {headers: this.header});
        }
    }

// ici on change durl avec id 