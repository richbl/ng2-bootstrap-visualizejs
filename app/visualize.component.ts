import {Component, Attribute, Input} from '@angular/core';

import {VJSConfig} from './vjs.config.service';
import {Alerts} from './alerts.service';

declare var visualize: any;

@Component({
  selector: 'vjs-component',
  template: '<div id={{resourceId}}></div>',
})

export class VisualizeJS {
  @Input() id;
  resourceId: string;

  constructor(private alerts:Alerts, public vjsConfig: VJSConfig) { };

  ngOnInit() {
    var resourceIndex: number = this.getObjectIndex(this.vjsConfig.getResourceDetails(), this.id);
    this.resourceId = this.vjsConfig.getResourceDetails()[resourceIndex].id;
    this.drawResource(this.vjsConfig, resourceIndex);
  }

  public drawResource(vjsConfig, resourceIndex) {

    visualize({
      // already authenticated, so proceed with resource rendering
    }, function(v) {

      switch (vjsConfig.resourceDetails[resourceIndex].type) {

        case "report": {
          v("#" + vjsConfig.resourceDetails[resourceIndex].id).report({
            resource: vjsConfig.resourceDetails[resourceIndex].uri,
            params: vjsConfig.resourceDetails[resourceIndex].params,
            success: function() { console.log("successful report draw") },
            error: function(err) { console.log("report draw failed: " + err) }
          });
          break;
        }

        case "dashboard": {
          v("#" + vjsConfig.resourceDetails[resourceIndex].id).dashboard({
            resource: vjsConfig.resourceDetails[resourceIndex].uri,
            params: vjsConfig.resourceDetails[resourceIndex].params,
            success: function() { console.log("successful dashboard draw") },
            error: function(err) { console.log("dashboard draw failed: " + err) }
          });
          break;
        }

        default: {
          this.alerts.showAlert("Visualize.js resource type not found.");
        }

      };
    },
      function(err) {
        this.alerts.showAlert("Visualize.js was unable to draw the resource.");
      });
  };

  private getObjectIndex(object: any, id: any): number {
    return object.map(function(x) { return x.id; }).indexOf(id);
  };

}
