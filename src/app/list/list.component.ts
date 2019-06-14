import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public selectedProviders = [];
  public unselectedProviders = [
    {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    },
    {
      id: '2',
      name: 'Mary',
      address: '443 Windwhisper Road',
      phone: '2233211903'
    },
    {
      id: '3',
      name: 'Jason',
      address: '9992 Pumpkin Hollow',
      phone: '4343219384'
    }
  ];

  constructor() {}

  ngOnInit() {}

  handleSelect(id) {
    this.moveProvider('unselectedProviders', 'selectedProviders', id);
  }

  handleUnselect(id) {
    this.moveProvider('selectedProviders', 'unselectedProviders', id);
  }

  moveProvider(start, end, id) {
    const providerIndex = this[start].findIndex((idx) => idx.id === id);
    if (providerIndex === -1) {
      throw new Error(`ID: ${id} is invalid.`);
    } else {
      const provider = this[start].splice(providerIndex, 1);
      this[end].push(provider[0]);
    }
  }

}
