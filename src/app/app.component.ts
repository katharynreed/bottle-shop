import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class='container'>
    <h2>This is our bottle shop</h2>
    <div class='col-md-4'>
      <div>
        <ul>
          <li *ngFor="let keg of kegs">{{keg.name}}
            <ul>
              <li [class]="kegColor(keg)">Brand: {{keg.brand}}</li>
              <li>Price per Pint: {{keg.price}}</li>
              <li>Alcohol By Volume: {{keg.abv}}</li>
              <li>Pints Remaining: {{keg.pints}}</li>
              <button (click)=subtractPint(keg)>Serve A Pint</button>
              <button (click)="editKeg(keg)">Change Details</button>
            </ul>
          </li>
        </ul>
      </div>
      <button (click)="showNewKeg()">Add A Keg</button>
      <div *ngIf='newKeg'>
          <label for="name">Name</label>
          <input #name><br>
          <label for="brand">Brand</label>
          <input #brand><br>
          <label for="price">Price</label>
          <input #price><br>
          <label for="abv">Alcohol By Volume</label>
          <input #abv><br>
          <button (click)="tapNewKeg(name.value, brand.value, price.value, abv.value)">I'd Tap That</button>

      </div>
    </div>
    <div class='col-md-8'>
    <div *ngIf='displayEditKeg'>
        <label for="name">Name</label>
        <input [(ngModel)]="currentKeg.name"><br>
        <label for="brand">Brand</label>
        <input [(ngModel)]="currentKeg.brand"><br>
        <label for="price">Price</label>
        <input [(ngModel)]="currentKeg.price"><br>
        <label for="abv">Alcohol By Volume</label>
        <input [(ngModel)]="currentKeg.abv"><br>
        <button (click)="doneEditing()">Done</button>

    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newKeg = false;
  title = 'Bottle Shop';
  currentKeg = null;
  displayEditKeg = false;
  kegs: Keg[] = [
    new Keg('Fck U Up', 'Deschutes', 6.5, 12),
    new Keg('Pretty OK', 'PBR Equivalent', 2.5, 3.75),
    new Keg('Cat\'s Piss', 'Second Door Over', 7.50, 7)
  ];
  showNewKeg() {
    this.newKeg = true;
  }
  tapNewKeg(inputname, inputbrand, inputprice, inputabv) {
    console.log(inputname);
    var newKeg = new Keg(inputname, inputbrand, inputprice, inputabv);
    this.kegs.push(newKeg);
  }

  subtractPint(keg) {
    console.log(keg);
    keg.pints --;
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

  editKeg(keg) {
    this.currentKeg = keg;
    this.displayEditKeg = true;
  }

  doneEditing() {
    this.currentKeg = null;
    this.displayEditKeg = false;
  }
}

export class Keg {
  public pints: number = 124;
  constructor(public name:string, public brand:string, public price:number, public abv:number) { }
}
