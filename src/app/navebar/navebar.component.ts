import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navebar',
  templateUrl: './navebar.component.html',
  styleUrls: ['./navebar.component.css']
})
export class NavebarComponent {
  isLoginn: boolean = false;
  @Input() myCard?: number;
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
   
  myCardList() {
    if (this.myCard === undefined || this.myCard===0) {
    }
    else{
      this.totalCard+=this.myCard;
    }
  }
  ngOnChanges() {
    this.myCardList();
  }
}
