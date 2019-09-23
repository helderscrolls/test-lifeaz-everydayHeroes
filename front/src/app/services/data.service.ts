import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public items: any = [];

  @Output()
  getDataEvent = new EventEmitter();

  constructor(private http: HttpClient) { }

  getData() {
    const url = 'http://localhost:8200/';
    //const json = '../../assets/data/dataMock.json';
    this.http.get(url).subscribe(res => {
      this.items = res;
      this.getDataEvent.emit(res);
    });
  }

  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.content.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
