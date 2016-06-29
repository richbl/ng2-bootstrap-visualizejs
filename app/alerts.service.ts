import {Injectable} from '@angular/core';
import {AlertComponent} from 'ng2-bootstrap/ng2-bootstrap';

@Injectable()
export class Alerts {

  public alerts: Array<Object> = [];

  public showAlert(msg:string): void {
    
    // ng2-bootstrap bug: will only display initial object, once dismissed will not display again
    // work-around: create array and continually push/splice to keep array.length==1
    this.alerts.push({ msg: msg, type: 'warning' });
    this.alerts.splice(0, this.alerts.length - 1);
  }

};
