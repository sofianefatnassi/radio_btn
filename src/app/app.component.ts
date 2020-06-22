import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  isSubmitted = false;
  test = [{adresse:{id:0,value:'male'}, numsVoie: ["0001","333"]}, {adresse:{id:1, value:'female'}, numsVoie: []}]

  constructor(public fb: FormBuilder) { }

  /*########### Form ###########*/
  registrationForm = this.fb.group({
    gender: [, [Validators.required]],
    voies: []
  })

  // Getter method to access form control
  get myForm() {
    return this.registrationForm.get('gender');
  }

  // Submit Registration Form
   onSubmit() {
    console.log(this.registrationForm.value);
  }

}