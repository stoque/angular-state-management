import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BreakingBadService {

  private _baseUrl = 'https://breakingbadapi.com/api/';

  constructor(
    private _http: HttpClient
  ) { }

  getChracters() {
    return this._http.get(`${this._baseUrl}characters`);
  }
}
