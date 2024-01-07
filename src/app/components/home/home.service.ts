import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import catData from '../../../assets/mock/cats.json';
import { Cat } from '../../interfaces/cat';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private url = 'http://localhost:8000';
  private mockData: Cat[] = catData;

  constructor(private http: HttpClient) {}

  getAllCats() {
    return this.http.get<Cat[]>(this.url + '/getAllCats', {
      responseType: 'json',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
      },
    });
    //return this.mockData;
  }

  getOneCat(id: number) {
    return this.http.get<Cat[]>(this.url + `/cats/${id}`);
  }
}
