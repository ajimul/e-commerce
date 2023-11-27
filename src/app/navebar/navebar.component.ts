import { Component, Input } from '@angular/core';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-navebar',
  templateUrl: './navebar.component.html',
  styleUrls: ['./navebar.component.css']
})
export class NavebarComponent {
  isLoginn: boolean = false;
  // @Input() myCard?: number;
  myCard: number = 0;
  constructor(private dataSharingService: DataSharingService) {}
  loginn() {
    console.log("click")
    if (this.isLoginn) {
      this.isLoginn = false;
    }
    else {
      this.isLoginn = true;
    }
  }   

  ngOnInit() {
    this.dataSharingService.data$.subscribe(data => {
      // this.myCard += data.stars;
      this.myCard += 1;
    });
  }
}