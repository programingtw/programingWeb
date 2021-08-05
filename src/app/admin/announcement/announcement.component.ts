import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import  {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Router } from '@angular/router'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {
  headElements = ['ID', '標題', '修改時間', '發布時間', '公開', '修改', '移除'];
  elements: Observable<any[]>

  constructor(private afs: AngularFirestore, private router: Router) { 
    this.elements = afs.collection('announcement', 
      res => res.orderBy('updateTime', 'desc')).valueChanges({ idField: 'docId'})
  }

  ngOnInit(): void {   
  }

  public newDoc(){
    const id = this.afs.createId()
    const data = {
      content: '',
      intro: '',
      publishTime: new Date(),
      vis: false,
      coverPicture: '',
      title: 'new Doc',
      updateTime: new Date()
    }
    this.afs.collection('announcement').doc(id).set(data)
    this.router.navigate([`/admin/announcement/${id}`])
  }

  public delDoc(id){
    this.afs.collection('announcement').doc(id).delete()
  }
}


