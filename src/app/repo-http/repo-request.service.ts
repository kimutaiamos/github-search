import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepoRequestService {
  API = 'https://api.github.com/users/';
  token = '?access_token=';
  constructor(public  http: HttpClient) {
  }

  getRepo(searchTerm: string): Observable<any> {
    return this.http.get(this.API + searchTerm + '/repos?' + this.token);
  }
}
