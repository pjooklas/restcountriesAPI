import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country';
import { RestCountriesService } from 'src/app/services/rest-countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  public countries:Country[]=[];

  constructor(private countryService:RestCountriesService) { }

  private loadCountries(){
    this.countryService.getCountries().subscribe((result)=>{
      this.countries=result;
      // console.log(result);
      
    })
  }

  ngOnInit(): void {
    this.loadCountries();
  }



}
