import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  public searchTerm: string = '';
  public searchControl: FormControl;
  public items: any;
  public itemsLength: any;
  public searching: any = false;

  constructor(private dataService: DataService) {
    this.searchControl = new FormControl();
  }

  ngOnInit() {
    this.dataService.getData().subscribe(res => {
      this.items = res
      this.itemsLength = this.items.length
    })

    this.setFilteredItems("");

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
    // this.itemsLength = this.items.length
  }
}