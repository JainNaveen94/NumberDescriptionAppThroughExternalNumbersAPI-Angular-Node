import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  url: string = "http://numbersapi.com/";

  constructor(private http: HttpClient) { }

  getFact(input: string ) {
    return this.http.get(this.url+input+'/', {responseType: 'text'});
  }

  addFact(datatoAdd: string) {
    return this.http.post("http://localhost:4444/data", {datatoAdd: datatoAdd});
  }

  getAllFacts() {
    return this.http.get("http://localhost:4444/data");
  }
}
