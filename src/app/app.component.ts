import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class='container'>
    <h2>This is our bottle shop</h2>
    <div>
      <ul>
        <li *ngFor="let keg of kegs">{{keg.name}}
          <ul>
            <li>Brand: {{keg.brand}}</li>
            <li>Price per Pint: {{keg.price}}</li>
            <li>Alcohol By Volume: {{keg.abv}}</li>
            <li>Pints Remaining: {{keg.pints}}</li>
          </ul>
        </li>
      </ul>
    </div>
    <button (click)="showNewKeg()">Add A Keg</button>
    <div *ngIf='newKeg'>
      <h1>Here will go some stuff</h1>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newKeg = false;
  title = 'Bottle Shop';
  kegs: Keg[] = [
    new Keg('Fck U Up', 'Deschutes', 6.5, 12),
    new Keg('Pretty OK', 'PBR Equivalent', 2.5, 3.75),
    new Keg('Cat\'s Piss', 'Second Door Over', 7.50, 7)
  ];
  showNewKeg() {
    this.newKeg = true;
  }
}

export class Keg {
  public pints: number = 124;
  constructor(public name:string, public brand:string, public price:number, public abv:number) { }
}
