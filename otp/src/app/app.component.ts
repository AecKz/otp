import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'otp';
  otpForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.otpForm = this.formBuilder.group({
      firstSquare: ['', Validators.required],
      secondSquare: ['', Validators.required],
      thirdSquare: ['', Validators.required],
      fourthSquare: ['', Validators.required],
      fifthSquare: ['', Validators.required],
      sixthSquare: ['', Validators.required]      
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.otpForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.otpForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.otpForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.otpForm.reset();
  }
}
