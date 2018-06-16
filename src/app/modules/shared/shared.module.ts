import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlider, MatSliderModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatSliderModule
  ],
  declarations: [
  ],
  exports: [
    MatSliderModule
  ]
})
export class SharedModule { }
