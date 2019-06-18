import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BreakingBadService {
  private _baseUrl = 'https://breakingbadapi.com/api/';

  getCharacters$ = this._http.get(`${this._baseUrl}characters`);

  constructor(
    private _http: HttpClient
  ) { }
}
