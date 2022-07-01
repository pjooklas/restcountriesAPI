import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class RestCountriesService {

  constructor(private http:HttpClient) { }

  // public getCountry(){
  //   return this.http.get<Country>('https://restcountries.com/v2/all?fields=name,region,area');
  // }

  public getCountries(){
    return this.http.get<{[key:string]:Country}>("https://restcountries.com/v2/all?fields=name,region,area").pipe(
      map((response)=>{
        let countries:Country[]=[];
        for (let key in response){
          countries.push({...response[key]})
        }
        return countries;
      })
    )
  }

}
