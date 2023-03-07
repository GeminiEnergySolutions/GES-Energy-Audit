import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";



@Injectable({ providedIn: 'root' })
export class PageNotFoundGuard implements CanActivate {
  constructor(
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (state.url === 'api//admin') {
      window.location.href = 'http://127.0.0.1:8000/api/admin/';
      return false;
    }
    return true;
  }
}
