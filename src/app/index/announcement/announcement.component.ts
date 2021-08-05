import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {
  docList!: any[]

  constructor(afs:AngularFirestore) {
    afs.collection('announcement', 
      ref => ref.where('vis', '==', true).orderBy('publishTime', 'desc').limit(10)
      ).valueChanges({ idField: 'docId' })
      .subscribe( (val:any) => {
        this.docList = val
      }, e => {
        console.log(e)
      })
  }

  ngOnInit(): void {
  }

}
