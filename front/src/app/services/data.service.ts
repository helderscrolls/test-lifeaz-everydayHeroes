import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public items: any = [];

  constructor(private http: HttpClient) { }

  getData() {
    const url = 'http://localhost:8200/';
    //const json = '../../assets/data/dataMock.json';

    return this.http.get(url)
  }

  filterItems(searchTerm) {
    this.getData().subscribe(res => {
      this.items = res
    })

    return this.items.filter(item => {
      return item.content.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
