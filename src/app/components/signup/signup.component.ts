import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  user: User;
  userExists: boolean = false;
  signupUser: boolean = false;

  constructor(private _builder: FormBuilder, private userService: UsersService, private authService: AuthService) {
    this.signupForm = this._builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.user = this.userService.userLogged;
  }

  signupSubmit(values: any) {
    this.userExists = false;
    this.signupUser = false;
    if (!this.userService.getUser(values.username)) {
      this.user.username = values.username;
      this.user.password = values.password;
      this.userService.setUser(this.user);
      this.userService.setLogin(this.user);
      this.authService.login();
      this.signupUser = true;
    } else {
      this.userExists = true;
    }
  }
}
