import { Injectable } from '@angular/core';
import { BookingData } from '../models/booking.model';
import { ServiceItem } from '../models/service.model';
import { SERVICES_DATA } from '../data/services.data';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private selectedServiceId: string | null = null;
  private activeBooking: BookingData | null = null;

  setSelectedServiceId(serviceId: string): void {
    this.selectedServiceId = serviceId;
  }

  getSelectedServiceId(): string | null {
    return this.selectedServiceId;
  }

  getSelectedService(): ServiceItem | undefined {
    if (!this.selectedServiceId) {
      return SERVICES_DATA[0]; // Default to first service if none selected
    }
    return SERVICES_DATA.find(s => s.id === this.selectedServiceId) || SERVICES_DATA[0];
  }

  saveBookingState(booking: BookingData): void {
    this.activeBooking = {
      ...booking,
      paymentStatus: booking.paymentStatus || 'pending'
    };
  }

  getBookingState(): BookingData | null {
    return this.activeBooking;
  }

  markPaymentAsPaid(): void {
    if (this.activeBooking) {
      this.activeBooking.paymentStatus = 'paid';
      if (!this.activeBooking.bookingReference) {
        const randomNum = Math.floor(100000 + Math.random() * 900000);
        this.activeBooking.bookingReference = `BK-${randomNum}`;
      }
    }
  }

  clearBookingState(): void {
    this.selectedServiceId = null;
    this.activeBooking = null;
  }
}
