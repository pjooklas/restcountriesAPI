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
  public countriesDisplay:Country[]=[];
  public ascending:boolean=true;
  public filterLithuania:boolean=false;
  public filterOceania:boolean=false;

  constructor(private countryService:RestCountriesService) { }

  // load all countries after fetch
  private loadCountries(){
    this.countryService.getCountries().subscribe((result)=>{
      this.countries=result;
      this.filterCountries();
      console.log(this.countries);
      
    })
  }

  ngOnInit(): void {
    this.loadCountries();
  }

// sort functions countries by name ascending/descending
  public sortAscending(){
    this.countriesDisplay.sort( (p:Country, p2:Country) => (p.name.localeCompare(p2.name)));   
  }
  public sortDescending(){
    this.countriesDisplay.sort((p:Country, p2:Country) => (p2.name.localeCompare(p.name)));
  }

// filter functions
private filterCountries(){
  this.countriesDisplay=[];
  const lithuaniaArea:number=65300;
  this.countries.forEach((country)=>{ 
    if (this.filterLithuania==false && this.filterOceania==false ) {
      this.countriesDisplay=this.countries;
    };
    if (this.filterLithuania==true && (country.area < lithuaniaArea) ) {
      this.countriesDisplay.push(country);
    };
    if (this.filterOceania==true && country.region=='Oceania') {
      this.countriesDisplay.push(country);
    };
  })
}

  public filter(){
    this.filterCountries();
  }

}
