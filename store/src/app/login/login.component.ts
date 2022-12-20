import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { UserService } from './user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any = FormGroup;
  wrong: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private loginService: LoginService,


     ) { }

  ngOnInit(): void {
      this.loginForm = new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
    });
  }


  save(){

  }

  register(){
    this.router.navigate(["/registrar"]);
  }

  submit(data:any) {
    this.wrong = false;
    let exist = false;
    this.userService.users()
    .subscribe(users =>{
      users.forEach(user => {
        if(user.username == data.username){
            exist = true;
            this.wrong = false;
            this.loginService.login(data);
            this.router.navigate(["/home"]);
        }
      });
      if(!exist){
        this.wrong = true;
      }

    })
    
  }

}
