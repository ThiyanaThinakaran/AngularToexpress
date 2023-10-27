import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
 
export class LoginComponent {
  loginResponse: string = '';
  data : any;
  constructor(private http: HttpClient, private router: Router) { }
 
  loginUser(loginFormData: any) {
    // const userid = loginFormData.value.userid;
    // const password = loginFormData.value.password;
 
 
    // Define your backend endpoint
    const endpoint = 'http://localhost:3000/login';
    this.http.post('http://localhost:3000/login',loginFormData.value).subscribe((response)=>{
      this.data = response;
      console.log(this.data);
      if(this.data.message == 'Login successful') {
        console.log("this is executing !!");
        this.loginResponse = this.data;
        this.router.navigateByUrl('/home');
      }
      else{
        this.loginResponse = "Invaild Credentials";
        console.log("login Failed");
      }
    });
 /*
    this.http.post('http://localhost:3000/login',loginFormData.value).subscribe
    ((response: any) => {
        if (response.message == "Login successful") {
          this.loginResponse = response.message;
 
          // Navigate to the home page on successful login
          this.router.navigateByUrl('/home');
        } else {
       
          this.loginResponse = response.message || "Error logging in.";
        }
      },
      (error) => {
        console.error('Login error:', error);
        this.loginResponse = "Invalid credentials"; // You can refine this based on the actual error received
      }
    ); */
 
  }
 
 
 
}