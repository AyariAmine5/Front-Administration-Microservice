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
export class UserGuard implements CanActivate {
  private roles: string[] = [];
  constructor(
    protected router: Router,
    protected tokenService: TokenStorageService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    const user = this.tokenService.getUser();
    this.roles = user.roles;
    //console.log(this.roles);
    if (state.url !== '/profile' && !this.roles.includes('ROLE_ADMIN')) {
      this.router.navigate(['/profile']);
      return false;
    }
    return true;
  }
}
