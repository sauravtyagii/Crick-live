import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private _httpClien:HttpClient) {}
   getAllMatches(){
    return this._httpClien.get(`${environment.apiUrl}/match`)

   }
   getLiveMatches(){
    return this._httpClien.get(`${environment.apiUrl}/match/live`)

   }
}
