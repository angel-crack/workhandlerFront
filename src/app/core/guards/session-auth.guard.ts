import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtVerifierService } from '@modules/auth/services/jwt-verifier.service';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment.development';

export const sessionAuthGuard: CanActivateFn = (route, state) => {
  const cookieS = inject(CookieService)
  const router = inject(Router)
  const jwt = inject(JwtVerifierService)

  const TOKEN_NAME = environment.tokenName
  const token: boolean = cookieS.check(TOKEN_NAME)
  const token_V = cookieS.get(TOKEN_NAME)
  // console.log('token?: ==>', cookieS.get('session_expires')) 
  if (token){
    if (jwt.validateTokenExpiration(token_V)) {
      cookieS.delete(TOKEN_NAME)
      router.navigate(['auth'])
    }
    router.navigate([''])
  } 
  return !token
};
