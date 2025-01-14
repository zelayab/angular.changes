import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private jsonUrl = 'assets/links.json'; // Asegúrate de colocar el JSON en la carpeta `assets`

  constructor(private http: HttpClient) {}

  getLinks(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}
