import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api-service/ApiService';
import { CardValueService } from '../shared/card-value.service';

@Component({
  selector: 'app-navebar',
  templateUrl: './navebar.component.html',
  styleUrls: ['./navebar.component.css']
})
export class NavebarComponent {
  isLoginn: boolean = false;
  myCard: number = -1;

  constructor(
    private route: Router,
    private cardValue: CardValueService,
    private apiService: ApiService) { }
  loginn() {
    // alert("click")
    if (this.isLoginn) {
      this.isLoginn = false;
    }
    else {
      this.isLoginn = true;
    }
  }
  getMyCardsByClientRefId(clientId: number) {
    this.apiService.getMyCardsByClientRefId(clientId).subscribe({
      next: (value) => {
        this.cardValue.setCardValue(value.length);
      },
      error: (e) => {

      }, complete: () => {

      }
    })
  }
  ngOnInit() {
    this.getMyCardsByClientRefId(1);
    this.cardValue.cardValueData$.subscribe(data => {
      this.myCard = data;
    });

  }
  myCardView() {
    this.route.navigate(['home/card-checkout'], { skipLocationChange: true });
  }
  ngOnChange() {

  }
}