import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client';
import { FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{
  msg:string ="";
  clientRef = new FormGroup({
    id:new FormControl(),
    clientName:new FormControl(),
    clientDescription:new FormControl(),
    clientImageUrl:new FormControl(),
  });
  buttonVariable:string ="Store Client";
  clients:Array<Client>=[];
  constructor(public clientService:ClientService){} // DI for ClientService

  // this code execute only once when component get created...
ngOnInit(): void {
    this.loadAllClient();
}

loadAllClient() {
  this.clientService.loadAllClientInformation().subscribe({
    next:(result:any)=> {
        this.clients=result;
    },
    error:(error:any)=> {
        console.log(error)
    },
    complete:()=> {
        console.log("done!")
    }
  })
}
storeClientDetails(): void {
  let client = this.clientRef.value;
  
  if(this.buttonVariable=="Store Client"){
    this.clientService.storeClientDetails(client).subscribe({
      next:(result:any)=> {
        console.log(result)
      },
      error:(error:any)=> {
        console.log(error);
      },
      complete:()=> {
        this.loadAllClient();
      }
    });
  }else {
    this.clientService.updateClientDetails(client).subscribe({
      next:(result:any)=> {
        console.log(result)
      },
      error:(error:any)=> {
        console.log(error);
      },
      complete:()=> {
        this.loadAllClient();
      }
    });
  
      this.buttonVariable="Store Client"

     
  }
  


  this.clientRef.reset();
}


deleteClient(cid:any): void {
  //console.log(cid);
  this.clientService.deleteClient(cid).subscribe({
    next:(result:any)=> {
      console.log(result)
    },
    error:(error:any)=> {
      console.log(error);
    },
    complete:()=> {
      this.loadAllClient();
    }
  })
}

updateClient(client:any):void {

  this.clientRef.get("clientName")?.setValue(client.clientName)
  this.clientRef.get("id")?.setValue(client.id);
  this.clientRef.get("clientDescription")?.setValue(client.clientDescription);
  this.clientRef.get("clientImageUrl")?.setValue(client.clientImageUrl);
  this.buttonVariable="Update Client";
}


}