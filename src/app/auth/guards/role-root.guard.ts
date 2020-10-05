import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Role } from 'src/app/auth/enums';
import { BaseRole } from 'src/app/auth/guards/base-role';
import { AppState } from 'src/app/store';

@Injectable()
export class RoleRootGuard extends BaseRole implements CanActivate, CanActivateChild {
  /**
   * Constructor of the class, where we DI all services that we need to use
   * within this guard.
   */
  public constructor(protected router: Router, protected store: Store<AppState>) {
    super(router, store);
  }

  /**
   * Purpose of this guard is to check that user has `Role.ROLE_ROOT` or not.
   * This method is used within route definition `canActivate` definition.
   */
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean|UrlTree> {
    return this.checkRole(Role.ROLE_ROOT, route.data?.roleGuardMeta ?? null);
  }

  /**
   * Purpose of this guard is to check that user has `Role.ROLE_ROOT` or not.
   * This method is used within route definition `canActivateChild` definition.
   */
  public canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean|UrlTree> {
    return this.checkRole(Role.ROLE_ROOT, childRoute.data?.roleGuardMeta ?? null);
  }
}
