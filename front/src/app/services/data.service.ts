import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public items: any = [];
  private API_URL = 'http://localhost:8200/';

  @Output()
  getDataEvent = new EventEmitter();

  constructor(private http: HttpClient) { }

  getData() {
    //const json = '../../assets/data/dataMock.json';
    this.http.get(this.API_URL).subscribe(res => {
      this.items = res;
      this.getDataEvent.emit(res);
    });
  }

  postData(form) {
    return this.http.post(this.API_URL, form)
      .subscribe(
        data => console.log("success!", data),
        error => console.error("couldn't post because", error)
      );
  }

  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.content.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
