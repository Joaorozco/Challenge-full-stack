import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  // URL = 'http://localhost:8080/api/'
  URL = 'https://challenge-service-jcgs.onrender.com/api/'
  constructor(private http: HttpClient) { }

  public allTransaction():Observable<Transaction>{
    return this.http.get<Transaction>(this.URL + 'transaction/allTransaction')
  }

  public allBalance():Observable<any>{
    return this.http.get<any>(this.URL + 'balance/allBalance')
  }

  public allCards():Observable<any>{
    return this.http.get<any>(this.URL + 'cards/allCards')
  }
}
