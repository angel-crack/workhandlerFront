import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent {
constructor(private cookieService:CookieService){}
logout(): void{
  this.cookieService.delete(environment.tokenName);
  console.log(this.cookieService.getAll());
  this.refresh();
}

refresh():void {
  window.location.reload();
}
}
