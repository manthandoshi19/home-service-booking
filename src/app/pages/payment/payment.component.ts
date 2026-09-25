import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../../services/booking.service';
import { BookingData } from '../../models/booking.model';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  booking: BookingData | null = null;
  selectedPaymentMethod: 'upi' | 'card' | 'netbanking' | 'cod' = 'upi';
  upiId: string = 'customer@upi';
  cardNumber: string = '4532 •••• •••• 8892';
  isProcessing: boolean = false;

  constructor(
    private bookingService: BookingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.booking = this.bookingService.getBookingState();
    if (!this.booking) {
      this.router.navigate(['/booking']);
    }
  }

  get finalPayableAmount(): number {
    if (this.booking?.totalPrice !== undefined) {
      return this.booking.totalPrice;
    }
    return this.booking?.servicePrice || 0;
  }

  confirmPayment(): void {
    if (!this.booking) return;

    this.isProcessing = true;
    setTimeout(() => {
      if (this.booking) {
        this.booking.paymentMethod = this.selectedPaymentMethod.toUpperCase();
        this.bookingService.markPaymentAsPaid();
        this.isProcessing = false;
        this.router.navigate(['/confirmation']);
      }
    }, 800);
  }
}
