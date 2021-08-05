import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Pipe({ name: "safeHtml" })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}

@Component({
  selector: 'app-announcementdetail',
  templateUrl: './announcementdetail.component.html',
  styleUrls: ['./announcementdetail.component.scss']
})
export class AnnouncementdetailComponent implements OnInit {
  id
  doc: Observable<any>

  constructor(
    private acrout: ActivatedRoute,
    private afs: AngularFirestore
  ) { 
    this.id = this.acrout.snapshot.paramMap.get('id')
    this.doc = this.afs.collection('announcement').doc(this.id).valueChanges()
  }

  ngOnInit(): void {
  }

}

