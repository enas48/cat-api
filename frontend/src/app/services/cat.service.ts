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
  getCats(limit:Number): Observable<any> {
    return  this.http.get<any>(`http://localhost:3000/get/${limit}`);
  }
  // getCat(id:number): Observable<any> {
  //   return  this.http.get<any>(`https://api.thecatapi.com/v1/images/${id}`);
  // }
}
