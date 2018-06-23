import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Injectable} from '@angular/core';
import {store} from '../../store/store';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!store.getState().auth.authenticated) {
      this.router.navigate(['sign-in']);
    }
    return true;
  }
}
