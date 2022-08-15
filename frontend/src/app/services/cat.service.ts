import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'; 
import { Observable } from 'rxjs';
const prodUrl='https://cat-api-beta.vercel.app/';
const url='http://localhost:3000/';
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
    return  this.http.get<any>(`${prodUrl}/getbreeds/${limit}`);
  }
  getCat(id:String): Observable<any> {
    return  this.http.get<any>(`${prodUrl}/getbreed/${id}`);
  }
  getImage(id:String): Observable<any> {
    return  this.http.get<any>(`${prodUrl}/getimage/${id}`);
  }
  getcatImages(id:String): Observable<any> {
    return  this.http.get<any>(`${prodUrl}/catimages/${id}`);
  }
  searchByCatName(name:String): Observable<any> {
    return  this.http.get<any>(`${prodUrl}/catbyname/${name}`);
  }
}
