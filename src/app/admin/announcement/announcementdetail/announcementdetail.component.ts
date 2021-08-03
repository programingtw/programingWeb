import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as ClassicEditor from '../../../../ckeditor/ckeditor';

@Component({
  selector: 'app-announcementdetail',
  templateUrl: './announcementdetail.component.html',
  styleUrls: ['./announcementdetail.component.scss']
})
export class AnnouncementdetailComponent implements OnInit {
  public editor = ClassicEditor
  public id: any
  public doc: Observable<any>
  public file: File | null = null;

  @ViewChild('fileInput')  fileInput!: ElementRef;
  fileAttr = 'Choose File';

  constructor(
    private router: Router,
    private acrout: ActivatedRoute,
    private afs: AngularFirestore
  ) {
    this.id = this.acrout.snapshot.paramMap.get('id')
    this.doc = this.afs.collection('announcement').doc(this.id).valueChanges()
  }

  ngOnInit(): void {
    // this.acrout.queryParams.subscribe((parm) => {this.id = parm['id']})
  }

}
