import { Component, ViewChild, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ComponentChildComponent } from './components/component-child/component-child.component';
import { ComponentChildTwoComponent } from './components/component-child-two/component-child-two.component';
import { TestDirective } from './directives/test.directive';
import { ComponentThreeComponent } from './components/component-three/component-three.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  // I am working with a component type
  @ViewChild(ComponentChildComponent, { static: true }) testOne: ComponentChildComponent;
  // I am working with a reference from type one
  @ViewChild('thisIsAReferenceOne', { static: true }) testOneWRef: ComponentChildComponent;
  // I am working with a reference
  @ViewChild('thisIsAReference', { static: true }) testTwo: ComponentChildTwoComponent;
  // I am working in a tag with a reference
  @ViewChild('three', { static: true }) testThree: ElementRef;
  // I am a Query List of Element Ref
  @ViewChildren(ComponentThreeComponent) testChildrenElement: QueryList<ComponentThreeComponent>;
  // I am a Query List of appTestDirective
  @ViewChildren(TestDirective) testChildrenDirectives: QueryList<TestDirective>;

  ngAfterViewInit() { // ViewChildren only works AfterViewInit LifeCycle
    console.log('ViewChild with Component<ComponentChildComponent>: ', this.testOne)
    console.log('ViewChild with Component<ComponentChildComponent> using a referente template: ', this.testOneWRef)
    console.log('ViewChild with Component<ComponentChildTwoComponent>:', this.testTwo)
    console.log('ViewChild with ElementRef using a referente template:', this.testThree)
    console.log('ViewChildren using a Component<ComponentThreeComponent>: ', this.testChildrenElement)
    console.log('ViewChildren using a Directive<TestDirective>: ', this.testChildrenDirectives)
  }
}
