import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../keg.model';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-keg-detail',
  templateUrl: './keg-detail.component.html',
  styleUrls: ['./keg-detail.component.css']
})
export class KegDetailComponent implements OnInit {
  @Input() childKegList: Keg[];
  @Output() editClicker = new EventEmitter();
  @Output() subtractClicker = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  editKegHasBeenClicked(kegToEdit: Keg){
    this.editClicker.emit(kegToEdit);
  }

  subtractPintHasBeenClicked(kegToEdit: Keg){
    this.subtractClicker.emit(kegToEdit);
  }

  kegColor(currentKeg) {
    if (currentKeg.pints < 122) {
      return "bg-danger";
    } else if (currentKeg.pints < 123) {
      return "bg-warning";
    } else {
      return "bg-primary";
    }
  }
  
  boozy(keg) {
    if (keg.abv < 5) {
      return "bg-success";
    } else if (keg.abv < 9) {
      return "bg-warning";
    } else {
      return "bg-danger";
    }
  }

}
