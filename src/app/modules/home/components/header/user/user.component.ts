import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '@modules/auth/services/users.service';
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/core/models/users.models';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})


export class UserComponent implements OnInit {
  
constructor(
  private cookieService:CookieService,
  private userService: UsersService
){}


ngOnInit(): void {
  this.userService.UserInfo.subscribe( v => this.UserInfo = v)
  this.userService.getUserInfo$()
}

UserInfo: UserModel = {name : '', lastName: '', email: '', role: 'Tier 1'}

logout(): void{
  this.cookieService.delete(environment.tokenName);
  console.log(this.cookieService.getAll());
  this.refresh();
}

refresh():void {
  window.location.reload();
}
}
