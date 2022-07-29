import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key' : 'ce08b7e5-01ca-450a-a1d3-abc9819bb15b'
    }),
  };
  getCats(): Observable<any> {
    return  this.http.get<any>('https://api.thecatapi.com/v1/images/search?limit=4&mime_types=jpg');
  }
  getCat(id:number): Observable<any> {
    return  this.http.get<any>(`https://api.thecatapi.com/v1/images/${id}`);
  }
}
