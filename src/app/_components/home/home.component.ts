import { AuthenticationService } from './../../_services/authentication.service';
import { Router } from '@angular/router';
import { User } from './../../_models/user';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentUser: User;
  constructor(private router: Router,
    private authenticationService: AuthenticationService) 
    { 
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

    }
    logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
      }
}