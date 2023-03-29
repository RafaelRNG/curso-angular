import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'rng-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  public formAuth: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  public messageError!: string

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
  }

  public submitAuth() {
    if (this.formAuth.valid) {
      this.authService.sign({ email: this.formAuth.value.email, password: this.formAuth.value.password })
        .subscribe({
          next: (res) => res,
          error: (error) => this.messageError = error
        })
    }
  }
}
