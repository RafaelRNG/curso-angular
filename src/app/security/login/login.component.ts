import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from './login.service';
import { NotificationService } from "../../shared/messages/notification.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  navigateTo!: string

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private notificationService: NotificationService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control("", [Validators.required, Validators.email]),
      password: this.formBuilder.control("", [Validators.required])
    });

    this.navigateTo = this.activatedRoute.snapshot.params["to"] || btoa("/");
  }

  public login() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(user => this.notificationService.notify(`Bem vindo, ${user.name}`),
        response => //HttpErrorResponse
          this.notificationService.notify(response.error.message),
        () => this.router.navigate([atob(this.navigateTo)]));
  }
}
