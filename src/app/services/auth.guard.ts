import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //console.log(JSON.parse(localStorage.getItem('added_items')));
    if(JSON.parse(localStorage.getItem('added_items')).length != 0){
       console.log('true');
       return true;
    }else {
      console.log('false');
      this.router.navigate(['/cart']);
      return false;
    }
    
  }
}
