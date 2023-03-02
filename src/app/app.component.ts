import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //stringa usata nel file index.html dal quale comprende cosa utilizzare
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  h3 {
    color: dodgerblue;
  }
  `]
})
export class AppComponent {
}
