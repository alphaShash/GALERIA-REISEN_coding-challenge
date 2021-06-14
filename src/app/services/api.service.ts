import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getHotels(): Observable<any> {
    let apiUrl = 'https://morning-plateau-92682.herokuapp.com/getHotels';
    return this.httpClient.get(apiUrl);
  }

  getHotelInfos(id: string): Observable<any> {
    let apiUrl = 'https://morning-plateau-92682.herokuapp.com/hotelContent/' + id;
    return this.httpClient.get(apiUrl);
  }

}

