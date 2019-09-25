import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private toastController: ToastController) { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Merci pour votre témoignage.',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

}