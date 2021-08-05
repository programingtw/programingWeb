import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {
  docList: Observable<any[]>

  constructor(afs:AngularFirestore) {
    this.docList = afs.collection('announcement', 
      ref => ref.orderBy('publishTime', 'desc')).valueChanges({ idField: 'docId' })
  }

  ngOnInit(): void {
    
  }

}
