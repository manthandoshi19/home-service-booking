import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { BookingData } from '../../models/booking.model';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  booking: BookingData | null = null;
  isPaymentConfirmed = false;

  constructor(
    private bookingService: BookingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.booking = this.bookingService.getBookingState();
    if (this.booking && this.booking.paymentStatus === 'paid') {
      this.isPaymentConfirmed = true;
    }
  }

  confirmPayment(): void {
    if (this.booking) {
      this.bookingService.markPaymentAsPaid();
      this.booking = this.bookingService.getBookingState();
      this.isPaymentConfirmed = true;
      this.router.navigate(['/confirmation']);
    }
  }
}
