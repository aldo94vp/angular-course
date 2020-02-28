import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-child-two',
  templateUrl: './component-child-two.component.html',
  styleUrls: ['./component-child-two.component.css']
})
export class ComponentChildTwoComponent {
  varOne = 'Hello from a value from Component two';
}
