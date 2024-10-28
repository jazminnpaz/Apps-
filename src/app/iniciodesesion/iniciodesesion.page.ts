import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../servicios/dataservice.service'; 
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-iniciodesesion',
  templateUrl: './iniciodesesion.page.html',
  styleUrls: ['./iniciodesesion.page.scss'],
})
export class IniciodesesionPage implements OnInit {
  Usuarios= {
    nombre: '',
    correo_electronico: '',
    contraseña: '',
    edad: '',
    peso: null,
    altura: null,
    sexo: '',
    nivel_condicion_fisica: ''
  };

  constructor(private dataService: DataserviceService, private alertCtrl: AlertController) {}

  async register() {
    try {
      const response = await this.dataService.registerUser(this.Usuarios).toPromise();
      const alert = await this.alertCtrl.create({
        header: 'Registro exitoso',
        message: 'Usuario registrado correctamente.',
        buttons: ['OK']
      });
      await alert.present();
    } catch (error) {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'Hubo un problema al registrarse. Por favor, intente de nuevo.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }

  ngOnInit() {}
}
