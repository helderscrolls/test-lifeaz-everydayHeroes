import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

import { debounceTime } from "rxjs/operators";

import { NavController } from '@ionic/angular';

import { Item } from '../interfaces/item';
import { DataService } from "../services/data.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  public searchTerm: string = '';
  public searchControl: FormControl;
  public items: Item[] = [];
  public itemsLength: number;
  public searching: boolean = false;

  constructor(private dataService: DataService,
    private navCtrl: NavController,
    ) {
    this.searchControl = new FormControl();
  }

  // Refresh the data after submitting the form
  ionViewWillEnter() {
    this.ngOnInit();

  }

  ngOnInit() {
    this.dataService.getData();
    
    this.dataService.getDataEvent.subscribe(res => {
      this.items = res
      this.itemsLength = this.items.length
      
    })

    this.searchControl.valueChanges
      .pipe(debounceTime(700))
      .subscribe(search => {
        this.searching = false;
        this.setFilteredItems(search);
      });
  }

  onSearchInput() {
    this.searching = true;
  }

  setFilteredItems(searchTerm) {
    this.items = this.dataService.filterItems(searchTerm);
  }

  addTestimony() {
    this.navCtrl.navigateForward('/form');
  }
}