import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarWarsDemoServiceService {

  constructor(private http: HttpClient) { }

  getVehicles() {
    return this.http.get('https://swapi.co/api/vehicles/  ');
  }

  getVehicle(id) {
    return this.http.get(`https://swapi.co/api/vehicles/${id}`);
  }
}
