import { Injectable } from "@angular/core";
import { HttpClient, HttpParams} from "@angular/common/http";
import { User } from "./user.model";
import { BEAUTY_API } from "../app.api";
import { Observable } from "rxjs";


@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }


    users(search?: string): Observable<User[]> {
        let params: HttpParams = undefined
        if(search){
            params = new HttpParams().append('q', search)
        }
        return this.http.get<User[]>(`${BEAUTY_API}/users`, {params: params})
    }

    register(data?: []): Observable<User[]> {
        return this.http.post<User[]>(`${BEAUTY_API}/users`, data)
    }



}