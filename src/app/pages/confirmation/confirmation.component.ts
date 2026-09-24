import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { BookingData } from '../../models/booking.model';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent implements OnInit {
  booking: BookingData | null = null;

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.booking = this.bookingService.getBookingState();
    if (this.booking && !this.booking.bookingReference) {
      this.bookingService.markPaymentAsPaid();
      this.booking = this.bookingService.getBookingState();
    }
  }
}
