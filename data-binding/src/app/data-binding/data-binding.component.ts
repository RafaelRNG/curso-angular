import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com'
  cursoAngular: boolean = true
  urlImagem = 'https://s2.glbimg.com/c4cIy6uiqHKoHT580oea1lNuMf0=/0x0:4608x3072/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2018/I/j/BitFoaS9eTy4xqUhA5UA/img-2417.jpg'

  constructor() { }

  ngOnInit(): void {
  }

  getValor(): number {
    return 1
  }

  getCurtirCurso() {
    return true
  }
}
