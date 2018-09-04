import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private http:Http) { }
  getCountries(){
   return this.http.get('/api/country')
            .pipe(map((data)=>{return data.json()}))
             
  }
  getStates(byCountry){
    return this.http.get('/api/state/'+byCountry)
             .pipe(map((data)=>{return data.json()}))
              
   }
  getCities(byState){
    return this.http.get('/api/city/'+byState)
             .pipe(map((data)=>{return data.json()}))
              
   }
   getColleges(){
    return this.http.get('/api/colleges')
             .pipe(map((data)=>{return data.json()}))
              
   }
   getCollegesByCity(byCity){
    return this.http.get('/api/college/'+byCity)
             .pipe(map((data)=>{return data.json()}))
              
   }
   getCollegeById(id){
    return this.http.get('/api/college/'+id)
             .pipe(map((data)=>{return data.json()}))
              
   }
   getHostels(){
    return this.http.get('/api/hostels')
             .pipe(map((data)=>{return data.json()}))
              
   }
   getHostelsByCollege(collegeId){
    return this.http.get('/api/hostels/'+collegeId)
             .pipe(map((data)=>{return data.json()}))
              
   }
   getStudents(){
    return this.http.get('/api/hostels')
             .pipe(map((data)=>{return data.json()}))
              
   }
   getStudentsByCollege(collegeId){
    return this.http.get('/api/student/'+collegeId)
             .pipe(map((data)=>{return data.json()}))
              
   }
   getStudentsById(collegeId,id){
    return this.http.get('/api/student/'+collegeId+'/'+id)
             .pipe(map((data)=>{return data.json()}))
              
   }
   //adding the country, state, city, college
   addCountry(countryObj){
    return this.http.post('/api/country',countryObj)
             .pipe(map((result)=>{return result.json()}))
              
   }
   updateCountry(id,countryObj){
    return this.http.post('/api/country/'+id,countryObj)
             .pipe(map((result)=>{return result.json()}))
              
   }
   addState(stateObj){
    return this.http.post('/api/state',stateObj)
             .pipe(map((result)=>{return result.json()}))
              
   }
   updateState(id,stateObj){
    return this.http.post('/api/state/'+id,stateObj)
             .pipe(map((result)=>{return result.json()}))
              
   }
   addCity(cityObj){
    return this.http.post('/api/city',cityObj)
             .pipe(map((result)=>{return result.json()}))
              
   }
   updateCity(id,cityObj){
    return this.http.post('/api/city/'+id,cityObj)
             .pipe(map((result)=>{return result.json()}))
              
   }
   addCollege(collegeObj){
    return this.http.post('/api/college',collegeObj)
             .pipe(map((result)=>{return result.json()}))
              
   }
   updateCollege(id,collegeObj){
    return this.http.post('/api/college/'+id,collegeObj)
             .pipe(map((result)=>{return result.json()}))
              
   }
   addHostel(hostelObj){
    return this.http.post('/api/hostel',hostelObj)
             .pipe(map((result)=>{return result.json()}))
              
   }
   updateHostel(id,hostelObj){
    return this.http.post('/api/hostel/'+id,hostelObj)
             .pipe(map((result)=>{return result.json()}))
              
   }
   addStudent(studentObj){
    return this.http.post('/api/student',studentObj)
             .pipe(map((result)=>{return result.json()}))
              
   }
   updateStudent(id,studentObj){
    return this.http.post('/api/student/'+id,studentObj)
             .pipe(map((result)=>{return result.json()}))
              
   }
}
