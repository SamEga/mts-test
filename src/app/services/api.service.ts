import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataType } from '../models/home.models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getData<T>(type: DataType): Observable<T> {
    return this.http.get<T>(`${this.URL}/${type}`);
  }

  setSettings<T>(form: T): Observable<T> {
    return this.http.post<T>(`${this.URL}/settings`, form);
  }
}
