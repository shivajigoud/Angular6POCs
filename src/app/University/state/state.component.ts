import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  countries=[];states=[];selectedCountry='Select Country';
  newCountry='';newState='';
  constructor(private universityService:ServicesService) { 
    
  }
  ngOnInit() {
    this.universityService.getCountries().subscribe((result)=>{
      console.log(...result.countries);
      this.countries = result.countries.filter((country)=>{
         return country.activeStatus == true
         //return country
      });
      //this.countries.unshift(this.selectedCountry);
    })
  }
  onCountryChange(countryId){
    //if(countryId != -1){
      this.universityService.getStates(countryId).subscribe((result)=>{
        this.states=result.states;
        
      })
    //}
    //else this.states=[];
  }
  
  addState(countryId){
    let stateObj = {
        name:this.newState,
        country:countryId,
        activeStatus:true
    }
    this.universityService.addState(stateObj).subscribe((data)=>{
      console.log("added the state "+data.result);
      this.newState="";
      data.result && this.states.push(data.result)
    })
  }
  updateState(state){
    let StateObj = {
      "name":this.newState,
      "country":state.country,
      "activeStatus":true
    }
    this.universityService.updateState(state._id,StateObj).subscribe((result)=>{
      console.log("updated State "+result.data);
      this.newState="";
      let matchState = this.states.find((state)=>state._id == result.data._id);
      let matchedIndex = this.states.indexOf(matchState);
      this.states = [...this.states.slice(0,matchedIndex),result.data,...this.states.slice(matchedIndex+1)];
    })
  }
  disableState(state){
    let StateObj = {
      "name":state.name,
      "country":state.country,
      "activeStatus":false
    }
    this.universityService.updateState(state._id,StateObj).subscribe((data)=>{
      console.log("disabled the State "+data);
      state.activeStatus = false;
      
    })
  }
  enableState(state){
    let StateObj = {
      "name":state.name,
      "country":state.country,
      "activeStatus":true
    }
    this.universityService.updateState(state._id,StateObj).subscribe((data)=>{
      console.log("enabled the State "+data);
      state.activeStatus = true;
      
    })
  }
  //States functionality completed
}
