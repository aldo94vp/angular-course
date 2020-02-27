import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class DataService {
  subjectData$ = new Subject<string>();
  private _data: string;
  set data(value: string) {
    this._data = value;
    this.subjectData$.next(this.data);
  }
  get data() { return this._data; }
  
  constructor() {}
}
