import { Component, OnInit } from '@angular/core';
import { RouterModule,Router,Routes, Route, ActivatedRoute}  from '@angular/router';
import { ServicesService } from '../services.service';
import { ModalServiceService } from '../modal-service.service';

@Component({
  selector: 'app-college-landing',
  templateUrl: './college-landing.component.html',
  styleUrls: ['./college-landing.component.css']
})
export class CollegeLandingComponent implements OnInit {
  collegeId:any="";collegeModel={};
  constructor(private activatedRoute:ActivatedRoute,private universityService:ServicesService,private router:Router) { 
    console.log(...[this.activatedRoute]);
    this.activatedRoute.params.subscribe((college)=>{
      this.collegeId = college.id
    })
  }
  ngOnInit() {
    this.universityService.getCollegeById(this.collegeId).subscribe((result)=>{
      this.collegeModel = Object.assign({},result.college)
    })
  }
  goToHostels(id){
    this.router.navigate(['../hostels'],{relativeTo:this.activatedRoute})
  }
  goToStudents(id){
    this.router.navigate(['../students'],{relativeTo:this.activatedRoute})
  }
}
