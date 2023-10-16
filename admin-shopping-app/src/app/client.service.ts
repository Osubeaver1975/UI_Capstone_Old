import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './client';
@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl:string ="http://localhost:3000/clients"
  constructor(public http:HttpClient) { } //DI for HttpClient

  loadAllClientsInformation():Observable<Client[]>{
    return this.http.get<Client[]>(this.baseUrl);
  }

  //Store data in json file using post method
  // 1st param url
  // 2nd param is object in json format
  storeClientDetails(client:any):any{
    return this.http.post(this.baseUrl,client); //my json data has the data for "clients" not sure why it won't work
  }

} 
