import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
  data: any[] = [];
  firstName: string = '';
  lastName: string = '';
  emailId: string = '';
  address: string = '';
  phoneNo: string = '';
 
  constructor(private http: HttpClient) {}
 
  ngOnInit() {
    this.fetchData();
  }
 
  insertUser() {
    this.http
      .post('http://localhost:3002/insert', {
        firstName: this.firstName,
        lastName: this.lastName,
        emailId: this.emailId,
        address: this.address,
        phoneNo: this.phoneNo
      })
      .subscribe((res: any) => {
        console.log(res);
        this.fetchData();
      });
  }
 
  updateuser() {
    this.http
      .put(`http://localhost:3002/update`, {
        firstName: this.firstName,
        lastName: this.lastName,
        emailId: this.emailId,
        address: this.address,
        phoneNo: this.phoneNo
      })
      .subscribe((res: any) => {
        console.log(res);
        this.fetchData();
      });
  }
 
  deleteuser() {
    this.http
      .delete(`http://localhost:3002/delete?emailId=${this.emailId}`)
      .subscribe((res: any) => {
        console.log(res);
        this.fetchData();
      });
  }
 
  fetchData() {
    this.http.get('http://localhost:3002/getAll').subscribe((response: any) => {
      this.data = response;
    });
  }
}