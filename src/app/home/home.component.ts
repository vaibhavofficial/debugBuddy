import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.minLength(16)])
    })
  }

  submit() {
    if (!this.userForm.valid) {
      return;
    }
    console.log(this.userForm.value);
  }

}
