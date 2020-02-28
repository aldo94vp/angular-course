import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentChildComponent } from './components/component-child/component-child.component';
import { ComponentChildTwoComponent } from './components/component-child-two/component-child-two.component';
import { TestDirective } from './directives/test.directive';
import { ComponentThreeComponent } from './components/component-three/component-three.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentChildComponent,
    ComponentChildTwoComponent,
    TestDirective,
    ComponentThreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
