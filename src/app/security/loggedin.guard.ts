import { Route } from "@angular/compiler/src/core";
import { Injectable } from "@angular/core";
import { CanLoad, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "./login/login.service";

@Injectable({
   providedIn: "root"
})
export class LoggedInGuard implements CanLoad, CanActivate {

   public constructor(private loginService: LoginService) { }

   checkAuthentication(path?: string): boolean {

      const loggedIn = this.loginService.isLoggedIn();
      if (!loggedIn) {
         this.loginService.handleLogin(`/${path}`);
      }

      return loggedIn;
   }

   canLoad(route: Route): boolean {
      console.log("canload")
      return this.checkAuthentication("/");
   }

   canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
      console.log("canactivate")
      return this.checkAuthentication(activatedRoute.routeConfig?.path);
   }
}