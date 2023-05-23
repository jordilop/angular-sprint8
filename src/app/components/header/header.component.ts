import { Component } from '@angular/core';
import { faFacebook, faInstagram, faYoutube, faTwitter, faKickstarterK } from '@fortawesome/free-brands-svg-icons';
import { faUser, faCircleUser } from '@fortawesome/free-solid-svg-icons';

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
}
