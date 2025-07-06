import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  getCards() {
    return this.http.get<Card[]>('/gestionnairecollectioncartestcg/rest/card/api/all');
  }

  getCardsByGameName(gameName: string) {
    return this.http.get<Card[]>('/gestionnairecollectioncartestcg/rest/card/api/searchByGame?game=' + gameName);
  }

}
