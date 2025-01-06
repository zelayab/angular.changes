import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Angular19Service {
  constructor(private http: HttpClient) {}

  getChanges(): Observable<any[]> {
    return this.http.get<any[]>('/assets/angular19-changes.json');
  }
}
