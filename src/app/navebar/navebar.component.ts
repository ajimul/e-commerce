import { Component } from '@angular/core';

@Component({
  selector: 'app-navebar',
  templateUrl: './navebar.component.html',
  styleUrls: ['./navebar.component.css']
})
export class NavebarComponent {
  isLoginn: boolean = false;
  totalCard: number = 0;
  loginn() {
    console.log("click")
    if (this.isLoginn) {
      this.isLoginn = false;
    }
    else {
      this.isLoginn = true;
    }
  }
}
