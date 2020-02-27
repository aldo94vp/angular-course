import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent {
  name: string;

  constructor(private dataService: DataService) { }

  change() {
    this.dataService.data = this.name;
  }
}
