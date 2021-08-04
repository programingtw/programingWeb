import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import * as ClassicEditor from '../../../../ckeditor/ckeditor';
import { collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-announcementdetail',
  templateUrl: './announcementdetail.component.html',
  styleUrls: ['./announcementdetail.component.scss']
})
export class AnnouncementdetailComponent implements OnInit {
  public editor = ClassicEditor
  config = {
    placeholder: "內容",
    toolbar: [
      'heading', '|',
      'undo', 'redo', 'fontSize', 'fontColor', 'alignment', 'bold', 'italic','|',
      'link', 'bulletedList', 'numberedList', '|',
      'outdent', 'indent', '|',
      'code', 'codeBlock', 'imageInsert', 'imageUpload',
      'blockQuote', 'insertTable', 'mediaEmbed', 'sourceEditing'
    ],
    language: 'zh',
    image: {
      toolbar: [
        'imageTextAlternative',
        'imageStyle:inline',
        'imageStyle:block',
        'imageStyle:side'
      ]
    },
    table: {
      contentToolbar: [
        'tableColumn',
        'tableRow',
        'mergeTableCells'
      ]
    },
    licenseKey: '', 
    // extraPlugins: [ this.TheUploadAdapterPlugin ]
  };
  public id: any
  public doc: Observable<any>
  public file: File | null = null;

  @ViewChild('fileInput') fileInput!: ElementRef;
  fileAttr = 'Choose File';

  constructor(
    private router: Router,
    private acrout: ActivatedRoute,
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.id = this.acrout.snapshot.paramMap.get('id')
    this.doc = this.afs.collection('announcement').doc(this.id).valueChanges()
  }

  ngOnInit(): void {
    // this.acrout.queryParams.subscribe((parm) => {this.id = parm['id']})
  }

  public onReady(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return new UploadAdapter(loader, this.storage, this.id);
    };
  }
}

class UploadAdapter {
  loader
  storage
  filepath
  downloadURL!: Observable<string>;
  constructor(loader, storage, id) {
    this.loader = loader
    this.storage = storage 
    this.filepath = `announcement/${id}`
  }

  upload() {
    return new Promise((resolve, reject) => {
      const filepath = this.filepath
      this.loader.file.then(
        file => {
          let fileref = this.storage.ref(`${filepath}/${file.name}`)
          let task = this.storage.upload(`${filepath}/${file.name}`, file)
          task.snapshotChanges().pipe(
            finalize(() => {
              this.downloadURL = fileref.getDownloadURL()
              this.downloadURL.subscribe(res => resolve({res}))
            })
          ).subscribe()
        }
      )
    });
  }

  abort() {
    console.log('UploadAdapter abort');
  }
}