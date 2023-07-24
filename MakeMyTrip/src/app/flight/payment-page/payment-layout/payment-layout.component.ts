import { Component } from '@angular/core';
@Component({
  selector: 'app-payment-layout',
  templateUrl: './payment-layout.component.html',
  styleUrls: ['./payment-layout.component.css']
})
export class PaymentLayoutComponent {

  constructor(){

  }
  order(amt:number){
   
          const options = {
            key: 'rzp_test_rbsvmvxqqIAlq8',
            amount: amt * 100,
            currency: 'INR',
            name: 'Spinny',
            description: "description",
            order_id: 5,
            handler: (response: any) => {
            
              console.log(response);
            },
            prefill: {
              name: 'Aman',
              email: 'aman@example.com',
              contact: '9374627351'
            }
          };

          const rzp1 = new (window as any).Razorpay(options);
          rzp1.open();
        }
    
  
}
