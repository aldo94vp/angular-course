import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class DataService {
  subjectData$ = new Subject<string>();

  private _data: string;
  set data(value: string) {
    this._data = value;
    this.subjectData$.next(this.data);
  }
  get data() { return this._data; }

  getData(): Observable<string> {
    return this.subjectData$.asObservable();
  }
}
