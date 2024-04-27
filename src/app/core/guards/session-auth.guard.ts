import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const sessionAuthGuard: CanActivateFn = (route, state) => {
  const cookieS = inject(CookieService)
  const router = inject(Router)

  const token: boolean = cookieS.check('session')
  console.log('token?: ==>', token) 
  if (token){
    router.navigate([''])
  } 
  return !token
  
};
