import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder,Validators } from '@angular/forms'
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import * as ClassicEditor from '../../../../ckeditor/ckeditor';

@Component({
  selector: 'app-announcementdetail',
  templateUrl: './announcementdetail.component.html',
  styleUrls: ['./announcementdetail.component.scss']
})
export class AnnouncementdetailComponent implements OnInit {
  public editor = ClassicEditor
  public config = {
    placeholder: "內容",
    toolbar: {
      items:[
        'heading', '|',
        'undo', 'redo', 'fontSize', 'fontColor', 'alignment', 'bold', 'italic','|',
        'link', 'bulletedList', 'numberedList', '|',
        'outdent', 'indent', '|',
        'code', 'codeBlock', 'imageInsert', 'imageUpload',
        'blockQuote', 'insertTable', 'mediaEmbed', 'sourceEditing'
      ],
      isSticky: true
    },
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
  };
  public id: any
  public doc: Observable<any>
  public coverPicture: string = ''
  public form = this.fb.group({
    title: ['', Validators.required],
    publishDate: ['', Validators.required],
    publishTimePicker: ['00:00', Validators.required],
    vis: [false],
    intro: ['', Validators.required],
    content: ['', Validators.required]
  })

  constructor(
    private router: Router,
    private acrout: ActivatedRoute,
    private afs: AngularFirestore,
    private storage: AngularFireStorage,
    private fb: FormBuilder
  ) {
    this.id = this.acrout.snapshot.paramMap.get('id')
    this.doc = this.afs.collection('announcement').doc(this.id).valueChanges()
    this.doc.subscribe(res=>{
      this.form.patchValue(res)
      this.coverPicture = res.coverPicture
      let t = new Date(res.publishTime.seconds * 1000)
      this.form.patchValue({
        publishDate: t,
        publishTimePicker: String(t.getHours()) + ':' + 
                           String(t.getMinutes()).padStart(2, '0')
      })
    })
  }

  ngOnInit(): void {
    // this.acrout.queryParams.subscribe((parm) => {this.id = parm['id']})
  }

  public onReady(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return new UploadAdapter(loader, this.storage, this.id);
    };
  }

  public imageupload(event){
    const file = event.target.files[0];
    const filePath = `announcement/${this.id}/${file.name}`
    let fileref = this.storage.ref(filePath)
    const task = this.storage.upload(filePath, file);
    task.snapshotChanges().pipe(
      finalize(() => {
        fileref.getDownloadURL().subscribe(res => this.coverPicture = res)
      })
    ).subscribe()
  }

  public submit(status){
    if(!this.form.valid){
      alert('你還有東西沒輸入')
      return
    }
    let f = this.form.value
    let publishTime = new Date(f.publishDate)
    let t = f.publishTimePicker.split(':')
    publishTime.setHours(parseInt(t[0]))
    publishTime.setMinutes(parseInt(t[1]))
    let data = {
      content: f.content,
      intro: f.intro,
      publishTime: publishTime,
      vis: f.vis,
      coverPicture: this.coverPicture,
      title: f.title,
      updateTime: new Date()
    }
    console.log(data, f.vis)
    this.afs.collection('announcement').doc(this.id).update(data).then(()=>{
      alert('success')
    }).catch(()=>{
      alert('壞掉了')
    })
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