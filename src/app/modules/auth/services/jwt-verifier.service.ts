import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class JwtVerifierService {

  constructor(private jwtHelper: JwtHelperService) {}
  
  validateTokenExpiration(token: string): boolean {
    const token_object = this.jwtHelper.decodeToken(token)
    const time_exp = new Date(token_object.exp * 1000)
    console.log('Expiration: ', time_exp)
    const time_iat = new Date(token_object.iat * 1000)
    console.log('Issued @: ', time_iat)
    const timeNow = new Date()
    if (time_exp > timeNow){
      console.log("Token Activo")
      return false
    }
    console.log("Token Expirado")
    return true
  }
}
