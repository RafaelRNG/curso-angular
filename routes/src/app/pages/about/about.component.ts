import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'rng-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: res => console.log(res),
      error: erro => console.log(erro)
    })

    this.activatedRoute.queryParams.subscribe({
      next: res => console.log(res)
    })

    setInterval(() => {
      this.router.navigate([''])
//      this.router.navigateByUrl()
    }, 5000)
  }
}
