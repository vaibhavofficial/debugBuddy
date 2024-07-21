import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  userForm: FormGroup;

  constructor(private router: Router) {
    this.userForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.minLength(16)]),
    });
  }

  submit() {
    if (!this.userForm.valid) {
      return;
    }

    this.router.navigate(['/dashboard']);
    console.log(this.userForm.value);
  }
}
