import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { ModalServiceService } from '../modal-service.service'

import { RouterModule, Router, Routes, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students = [];
  newStudent = '';
  selectedStudent = '';
  collegeId: any = '';
  modalId = 'student-Model';
  editMode = false;
  selectedHostel = '';
  yearsOfStudies=['Year I','Year II','Year III','Year IV'];
  hostels=[];
  studentModel = {
    "pic":"",
    "name": "",
    "college": "",
    "activeStatus": true,
    "rollno": "",
    "dob": "",
    "email": "",
    "mobileNumber": "",
    "year": "",
    "yearOfJoining": "",
    "hostel": ""
  };
  constructor(private universityService: ServicesService, private activeatedRoute: ActivatedRoute, private modalService: ModalServiceService) {
    this.activeatedRoute.params.subscribe((college) => {
      this.collegeId = college.id
    })
  }

  ngOnInit() {
    this.universityService.getStudentsByCollege(this.collegeId).subscribe((result) => {
      console.log(...result.students);
      this.students = result.students.filter((student) => {
        return student
      });
      // this.selectedStudent = this.students[0];
    })
    this.studentModel.college = this.collegeId;
    this.universityService.getHostelsByCollege(this.collegeId).subscribe((result)=>{
      console.log(...result.hostels);
      this.hostels = result.hostels.filter((hostel)=>{
         return hostel
      });
     // this.selectedHostel = this.hostels[0];
    })
  }
  addStudent() {
    this.universityService.addStudent(this.studentModel).subscribe((data) => {
      console.log("add student " + JSON.stringify(data.result));
      this.studentModel.name = "";
      data.result && this.students.push(data.result);
      this.closeModal(this.modalId)
    })

  }
  editStudent(student){
    this.editMode = true;
    this.universityService.getStudentsById(this.collegeId,student._id).subscribe((result)=>{
      this.studentModel = Object.assign({},result.student,{
        hostel:result.student.hostel.name
      })
      this.studentModel['_id']=result.student._id;
      this.openModal(this.modalId);
    }) 
  }
  updateStudent(studentId) {
     this.universityService.updateStudent(studentId, this.studentModel).subscribe((result) => {
      console.log("updated student " + result.data);
      this.studentModel.name = "";
      let matchStudent = this.students.find((student) => student._id == result.data._id);
      let matchedIndex = this.students.indexOf(matchStudent);
      this.students = [...this.students.slice(0, matchedIndex), result.data, ...this.students.slice(matchedIndex + 1)];
      this.closeModal(this.modalId)
    })
  }
  disableStudent(student) {
    student.activeStatus = false;
    this.universityService.updateStudent(student._id, student).subscribe((result) => {
      console.log("disabled the student " + result);
      student.activeStatus = false;
    })
  }
  enableStudent(student) {
    student.activeStatus = true;
    this.universityService.updateStudent(student._id, student).subscribe((result) => {
      console.log("enabled the student " + result);
      student.activeStatus = true;
    })
  }
  //Students functionality completed
  onHostelChange(hostelId){
    this.studentModel.hostel = hostelId;
  }
  onFileChange(event:any){
    let image = event.srcElement.files[0];
    let reader =new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
          let base64data = reader.result;
          this.studentModel.pic = `${base64data}`;
       }
}
  //Model related methods
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
    this.editMode = false;
  }
}
