import {Component, ComponentRef, ComponentFactory, Input, ViewContainerRef, ComponentResolver, ViewChild} from '@angular/core'

@Component({
  selector: 'component-loader',
  template: `<div #target></div>`
})
export class ComponentLoader {
  @ViewChild('target', { read: ViewContainerRef }) target;
  @Input() component: Function;
  @Input() id: string;
  cmpRef: ComponentRef<any>;
  private isViewInitialized: boolean = false;

  constructor(private resolver: ComponentResolver) { }

  updateComponent() {
    if (!this.isViewInitialized) {
      return;
    }
    
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }

    this.resolver.resolveComponent(this.component).then((factory: ComponentFactory<any>) => {
      this.cmpRef = this.target.createComponent(factory);
      this.cmpRef.instance.id = this.id;
    });
  }

  ngOnChanges() {
    this.updateComponent();
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }
}
