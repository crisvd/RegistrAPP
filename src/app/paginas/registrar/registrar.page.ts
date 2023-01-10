import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  user: User={
    username:'',
    password:'',
    email:''
  };
  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
    this.guardar();
  }
  async guardar() {
    let g = await this.storage.get(this.user.username);
    if (g == null)
    {
      await this.storage.set(this.user.username, this.user);
      console.log('Usuario registrado');
      this.router.navigate(['/login']);
    }
    else{
      console.log('Usuario ya existe');
    }
  }
}
