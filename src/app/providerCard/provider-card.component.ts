import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-provider-card',
  templateUrl: './provider-card.component.html',
  styleUrls: ['./provider-card.component.css']
})
export class ProviderCardComponent {
  @Input() provider;
  @Input() selected: boolean;
  @Output() providerCardSelect: EventEmitter<any> = new EventEmitter<any>();
  @Output() providerCardUnselect: EventEmitter<any> = new EventEmitter<any>();

  selectProvider() {
    this.providerCardSelect.emit(this.provider.id);
  }

  unselectProvider() {
    this.providerCardUnselect.emit(this.provider.id);
  }
}
