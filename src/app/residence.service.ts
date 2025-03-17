import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment } from './core/models/Appartement';
import { Residence } from './core/models/Residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
 

 url="http://localhost:3000/residences"
 url2="http://localhost:3000/apartments"

  constructor(private httpClient:HttpClient) { }

  getResidences(): Observable<Residence[]> {
    return this.httpClient.get<[Residence]>(this.url);
  }

  getResidenceById(id: number): Observable<Residence> {
    return this.httpClient.get<Residence>(`${this.url}/${id}`);
  }

  addResidence(residence: Residence): Observable<Residence>{
    return this.httpClient.post<Residence>(this.url, residence)
  }

 

  updateResidence(id : number, residence: Residence): Observable<Residence>{
    return this.httpClient.put<Residence>(this.url+id, residence)
  }

  deleteResidence(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
  

  getAppartments(): Observable<Apartment[]> {
    return this.httpClient.get<[Apartment]>(this.url2);
  }

  getApartmentById(id: number): Observable<Apartment> {
    return this.httpClient.get<Apartment>(`${this.url2}/${id}`);
  }

  addApartment(appartement: Apartment): Observable<Apartment>{
    return this.httpClient.post<Apartment>(this.url2, appartement)
  }

 

  updateApartment(id : number, appartement: Apartment): Observable<Apartment>{
    return this.httpClient.put<Apartment>(this.url2+id, appartement)
  }

  deleteApartment(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url2}/${id}`);
  }

  getApartmentsByResidence(residenceId: number): Observable<Apartment[]> {
    return this.httpClient.get<Apartment[]>(`${this.url2}?ResidenceId=${residenceId}`);
  }

}
