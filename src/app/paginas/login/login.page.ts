import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user={
    username:'',
    password:''
  };
  today = Date.now();
  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
  }

  onSubmit()
  {
    console.log('Login');
    this.validar();
  }
 async validar()
 {
  let u= await this.storage.get(this.user.username);
  if(u!=null)
  {
    console.log(u);
    this.storage.set('session',this.user.username);
    this.router.navigate(['/home']);
  }
  else{
    console.log('Usuario no existe');
  }
}
}
