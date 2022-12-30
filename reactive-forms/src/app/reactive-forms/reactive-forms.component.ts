import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'rng-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  public cadastroForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', [Validators.minLength(5), Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.email]]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  public submitForm() {

    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm.value)
      console.log(this.cadastroForm)
      console.log(this.cadastroForm.value.firstName)
      console.log(this.cadastroForm.value.lastName)
    }

  }
}
