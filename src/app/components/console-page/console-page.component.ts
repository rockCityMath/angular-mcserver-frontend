
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConsoleService } from '../../services/console.service';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';



@Component({
  selector: 'app-console-page',
  templateUrl: './console-page.component.html',
  styleUrls: ['./console-page.component.scss']
})
export class ConsolePageComponent {
  newMessage?: string = "";
  messageList?: string[] = [];
  serverInfo: any;

  constructor(
    private ConsoleService: ConsoleService, private ApiService: ApiService) { }

  ngOnInit(){
    //this.ConsoleService.socket.connect();
    this.ConsoleService.getNewMessage().subscribe((message: string) => {
      this.messageList!.push(message);
      //window.scrollTo(0, document.body.scrollHeight); OLD
      var objDiv = document.getElementById("console-div");
      objDiv!.scrollTop = objDiv!.scrollHeight;
    });

    this.ApiService.getInfo().subscribe((res) =>{
      console.log(res);
      this.serverInfo = res;
    }); 

    //CHANGE THIS
    //Add history array to the list (messagelist) before user sees (before nginit?)
    this.ApiService.addMessageHistory().subscribe((res) => { });
  }

  ngOnDestroy() {
    this.ConsoleService.socket.removeAllListeners();
    delete this.messageList;
    delete this.newMessage;
  }

  sendMessage() {
    this.ConsoleService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
}
