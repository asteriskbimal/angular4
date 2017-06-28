import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

	allowNewServer=false;
	serverCreationStatus="No server created";
	serverName='ServerOne';
  
  constructor() { 
  	setTimeout(()=>{
	  	this.allowNewServer=true;
	  	},5000);
  }

  ngOnInit() {
  }

  onCreateServer(){
		this.serverCreationStatus="Server is created";
  }

  onUpdateServerName(event:Event){
  		this.serverName=(<HTMLInputElement>event.target).value;
  }

}
