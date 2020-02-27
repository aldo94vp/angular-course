import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {
  name: string;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.subjectData$.subscribe(v => this.name = v);
  }

}
