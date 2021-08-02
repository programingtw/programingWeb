import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {
  member = [
    {'name': '林一', 'job': '總監', 'img': 'lin.jpg'},
    {'name': '簡蔚驊', 'job': '技術指導、計畫發起人', 'img': 'chien.jpg'},
    {'name': '鄧暐宣', 'job': '講師', 'img': 'doun.jpg'},
    {'name': '呂品成', 'job': '行銷公關', 'img': 'lou.jpg'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
