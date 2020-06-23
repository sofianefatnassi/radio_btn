import { Component, Pipe, PipeTransform } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Pipe({ name: 'reverse' })

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements PipeTransform {
  transform(value) {
    return value.slice().reverse();
  }
  isSubmitted = false;
  test = [{adresse:{id:0,value:'male'}, numsVoie: ["0001","333",""]}, {adresse:{id:1, value:'female'}, numsVoie: []}]

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

  detectChange(event) {
    console.log("changed");
    console.log(event);
    this.test.forEach(response => {
        if(response.adresse.value === event){
          console.log(response.adresse.value);
          console.log(event);
          if(response.numsVoie || response.numsVoie.length == 0){
            this.registrationForm.value['voies'] = null;
          } 
        } else {
          this.registrationForm.value['voies'] = null;
        }

    })

    console.log(this.registrationForm.value);
  }

  // Submit Registration Form
   onSubmit() {
     console.log("submit");
    console.log(this.registrationForm.value);
  }

}