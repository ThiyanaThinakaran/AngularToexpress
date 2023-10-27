import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendAccessService } from '.././backend-access.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent {
  title = 'templateforms';
  userList : any=[];
  data : any;
  expresponse : string = "";
  constructor(private http:HttpClient, private baccess: BackendAccessService)
  {
  }
  addUser(udata:any)
  {
    this.expresponse=this.baccess.addUser(udata);
  }
  
  getAllUsers()
  {
   this.userList=this.baccess.getAllUsers();
  }

}

 
 
// console.log(udata);
    //console.log(udata.value);
    //this.userList.push(udata.value);
    //console.log(this.userList);
 