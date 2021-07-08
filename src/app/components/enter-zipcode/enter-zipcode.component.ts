import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'enter-zipcode-app',
  templateUrl: './enter-zipcode.component.html'
})
export class EnterZipcodeComponent {
  @Output() newZipcode: EventEmitter<string>;
  public zipCodeControl: FormControl;

  constructor() {
    this.zipCodeControl = new FormControl();
    this.newZipcode = new EventEmitter();
  }
  public addZipCode() {
    this.newZipcode.emit(this.zipCodeControl.value);
    this.zipCodeControl.reset()
  }
}