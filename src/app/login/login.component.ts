import { Component, OnInit } from '@angular/core';
import { RouterLink, Router, ParamMap } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {User} from '../user';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  constructor(private rooter: Router, private snackbar: MatSnackBar) { }

  name: string;
  password: string;
  message: string;
  user: User;
  

  login (name: string, password: string){
    
    if(localStorage) {
      if(localStorage.getItem(name) ) {
        if(JSON.parse(localStorage.getItem(name)).password  === password){
          localStorage.setItem("currentUser", name);
          this.rooter.navigate(['/main'])
          .catch(console.error);
        }
        else {
          this.snackbar.open("Wrong password", null, {
            duration: 5000,
            
          });
        }

      }
      else {
        this.snackbar.open("Username doesn't exist", null, {
          duration: 3000,
  
        });
      }
      
    
    }
     
  }
  register (name: string, password: string) {
    if(!localStorage.getItem(name)){
      this.user = {
        name: name,
        password: password,
        ids: []
      }
      localStorage.setItem (name, JSON.stringify(this.user));
      this.snackbar.open("Register succesfull", null, {
        duration: 3000,

      });
      

    }
    else {
      this.snackbar.open("Name already taken", null, {
        duration: 3000,

      });
    }
    
  }

  

  ngOnInit(): void {
    localStorage.setItem("currentUser", "");



    
    
  }

}


