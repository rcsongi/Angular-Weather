import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad, Route} from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate , CanLoad {
  constructor( public router: Router) {}
  canActivate(): boolean {
    if (!localStorage.getItem("currentUser")) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  canLoad(route: Route): boolean {
    let name: string;
    (name = localStorage.getItem("currentUser"))
    if ( name != null) {
	return true; 
    }
    
    return false;		
  }
}