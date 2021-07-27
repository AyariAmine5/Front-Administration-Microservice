import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { TokenStorageService } from './token-storage.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    protected router: Router,
    protected tokenService: TokenStorageService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (
      state.url !== '/login' &&
      state.url !== '/register' &&
      !this.tokenService.getToken()
    ) {
      this.router.navigate(['/login']);
      return false;
    }
    if (
      (state.url === '/login' || state.url === '/register') &&
      this.tokenService.getToken()
    ) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
