import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public auth: AngularFireAuth, 
    private router: Router,
    private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }
  email = new FormControl('')
  password = new FormControl('')

  async login() {
    console.log('login')
    const credential = 
      await this.auth.signInWithEmailAndPassword(
        this.email.value, this.password.value
      ).then(()=>{
        this.snackbar.open('登入成功', '恩', {duration: 3000})
        this.router.navigate(['/admin'])
      }).catch(()=>{
        this.snackbar.open('密碼錯了', '恩', {duration: 3000})
      });
  }
 
}
