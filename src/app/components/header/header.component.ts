import { Component } from '@angular/core';
import { faFacebook, faInstagram, faYoutube, faTwitter, faKickstarterK } from '@fortawesome/free-brands-svg-icons';
import { faUser, faCircleUser, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faTwitter = faTwitter;
  faKickstarterK = faKickstarterK;
  faUser = faUser;
  faCircleUser = faCircleUser;
  faShareSquare = faShareSquare;

  user: User;

  constructor(private userService: UsersService, private authService: AuthService) {
    this.user = this.userService.userLogged;
  }

  logout() {
    this.user = {
      username: '',
      password: ''
    }
    this.userService.userLogged = this.user;
    this.userService.deleteLocalStorage('Login');
    this.authService.logout();
  }
}
