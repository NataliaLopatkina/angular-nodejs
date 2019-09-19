import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export class TokenGuard implements CanActivate {
    userToken: boolean = true;

    constructor(
        private router: Router) {

    }

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<boolean> | boolean {

        if (!this.userToken) {
            this.router.navigate(['/']);

        } else {
            return true;
        }
    }
}
