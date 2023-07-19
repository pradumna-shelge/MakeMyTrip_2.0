import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent {
  cardNumber!: string;
  expiryDate!: string;
  cvv!: string;

  constructor(private http: HttpClient) { }

  makePayment(): void {
    const paymentDetails = {
      cardNumber: this.cardNumber,
      expiryDate: this.expiryDate,
      cvv: this.cvv
    };

    this.http.post('https://localhost:7007/api/Payment', paymentDetails).subscribe(
      (response) => {
       console.log("hello");
       
      },
      (error) => {
        // Handle payment error
      }
    );
  }
}
