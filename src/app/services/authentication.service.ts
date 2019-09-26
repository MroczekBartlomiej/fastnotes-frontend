import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../models/User";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class AuthenticationService {

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        let item = sessionStorage.getItem('token');
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value

    }

    public prepareUserValue() {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));
        console.log("Pobieram usera z hederem: ", headers);
        return (this.http.get('/user/me', {headers})
            .pipe(map((user: User) => {
                sessionStorage.setItem('currentUser', JSON.stringify(user))
                this.currentUserSubject.next(user);
                return user;
            })));
    }

    //TODO: Check endpoint address.
    //TODO: Move to constance
    /*loginUser(username: string, password: string) {
        return this.httpClient.post<[]>(`/auth/login`, { name, password })
            .pipe(map((user: User) => {
                if (user && user.token) {
                    sessionStorage.setItem('token', JSON.stringify(user.token));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }*/

    getUser() {
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + sessionStorage.getItem('token'));


        return this.http.get('/user/me', {headers})
    }

    logout() {
        sessionStorage.removeItem('token');
        this.currentUserSubject.next(null);
    }

}