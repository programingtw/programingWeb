import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore'
// import { Observable } from 'rxjs';
import { Meta } from '@angular/platform-browser'

export interface Doc{
  content: string,
  coverPicture: string,
  intro: string,
  publishTime: Date,
  title: string,
  vis: boolean
}

@Component({
  selector: 'app-announcementdetail',
  templateUrl: './announcementdetail.component.html',
  styleUrls: ['./announcementdetail.component.scss']
})
export class AnnouncementdetailComponent implements OnInit {
  id
  doc

  constructor(
    private router: Router,
    private acrout: ActivatedRoute,
    private afs: AngularFirestore,
    private meta: Meta
  ) { 
    this.id = this.acrout.snapshot.paramMap.get('id')
    this.afs.collection('announcement', 
        ref => ref.where('vis', '==', true)
      ).doc(this.id).valueChanges()
      .subscribe( val => {
        this.doc = val
        this.meta.addTags([
          {name: 'title', content: `普羅柯普小教室-${this.doc.title}`},
          {name: 'description', content: this.doc.intro},
          {name: 'author', content: `科技柯基`},
          {name: 'canonical', content: `https://new.programing.tw/announcement/${this.id}`},
          {name: 'og:type', content: 'article'},
          {name: 'og:title', content: `普羅柯普小教室${this.doc.title}`},
          {name: 'og:description', content: `${this.doc.intro}\n快來點擊看文章`},
          {name: 'og:url', content: `https://new.programing.tw/announcement/${this.id}`},
          {name: 'og:img', content: this.doc.coverPicture},
          {name: 'og:site_name', content: `普羅程式教育`},
        ])
      }, e => {
        this.router.navigate([''])
      })
    }

  ngOnInit(): void {
  }
}