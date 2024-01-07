import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cat } from '../../../interfaces/cat';

@Injectable({
  providedIn: 'root',
})
export class EditCatService {
  private url = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  editOneCat(id: number, body: Cat) {
    return this.http.put<Cat[]>(this.url + `/cats/${id}`, body).subscribe();
  }
}
