import {Component} from '@angular/core';
import {TAB_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';

import {Authentication} from './authentication.service';
import {VJSConfig} from './vjs.config.service';
import {DynamicComponent} from './dynamic.component';
import {ComponentLoader} from './component.loader';

@Component({
  selector: 'login',
  directives: [TAB_DIRECTIVES, ComponentLoader],
  templateUrl: 'app/results.component.html'
})

export class Results {

  private resourceDetails: Array<any> = [];
  private tabs: Array<any> = [];
  private dynamicComponent: Function = null;
  private curTab: string = null;


  constructor(private auth: Authentication, private vjsConfig: VJSConfig) {
    this.resourceDetails = this.vjsConfig.getResourceDetails();
    this.dynamicComponent = DynamicComponent;
  };

  ngOnInit() {

    for (var elem in this.resourceDetails) {
      this.tabs[elem] = { title: this.resourceDetails[elem].title, id: this.resourceDetails[elem].id }
    }

    this.curTab = this.tabs[0].id;

    if (!this.auth.userAuthorized()) {
      // ng2-bootstrap bug (https://github.com/valor-software/ng2-bootstrap/issues/610)
      // work-around: must disable tabs before page routing, else onClick() fires
      for (var x in this.tabs) { this.tabs[x].disabled = true; }
    }

  }

  private onClick(index: string): void {
    this.curTab = index;
  };

}
