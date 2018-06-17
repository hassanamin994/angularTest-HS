import { Component, OnInit } from '@angular/core';
import { ValueService } from '../../services/value.service';
import { MatSliderChange } from '@angular/material';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {


  minValue: number;
  maxValue: number;
  step: number;
  value: number;
  constructor(private _valueService: ValueService) { }

  ngOnInit() {
    this.minValue = this._valueService.minValue;
    this.maxValue = this._valueService.maxValue;
    this.step = this._valueService.step;
    this.value = this._valueService.getDataValue('value') || 0;
    this.initValueSubscription();
  }

  initValueSubscription() {
    this._valueService.subscribe('value', (newValue: number) => {
      this.value = newValue;
    })
  }

  onValueInputChange(sliderChange: MatSliderChange) {
    const { value } = sliderChange;
    this._valueService.notifyDataChanged('value', value)
  }

}
