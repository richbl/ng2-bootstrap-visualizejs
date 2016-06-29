import {Injectable} from '@angular/core';
import {Router} from '@angular/router-deprecated';

import {VJSConfig} from './vjs.config.service';

@Injectable()
export class Authentication {

  constructor(private router: Router, private vjsConfig: VJSConfig) { };

  public userLogin(userName: string, password: string, organization: string): Promise<boolean> {

    return this.vjsConfig.validateUser(userName, password, organization)
      .then(success => {
        this.vjsConfig.setUser(userName, password, organization);
        this.router.navigate(['Results']);
        return true;
      }, error => {
        return false;
      })

  };

  public userLogout() {
    this.vjsConfig.resetUser();
  }

  public userAuthorized(): boolean {

    if (this.vjsConfig.getUser().approved != true) {
      this.router.navigate(['Login']);
      return false;
    } else {
      return true;
    }

  };
};
