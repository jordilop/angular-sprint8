import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  user: User;
  loginError: boolean = false;

  constructor(private _builder: FormBuilder, private userService: UsersService) {
    this.loginForm = this._builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.user = this.userService.userLogged;
  }

  loginSubmit(values: any) {
    if (this.userService.getUserPassword(values.username, values.password)) {
      this.user.username = values.username;
      this.user.password = values.password;
      this.userService.setLogin(this.user);
      this.loginError = false;
    } else {
      this.loginError = true;
    }
  }
}
