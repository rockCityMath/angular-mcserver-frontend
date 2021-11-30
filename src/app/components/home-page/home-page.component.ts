import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { GlobalConstants } from '../../constants'; 

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss',]
})
export class HomePageComponent implements OnInit {

  serverIP:any;

  serverInfo:any;
  serverStatus:any;
  programStatus:any;

  constructor(private apiservice: ApiService) {
    this.serverStatus = "OFF";
    this.programStatus = "OFF";
    this.serverIP = GlobalConstants.apiUrl;
  }
  ngOnInit() {
    this.apiservice.getInfo().subscribe((res) =>{
      console.log(res);
      this.serverInfo = res;
      this.programStatus = "ON";
    })
    this.apiservice.getStatus().subscribe((res) => {
      console.log(res);
      this.serverStatus = res;
    })    
  }
}
