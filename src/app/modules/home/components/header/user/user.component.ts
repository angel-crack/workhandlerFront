import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent {
constructor(private cookieService:CookieService, private router:Router){}
logout(): void{
  this.cookieService.delete('session');
  this.router.navigate(['/auth'])
}
}