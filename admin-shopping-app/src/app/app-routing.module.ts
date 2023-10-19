import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientComponent } from './client/client.component';
import { ClientService } from './client.service';
import { Client } from './client';

const routes: Routes = [
  // the next line says if path is empty "" open the component: LoginComponent
      {path:"",component:LoginComponent},
    {path:"home",component:DashboardComponent, children:[
      {path:"client",component:ClientComponent}
    ]}
  ];
  
  
  //{path:"home",component:DashboardComponent,children:[
   // {path:"client",component:ClientComponent}
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
