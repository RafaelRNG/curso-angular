import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { RadioOption } from './radio-option.model';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => RadioComponent), multi: true }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options!: RadioOption[]

  value!: any

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void { }

  onChange(value: any): any {

  }

  public setValue(value: any) {
    this.value = value;
    this.onChange(this.value)
  }
}
