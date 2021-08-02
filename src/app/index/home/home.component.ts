// import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface Reply{
  name: string
  phone: string
  email: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  contactForm: FormGroup
  disabledSubmitButton: boolean = true
  optionsSelect: Array<any> = []

  @HostListener('input') oninput() {
    if (this.contactForm.valid) {
      this.disabledSubmitButton = false
    }
  }

  constructor(private fb: FormBuilder, 
    private readonly afs: AngularFirestore,
    private snackBar: MatSnackBar) {
  
    this.contactForm = fb.group({
      'name': ['', Validators.required],
      'phone': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.contactForm.value.time = new Date()
    this.afs.collection('reply').add(this.contactForm.value).then(()=>{
      this.contactForm.reset()
      this.disabledSubmitButton = true
      this.snackBar.open('已收到，我們會盡快與您聯絡', '確認', {
        duration: 3000
      })
    })
    // this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
    //   alert('Your message has been sent.');
    //   this.contactForm.reset();
    //   this.disabledSubmitButton = true;
    // }, (error: any) => {
    //   console.log('Error', error);
    // });
  }
}
