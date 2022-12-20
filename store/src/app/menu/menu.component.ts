import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { User } from '../login/user.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
logged: boolean;
data:any;


  constructor(private loginService: LoginService,  private router: Router) { }

  ngOnInit(): void {
    this.logged = this.isLoggedIn();

  }

  isLoggedIn(): boolean{
    if(this.loginService.user){
      console.log( this.loginService.getUser())
       this.data = this.loginService.getUser()
     }
    return this.loginService.isLoggedIn()
  }

  logout(){
    this.logged = false;
    this.loginService.logout()
  }
}
