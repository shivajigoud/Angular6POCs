import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countries=[];
  newCountry='';
  selectedCountry='';
  countryModel={
    "name":"",
    "activeStatus":true
  };
  constructor(private universityService:ServicesService) { 
    this.universityService.getCountries().subscribe((result)=>{
      console.log(...result.countries);
      this.countries = result.countries.filter((country)=>{
        // return country.activeStatus == true
         return country
      });
      this.selectedCountry = this.countries[0];
    })
  }

  ngOnInit() {
  }
  addCountry(){
    this.universityService.addCountry(this.countryModel).subscribe((data)=>{
      console.log("add country "+JSON.stringify(data.result));
      this.countryModel.name="";
      data.result && this.countries.push(data.result);
    })
    
  }
  updateCountry(country){
   
    this.universityService.updateCountry(country._id,this.countryModel).subscribe((result)=>{
      console.log("updated country "+result.data);
      this.countryModel.name="";
      let matchCountry = this.countries.find((country)=>country._id == result.data._id);
      let matchedIndex = this.countries.indexOf(matchCountry);
      this.countries = [...this.countries.slice(0,matchedIndex),result.data,...this.countries.slice(matchedIndex+1)];
    })
  }
  disableCountry(country){
    country.activeStatus = false;
    this.universityService.updateCountry(country._id,country).subscribe((result)=>{
      console.log("disabled the country "+result);
      country.activeStatus = false;
    })
  }
  enableCountry(country){
    country.activeStatus = true;
    this.universityService.updateCountry(country._id,country).subscribe((result)=>{
      console.log("enabled the country "+result);
      country.activeStatus = true;
    })
  }
  //Countries functionality completed
}
