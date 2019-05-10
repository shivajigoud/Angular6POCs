import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { ModalServiceService } from '../modal-service.service'

import { RouterModule,Router,Routes, Route, ActivatedRoute}  from '@angular/router';
@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {
  countries=[];states=[];cities=[];colleges=[];modalId='modal-id-1';
  selectedCountry='';selectedState='';selectedCity='';editMode=false;
  collegeModel={
    name:"",
    addressLine1:"",
    addressLine2:"",
    city: "Select City",
    state:"Select State",
    country:"Select Country",
    activeStatus:true
}
  constructor(private universityService:ServicesService,private modalService:ModalServiceService,private router:Router,private activedRoute:ActivatedRoute) { 
    this.universityService.getCountries().subscribe((result)=>{
      console.log(...result.countries);
      this.countries = result.countries.filter((country)=>{
         return country.activeStatus == true
        // return country
      });
      
    })
  }
  ngOnInit() {
    this.universityService.getColleges().subscribe((result)=>{
      console.log(...result.colleges);
      this.colleges = result.colleges.filter((college)=>{
         return college
      });
    })
  }
  onCountryChange(countryId){
    this.states=[];this.cities=[];this.selectedState='';this.selectedCountry='';this.selectedCity='';
    this.collegeModel.state='Select State';this.collegeModel.city='Select City';
    this.universityService.getStates(countryId).subscribe((result)=>{
      this.selectedCountry = this.countries.find((c)=>{return c._id == countryId});
      this.states=result.states.filter((state)=>{
        return state.activeStatus == true
     });
    })
  }
  onStateChange(stateId){
    this.cities=[];this.selectedState='';this.selectedCity='';this.collegeModel.city='Select City';
    this.universityService.getCities(stateId).subscribe((result)=>{
      this.selectedState = this.states.find((c)=>{return c._id == stateId});
      this.cities=result.cities;
    })
  }
  onCityChange(cityID){
    
      this.selectedCity = this.cities.find((c)=>{return c._id == cityID});
      
  }
  //college related methods
  addCollege(){
    console.log(JSON.stringify(this.collegeModel));
    this.universityService.addCollege(this.collegeModel).subscribe((data)=>{
      console.log("added the city "+JSON.stringify(data));
      data.result && this.colleges.push(data.result);
      this.closeModal(this.modalId);
      })
  }
  editCollege(college){
    this.editMode = true;
    this.universityService.getCollegeById(college._id).subscribe((result)=>{
      this.collegeModel = Object.assign({},result.college,{
        city:result.college.city.name,
        state:result.college.city.state.name,
        country:result.college.city.state.country.name,
      });
      this.openModal(this.modalId);
    })
   //this.collegeModel = Object.assign({},college,{_id:college._id});
   
  }
  updateCollege(collegeId){
    this.universityService.updateCollege(collegeId,this.collegeModel).subscribe((result)=>{
      console.log("updated College "+JSON.stringify(result.data._id));
      let matchCollege = this.colleges.find((college)=>college._id == result.data._id);
      let matchedIndex = this.colleges.indexOf(matchCollege);
      this.colleges = [...this.colleges.slice(0,matchedIndex),result.data,...this.colleges.slice(matchedIndex+1)];
      this.closeModal(this.modalId);
      this.editMode = false;
    })
  }
  disableCollege(college){
    college.activeStatus = false;
    this.universityService.updateCollege(college._id,college).subscribe((result)=>{
      console.log("disabled the College "+result);
      this.collegeModel.activeStatus = false;
    })
  }
  enableCollege(college){
    college.activeStatus = true;
    this.universityService.updateCollege(college._id,college).subscribe((result)=>{
      console.log("enabled the College "+result);
      this.collegeModel.activeStatus = true;
    })
  }
  //Model related methods
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
    this.editMode = false;
  }
  //college landing methods
  goToCollege(collegeId){
    this.router.navigate(['../college',collegeId,'show'],{relativeTo:this.activedRoute})
  }
}
