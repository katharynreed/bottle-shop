import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent {
  @Output() addClicker = new EventEmitter();
  @Output() showClicker = new EventEmitter();

  newKeg = false;

  addKegHasBeenClicked(name, brand, price, abv) {
    var params = {
      "name": name,
      "brand": brand,
      "price": price,
      "abv": abv
    }
    this.addClicker.emit(params);
  }

  showNewKegForm() {
    this.newKeg = true;
  }

}
