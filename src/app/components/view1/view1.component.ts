import { Component, OnInit } from '@angular/core';
import { ValueService } from '../../services/value.service';
import { MatSliderChange } from '@angular/material';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  minValue: number;
  maxValue: number;
  step: number;
  value: number;
  constructor(private _valueService: ValueService) { }

  ngOnInit() {
    this.minValue = this.value = this._valueService.minValue;
    this.maxValue = this._valueService.maxValue;
    this.step = this._valueService.step;
    this.initValueSubscription();
  }

  initValueSubscription() {
    this._valueService.subscribe('value', (newValue: number) => {
      this.value = newValue;
    })
  }

  onValueChange(sliderChange: MatSliderChange) {
    const { value } = sliderChange;
    this._valueService.notifyDataChanged('value', value)
  }


}
