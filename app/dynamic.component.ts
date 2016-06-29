import {Component} from '@angular/core';

import {VisualizeJS} from './visualize.component';

@Component({
  'selector': 'dynamic-component',
  directives: [VisualizeJS],
  'template': '<vjs-component id={{id}}></vjs-component>'
})

export class DynamicComponent { }
