import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicAddClassDirective } from './dynamic-add-class.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[DynamicAddClassDirective],
  declarations: [DynamicAddClassDirective]
})
export class SharedModule { }
