import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}

export class Keg {
  public pints: number = 124;
  constructor(public name:string, public brand:string, public price:number, public abv:number) { }

}
