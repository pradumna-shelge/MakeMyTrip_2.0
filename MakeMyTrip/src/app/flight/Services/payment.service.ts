import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseApi } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }



  getOrderId(amount:number){
    const data = {'amount':amount}
    return this.http.post(baseApi+'Payment/create-order',data)
  }


  verifyPayment(val:any){
  debugger
    const data = {paymentId:val.razorpay_payment_id,orderId:val.razorpay_order_id,signature:val.razorpay_signature}


   return this.http.post(baseApi+"Payment/verify-Paymnet",data)
  }
}
