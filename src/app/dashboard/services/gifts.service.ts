import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Gift } from '../interfaces/gif.interface';
import { environment } from '../../../environments/environments';
import { GiftResponse } from '../interfaces/gift.response';

@Injectable({
  providedIn: 'root'
})
export class GiftsService {

  private http = inject( HttpClient );
  private baseUrl = environment.baseUrl;

  constructor() { }



  getGifts( userId: string ): Observable<GiftResponse>{

    return this.http.get<GiftResponse>(`${ this.baseUrl }/gifts/user/${ userId }`);

  }

  getGiftById( id: string ): Observable<Gift|undefined>{

    return this.http.get<Gift>(`${ this.baseUrl }/gifts/${ id }`)
      .pipe(
        catchError( error => of(undefined) )
      );

  }


  addGift( gift: Gift ): Observable<Gift>{
    return this.http.post<Gift>(`${ this.baseUrl }/gifts`, gift);
  }

  updateGift( gift: Gift ): Observable<Gift>{
    return this.http.patch<Gift>(`${ this.baseUrl }/gifts/gifts/${ gift.id }`, gift);
  }

  deleteGiftById( id: string ): Observable<boolean>{
    return this.http.delete<Gift>(`${ this.baseUrl }/gifts/gifts/${ id }`)
      .pipe(
        catchError( err => of(false) ),
        map( resp => true )
      );
  }


}
