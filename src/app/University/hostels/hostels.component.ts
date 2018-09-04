import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { RouterModule,Router,Routes, Route, ActivatedRoute}  from '@angular/router';

@Component({
  selector: 'app-hostels',
  templateUrl: './hostels.component.html',
  styleUrls: ['./hostels.component.css']
})
export class HostelsComponent implements OnInit {
  hostels=[];
  newHostel='';
  selectedHostel='';
  collegeId:any='';
  hostelModel={
    "name":"",
    "college":"",
    "activeStatus":true
  };
  constructor(private universityService:ServicesService,private activeatedRoute:ActivatedRoute) { 
    this.activeatedRoute.params.subscribe((college)=>{
      this.collegeId = college.id
    })
  }

  ngOnInit() {
    this.universityService.getHostelsByCollege(this.collegeId).subscribe((result)=>{
      console.log(...result.hostels);
      this.hostels = result.hostels.filter((hostel)=>{
         return hostel
      });
     // this.selectedHostel = this.hostels[0];
    })
    this.hostelModel.college=this.collegeId;
  }
  addHostel(){
    this.universityService.addHostel(this.hostelModel).subscribe((data)=>{
      console.log("add hostel "+JSON.stringify(data.result));
      this.hostelModel.name="";
      data.result && this.hostels.push(data.result);
    })
    
  }
  updateHostel(hostel){
   
    this.universityService.updateHostel(hostel._id,this.hostelModel).subscribe((result)=>{
      console.log("updated hostel "+result.data);
      this.hostelModel.name="";
      let matchHostel = this.hostels.find((hostel)=>hostel._id == result.data._id);
      let matchedIndex = this.hostels.indexOf(matchHostel);
      this.hostels = [...this.hostels.slice(0,matchedIndex),result.data,...this.hostels.slice(matchedIndex+1)];
    })
  }
  disableHostel(hostel){
    hostel.activeStatus = false;
    this.universityService.updateHostel(hostel._id,hostel).subscribe((result)=>{
      console.log("disabled the hostel "+result);
      hostel.activeStatus = false;
    })
  }
  enableHostel(hostel){
    hostel.activeStatus = true;
    this.universityService.updateHostel(hostel._id,hostel).subscribe((result)=>{
      console.log("enabled the hostel "+result);
      hostel.activeStatus = true;
    })
  }
  //Hostels functionality completed

}
