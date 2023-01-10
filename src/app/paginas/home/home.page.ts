import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  nombre: String='';
  constructor(private storage: Storage,private router: Router) {}

  cerrarSesion(){
    this.cerrar();
    this.router.navigate(['/login']);
  }

  ngOnInit(){
      this.vernombre();
  }
  async cerrar()
  {
    await this.storage.set('session',null);
  }

  async vernombre()
  {
    this.nombre=await this.storage.get('session');
  }
}