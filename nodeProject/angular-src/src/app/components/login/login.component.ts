import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router:Router,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: ['',[
        Validators.required,
        Validators.email,
      ]],
      password: ['', [
        Validators.required
      ]]
    });
  }

  get email(){
    return this.myForm.get('email');
  }

  get password(){
    return this.myForm.get('password');
  }

  onLoginSubmit(){
    const user = {
      username: this.myForm.value.email,
      password: this.myForm.value.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if(data['success']){
        console.log(data);
        this.authService.storeUserData(data['token'], data['user'])
        this.router.navigate(['employee']);
      }
      else{
        console.log(data);
        this.router.navigate(['/']);
      }
    });
  }

}
