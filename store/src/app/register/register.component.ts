import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../login/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: any = FormGroup;
  wrong: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,

     ) { }

  ngOnInit(): void {
      this.registerForm = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.minLength(5)]),
        password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z0-9 ]*')]),
        passwordRepeat: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z0-9 ]*')]),
    });
  }


  signUp(){
    this.router.navigate(["/login"]);
  }
  submit(data:any) {
    this.wrong = false;
    if(!this.registerForm.invalid){
      this.userService.users()
        .subscribe(users =>{
          users.forEach(user => {
            if(user.username == data.username){
              this.wrong = true;
            }
      });
      if(!this.wrong){
          this.userService.register(data)
                .subscribe(response =>{
                  this.router.navigate(["/home"]);
                })
        }
    })
  }
    
  }
}
