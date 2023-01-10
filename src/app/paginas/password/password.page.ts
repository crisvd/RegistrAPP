import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  constructor(private router: Router, private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Listo',
      subHeader: 'Mensaje enviado al correo',
      buttons: ['OK'],
    });

    await alert.present();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }
}

