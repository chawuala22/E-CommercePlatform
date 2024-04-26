import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Fruit } from '../models/fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  urlBase: string = 'http://localhost:3000/'
  constructor(private _httpClient: HttpClient) { }

  getAllFruits() {
    return this._httpClient.get<Fruit[]>(`${this.urlBase}fruits`);
  }

  postFruit(data: Fruit) {
    return this._httpClient.post<Fruit>(`${this.urlBase}fruits`, data);
  }

  deleteFruit(id: string) {
    return this._httpClient.delete<Fruit>(`${this.urlBase}fruits/${id}`);
  }

  updateFruit(id: string, data: Fruit) {
    return this._httpClient.put<Fruit>(`${this.urlBase}fruits/${id}`, data);
  }
}
