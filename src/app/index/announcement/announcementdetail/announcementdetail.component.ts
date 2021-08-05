import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore'
// import { Observable } from 'rxjs';

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
    private afs: AngularFirestore
  ) { 
    this.id = this.acrout.snapshot.paramMap.get('id')
    this.afs.collection('announcement', 
        ref => ref.where('vis', '==', true)
      ).doc(this.id).valueChanges()
      .subscribe( val => {
        this.doc = val
      }, e => {
        this.router.navigate([''])
      })
  }

  ngOnInit(): void {
  }
}