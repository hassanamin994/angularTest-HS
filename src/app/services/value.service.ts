import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable()
export class ValueService {

  private _data = new Subject<Object>();
  private _dataStream = this._data.asObservable();
  private _subscriptions: Map<string, Array<Function>> = new Map<string, Array<Function>>();

  private _minValue: number = 0;
  private _maxValue: number = 100;
  private _step: number = 1;

  constructor() {
    this._dataStream.subscribe((data) => this._onEvent(data));
    // intitialize value 
    this.notifyDataChanged('value', 0);
  }

  get minValue() {
    return this._minValue;
  }

  get maxValue() {
    return this._maxValue;
  }

  get step() {
    return this._step;
  }

  notifyDataChanged(event, value) {
    let current = this._data[event];
    if (current !== value) {
      this._data[event] = value;

      this._data.next({
        event: event,
        data: this._data[event]
      });
    }
  }

  subscribe(event: string, callback: Function) {
    let subscribers = this._subscriptions.get(event) || [];
    subscribers.push(callback);
    this._subscriptions.set(event, subscribers);
  }

  getDataValue(key) {
    return this._data[key];
  }

  _onEvent(data: any) {
    let subscribers = this._subscriptions.get(data['event']) || [];
    subscribers.forEach((callback) => {
      callback.call(null, data['data']);
    });
  }
}
