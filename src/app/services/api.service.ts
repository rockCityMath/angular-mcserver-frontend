import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpResponseBase} from "@angular/common/http";
import { GlobalConstants } from '.././constants';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  serverInfo:any = [];
  serverStatus:any;
  constructor(private http: HttpClient) {
    this.serverInfo = "";
    this.serverStatus = "";
  }

  public getInfo() {
    let apiUrl = GlobalConstants.apiUrl + "/serverInfo";
    console.log(this.http.get(apiUrl));
    return this.http.get(apiUrl);
  }
  public getStatus() {
    let apiUrl = GlobalConstants.apiUrl + "/serverStatus";
    console.log(this.http.get(apiUrl));
    return this.http.get(apiUrl);
  }

  //CHANGE THIS, recive array of messages
  public addMessageHistory() {
    let apiUrl = GlobalConstants.apiUrl + "/messageHistory";
    return this.http.get(apiUrl);
  }
  
}
