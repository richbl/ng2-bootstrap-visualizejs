import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';

import {VJSConfig} from './vjs.config.service';
import {Authentication} from './authentication.service';
import {Alerts} from './alerts.service';

@Component({
  selector: 'login',
  directives: [AlertComponent],
  templateUrl: 'app/login.component.html',
})

export class Login {

  private user: any = null;

  constructor(private alerts: Alerts, private auth: Authentication, private vjsConfig: VJSConfig, private router: Router) { }

  ngOnInit() {
    this.auth.userLogout();
    this.user = this.vjsConfig.getUser();
  }

  onSubmit() {
    if (this.user.name && this.user.password) {
      this.auth.userLogin(this.user.name, this.user.password, this.user.organization)
        .then(success => {
          if (success != true) {
            this.alerts.showAlert('Authorization failed. Please try again.');
          }
        }, error => {
          this.alerts.showAlert('The remote server returned an unexpected error. Please contact your adminstrator.');
        })
    };

  };

}
