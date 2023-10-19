import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './client';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl:string ="http://localhost:3000/clients"
  constructor(public http:HttpClient) { } // DI for HttpClient

  loadAllClientInformation():Observable<Client[]>{
    return this.http.get<Client[]>(this.baseUrl);
  }

  // store data in json file using post method 
  // 1st parameter url 
  //2nd parameter is object in json format. 
  storeClientDetails(client:any):any{
    return this.http.post(this.baseUrl,client);
  }
  // delete client 
  // http://localhost:3000/client/3 
  deleteClient(cid:any):any {
    return this.http.delete(this.baseUrl+"/"+cid);
  }

  // update data in json file using put method 
  // 1st parameter url 
  //2nd parameter is object in json format. 
  updateClientDetails(client:any):any{
    return this.http.put(this.baseUrl+"/"+client.id,client);
  }
}