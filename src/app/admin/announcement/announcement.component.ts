import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {
  headElements = ['ID', '標題', '修改時間', '發布時間', '修改'];
  elements: Observable<any[]>

  constructor(private afs: AngularFirestore) { 
    this.elements = afs.collection('announcement').valueChanges({ idField: 'docId'})
  }

  ngOnInit(): void {
      
  }
}
