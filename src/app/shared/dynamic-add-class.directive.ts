import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appDynamicAddClass]'
})
export class DynamicAddClassDirective {
  
  constructor(private ele:ElementRef) { 

  }
  @Input('appDynamicAddClass') dynamicEle:string;
  @HostListener('click') Click(){
    this.appendClass(event)
  }
  appendClass(event){
  let cl = this.ele.nativeElement;
  cl.querySelectorAll(this.dynamicEle).forEach((item)=>{item.classList.remove("active")})
   if(this.dynamicEle == "li"){
    event.target.parentElement.classList.add("active")
   }
   else{
    event.target.classList.add("active")
   }  
    
}
}
