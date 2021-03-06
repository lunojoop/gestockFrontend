import { AuthenticationService } from './_services/authentication.service';
import { Router } from '@angular/router';
import { User } from './_models/user';

import { Component} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gestock';
  
  currentUser: User;
  
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
}

logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
  
}
