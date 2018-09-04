import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  countries=[];states=[];cities=[];
  selectedCountry='Select Country';selectedState='Select State';selectedCity='';
  newCountry='';newState='';newCity='';
  constructor(private universityService:ServicesService) { 
    
  }

  ngOnInit() {
    this.universityService.getCountries().subscribe((result)=>{
      console.log(...result.countries);
      this.countries = result.countries.filter((country)=>{
         return country.activeStatus == true
        // return country
      });
      
    })
  }
  onCountryChange(countryId){
    this.universityService.getStates(countryId).subscribe((result)=>{
      this.states=result.states.filter((state)=>{
        return state.activeStatus == true
       // return country
     });
    })
  }
  onStateChange(stateId){
    this.universityService.getCities(stateId).subscribe((result)=>{
      this.cities=result.cities;
    })
  }
  addCity(stateId){
    let stateObj = {
        name:this.newCity,
        state:stateId,
        activeStatus:true
    }
    this.universityService.addCity(stateObj).subscribe((data)=>{
      console.log("added the city "+JSON.stringify(data));
      this.newCity="";
      data.result && this.cities.push(data.result)
      
    })
  }
  updateCity(city){
    let CityObj = {
      "name":this.newCity,
      "state":city.state,
      "activeStatus":true
    }
    this.universityService.updateCity(city._id,CityObj).subscribe((result)=>{
      console.log("updated City "+JSON.stringify(result.data._id));
      this.newCity="";
      let matchCity = this.cities.find((city)=>city._id == result.data._id);
      let matchedIndex = this.cities.indexOf(matchCity);
      this.cities = [...this.cities.slice(0,matchedIndex),result.data,...this.cities.slice(matchedIndex+1)];
      //result.data && this.cities.push(result.data)
    })
  }
  disableCity(city){
    let CityObj = {
      "name":city.name,
      "state":city.state,
      "activeStatus":false
    }
    this.universityService.updateCity(city._id,CityObj).subscribe((result)=>{
      console.log("disabled the City "+result);
      city.activeStatus = false;
    })
  }
  enableCity(city){
    let CityObj = {
      "name":city.name,
      "state":city.state,
      "activeStatus":true
    }
    this.universityService.updateCity(city._id,CityObj).subscribe((result)=>{
      console.log("disabled the City "+result);
      city.activeStatus = true;
    })
  }
}
