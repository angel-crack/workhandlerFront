import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatMenuModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [provideAnimations(),
              CookieService,
              { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
              JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
