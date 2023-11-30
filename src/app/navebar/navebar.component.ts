import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MyCardListService } from '../shared/my-card-list.service';

@Component({
  selector: 'app-navebar',
  templateUrl: './navebar.component.html',
  styleUrls: ['./navebar.component.css']
})
export class NavebarComponent {
  isLoginn: boolean = false;
  myCard: number = -1;

  constructor(private dataSharingService: MyCardListService,
    private route: Router) { }
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
    this.dataSharingService.myCardListData$.subscribe(data => {
      this.myCard += 1;
    });

  }
  myCardView() {
    this.route.navigate(['home/my-card-view'], { skipLocationChange: true });
  }
  ngOnChange() {

  }
}