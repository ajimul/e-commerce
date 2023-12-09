import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api-service/ApiService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  responsedata: any;
  constructor(private apiService: ApiService,private route: Router) { 
    localStorage.clear();
  }

  ngOnInit(): void {
  }
  loginform = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });


  Proceedlogin() {
    // if (this.loginform.valid)
    // {
    //  this.apiService.Proceddlogin(this.loginform.value)
    //  .subscribe(result => {
    //     this.responsedata = result;
    //     if (this.responsedata != null) {
    //       localStorage.setItem('token', this.responsedata.jwt);
    //       localStorage.setItem('refreshtoken', this.responsedata.refreshToken);
    //             // this.route.navigate(['home']);
    //       this.route.navigate(['home'], { replaceUrl: true });
    //            } else {
    //       alert("login Faield!");
    //     }
    //   });
    // }
    // this.route.navigate(['home'], { replaceUrl: true });

  }

  // CrosTest(){
  //   this.service.OriginTest().subscribe(result => {
  //     alert(result)
  //      });
  // }
}
