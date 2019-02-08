import { Injectable } from '@angular/core';
//import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { 
    console.log('Data service connected');
   }

   getPosts() {
     return this.http.get('https://jsonplaceholder.typicode.com/posts');
   }
}
