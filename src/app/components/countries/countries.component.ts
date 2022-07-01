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
  public ascending:boolean=true;

  constructor(private countryService:RestCountriesService) { }

  // load all countries after fetch
  private loadCountries(){
    this.countryService.getCountries().subscribe((result)=>{
      this.countries=result;
    })
  }

  ngOnInit(): void {
    this.loadCountries();
  }

// sort functions countries by name ascending/descending
  public sortAscending(){
    this.countries.sort( (p:Country, p2:Country) => (p.name.localeCompare(p2.name)));   
  }
  public sortDescending(){
    this.countries.sort((p:Country, p2:Country) => (p2.name.localeCompare(p.name)));
  }

}
