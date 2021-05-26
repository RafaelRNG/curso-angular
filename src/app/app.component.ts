import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    (window as any).global = window.globalThis
  }
}
