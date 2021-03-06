import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


import { NavController } from '@ionic/angular';

import { DataService } from '../services/data.service';
import { AlertService } from '../services/alert.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  public testimonyForm: FormGroup;

  constructor(private fbuilder: FormBuilder,
    private dataService: DataService,
    private navCtrl: NavController,
    private alertService: AlertService
  ) { }

  ionViewWillEnter() {
    this.ngOnInit();

  }

  ngOnInit() {
    //initialize form
    this.testimonyForm = this.fbuilder.group({
      firstName: ['', Validators.compose([
        Validators.maxLength(30), 
        Validators.pattern('[a-zA-Z ]*'), 
        Validators.required])],

      lastName: ['', Validators.compose([
        Validators.maxLength(30), 
        Validators.pattern('[a-zA-Z ]*'), 
        Validators.required])],

      date: ['', Validators.required],
      content: ['', Validators.required]
    });

  }

  dismissRegister() {
    this.navCtrl.navigateForward('/home');
    
  }

  onSubmit() {
    let formData = this.testimonyForm.value;

    this.dataService.postData(formData);
    this.alertService.presentToast();

  }



}
