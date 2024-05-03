import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataFromModalService {
  
  constructor() { }

  private dataSubject: Subject<any> = new Subject<any>();
  
  getData(): Observable<any> {
    return this.dataSubject.asObservable();
  }

  sendDataToComponents(data: any) {
    this.dataSubject.next(data); // Emit data using the next operator
  }

}
