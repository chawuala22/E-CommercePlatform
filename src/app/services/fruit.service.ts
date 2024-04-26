import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Datum, ResultFruit } from '../models/fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  urlBase: string = 'https://tasks-pearl.vercel.app/'
  constructor(private _httpClient: HttpClient) { }

  getAllFruits() {
    return this._httpClient.get<ResultFruit>(`${this.urlBase}fruit`);
  }

  getFruitById(id: string | undefined) {
    return this._httpClient.get<ResultFruit>(`${this.urlBase}fruit/${id}`);
  }

  postFruit(data: Datum) {
    return this._httpClient.post<Datum>(`${this.urlBase}fruit`, data);
  }

  deleteFruit(id: string) {
    return this._httpClient.delete<Datum>(`${this.urlBase}fruit/${id}`);
  }

  updateFruit(id: string, data: Datum) {
    return this._httpClient.patch<Datum>(`${this.urlBase}fruit/${id}`, data);
  }
}
