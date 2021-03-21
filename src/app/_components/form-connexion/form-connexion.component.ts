import { User } from './../../_models/user';
import { AuthenticationService } from './../../_services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-connexion',
  templateUrl: './form-connexion.component.html',
  styleUrls: ['./form-connexion.component.scss']
})
export class FormConnexionComponent implements OnInit {
  loginForm: FormGroup; 
  loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

  
  constructor(
    
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
        
        ) 
    { 
      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) { 
        this.router.navigate(['/']);
      }
    }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  onSubmit(){
    const user=
    {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    } as User
    //console.warn(this.loginForm.value);
    this.authenticationService.login(user).subscribe( 
      (data) =>{
        //console.warn(data);
        this.router.navigate([this.returnUrl]);
      },
      error =>{
        //console.warn('la connexion a échoué');
        this.error = error;
        this.error='la connexion a échoué';
        this.loading = false;
      }
      
    );
    
  }
}
