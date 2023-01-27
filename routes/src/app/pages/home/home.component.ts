import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router'

@Component({
  selector: 'rng-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public id: number = 0
  public isDisabled = false

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  public navigateToAbout(id: string, username: string, params: Params) {
    this.route.navigateByUrl(`/about/${id}/${username}?params=${params}`)
   // this.route.navigate(['about',id, username], {queryParams: params})
  }
  
  public randomIdGenerated() {
    this.id = Math.floor(Math.random() * 1500)
    this.isDisabled = true
  }
}
