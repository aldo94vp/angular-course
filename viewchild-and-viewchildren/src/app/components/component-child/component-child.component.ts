import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-child',
  templateUrl: './component-child.component.html',
  styleUrls: ['./component-child.component.css']
})
export class ComponentChildComponent {
  varOne = 'I am a value from Component ONE';
}
