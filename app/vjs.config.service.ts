import {Injectable} from '@angular/core';
import {Router} from '@angular/router-deprecated';

declare var visualize: any;

@Injectable()
export class VJSConfig {

  constructor(private router: Router) { };

  private user:any = {
    name: "",
    password: "",
    organization: "organization_1",
    approved: false
  };

  private resourceDetails = [{
    title: "Important Details",
    id: "dashboard_one",
    type: "dashboard",
    uri: "/public/Samples/Dashboards/1._Supermart_Dashboard",
    params: {}
    }, {
      title: "More Results",
      id: "dashboard_two",
      type: "dashboard",
      uri: "/public/Samples/Dashboards/2._Performance_Summary_Dashboard",
      params: {}
    }, {
      title: "A Final Look",
      id: "dashboard_three",
      type: "dashboard",
      uri: "/public/Samples/Dashboards/3.1_Sales_Metrics",
      params: {}
    }];

  public validateUser(userName: string, password: string, organization: string): Promise<any> {

    return new Promise(function(resolve, reject) {
      visualize({
        auth: {
          name: userName,
          password: password,
          organization: organization
        }
      },
        function() { resolve(); }, // successful validation
        function() { reject(); }); // unsuccessful validation
    });

  };

  public setUser(userName: string, password: string, organization: string) {
    this.user.name = userName;
    this.user.password = password;
    this.user.organization = organization;
    this.user.approved = true;
  };

  public getUser() {
    return this.user;
  };

  public resetUser() {
    this.user.approved = false;
  }

  public getResourceDetails() {
    return this.resourceDetails;
  };

};
