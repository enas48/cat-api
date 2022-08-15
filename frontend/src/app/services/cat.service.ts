import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'; 
import { Observable } from 'rxjs';
// const url='http://localhost:3000';
 const url='https://cat-api-backend.vercel.app';

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
    return  this.http.get<any>(`${url}/getbreeds/${limit}`);
  }
  getCat(id:String): Observable<any> {
    return  this.http.get<any>(`${url}/getbreed/${id}`);
  }
  getImage(id:String): Observable<any> {
    return  this.http.get<any>(`${url}/getimage/${id}`);
  }
  getcatImages(id:String): Observable<any> {
    return  this.http.get<any>(`${url}/catimages/${id}`);
  }
  searchByCatName(name:String): Observable<any> {
    return  this.http.get<any>(`${url}/catbyname/${name}`);
  }
}
