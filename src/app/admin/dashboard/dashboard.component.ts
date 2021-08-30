import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  replys

  constructor(private afs:AngularFirestore) { 
    this.replys = afs.collection('reply', ref => ref.orderBy('time', 'desc')).valueChanges();
  }

  ngOnInit(): void {
  }

}
