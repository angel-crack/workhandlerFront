import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { JwtVerifierService } from '@modules/auth/services/jwt-verifier.service';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment.development';


export const sessionGuard: CanActivateFn = (route, state) => {
  const cookieS = inject(CookieService)
  const router = inject(Router)
  const jwt = inject(JwtVerifierService)
  const TOKEN_NAME = environment.tokenName

  const token: boolean = cookieS.check(TOKEN_NAME)
  const token_V = cookieS.get(TOKEN_NAME)

  if (!token){
     router.navigate(['auth'])
  } else {
    if (jwt.validateTokenExpiration(token_V)) {
      cookieS.delete(TOKEN_NAME)
      router.navigate(['auth'])
    }
  }
  return token
};
