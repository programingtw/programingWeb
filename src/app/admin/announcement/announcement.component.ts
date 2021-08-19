import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MDBModalRef, MDBModalService } from 'ng-uikit-pro-standard';
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
  delId

  constructor(
    private afs: AngularFirestore, 
    private router: Router,
    private modalService: MDBModalService) { 
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

  public showmodel(doc){
    this.delId = doc
  }

  public delDoc(id){
    this.afs.collection('announcement').doc(id).delete()
  }
}


