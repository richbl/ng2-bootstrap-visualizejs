import {Component} from '@angular/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {Login} from './login.component';
import {Results} from './results.component';
import {VJSConfig} from './vjs.config.service';
import {Authentication} from './authentication.service';
import {Alerts} from './alerts.service';

@Component({
  selector: 'my-app',
  directives: [Login, ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, VJSConfig, Alerts, Authentication],
  template: `<router-outlet></router-outlet>`
})

@RouteConfig([
  { path: '/login', name: 'Login', component: Login, useAsDefault: true },
  { path: '/results', name: 'Results', component: Results }
])

export class AppComponent { }
