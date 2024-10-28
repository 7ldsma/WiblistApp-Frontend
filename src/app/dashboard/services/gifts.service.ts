import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gift } from '../interfaces/gif.interface';
import { environment } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {

  private http = inject( HttpClient );
  private baseUrl = environment.baseUrl;

  constructor() { }



  getGifts(): Observable<Gift[]>{


    return this.http.get<Gift[]>(`${ this.baseUrl }`)
  }


}
