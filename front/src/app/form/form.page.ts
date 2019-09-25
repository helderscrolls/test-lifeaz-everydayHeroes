import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { NavController } from '@ionic/angular';

import { DataService } from '../services/data.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {

  form: FormGroup;

  constructor(private fbuilder: FormBuilder,
    private dataService: DataService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    //initialize form
    this.form = this.fbuilder.group({
      firstName: '',
      lastName: '',
      date: '',
      content: ''
    });

  }

  dismissRegister() {
    this.navCtrl.navigateForward('/home');

  }

  onSubmit() {
    let formData = this.form.value;
    console.log('Add Button clicked: ' + formData);

    this.dataService.postData(formData);

  }

}
