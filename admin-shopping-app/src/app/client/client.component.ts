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
clientRef = new FormGroup({
  clientName:new FormControl(),
  clientDescription:new FormControl(),
  clientImageUrl:new FormControl(),
});
  clients:Array<Client>=[];
  constructor(public clientService:ClientService){} //DI Depencency Injection for ClientService
  // this code executes only once when component gets created...
ngOnInit(): void {
      this.loadAllClients();
}
loadAllClients() {
     this.clientService.loadAllClientsInformation().subscribe({
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
    storeClientDetails():void {
    let client = this.clientRef.value;
      //console.log(client);  //could be "client" if broken
    this.clientService.storeClientDetails(client).subscribe({
      next:(result:any)=> {
        console.log(result)
      },
      error:(error:any)=> {
        console.log(error);
      },
      complete:()=> {
        this.loadAllClients();
      }
     });

    this.clientRef.reset();
  }




deleteClient(_cid:any): void {

}

updateClient(_client:any):void{
  
}
}   
