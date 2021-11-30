import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";
import { GlobalConstants } from '../constants';


@Injectable({
  providedIn: 'root',
})
export class ConsoleService {

  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  constructor() {}

  socket = io(GlobalConstants.apiUrl);

  public sendMessage(message: any) {
    this.socket.emit('chat message', message);
  }

  public getNewMessage = () => {
    this.socket.on('chat message', (message: any) =>{
      this.message$.next(message);
    });
    
    return this.message$.asObservable();
  };

  public getOldMessages() {
    
  }

  public disconnectSocket = () => {
    this.socket.disconnect();
  }
}
