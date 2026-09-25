import { Injectable } from '@angular/core';
import { BookingData } from '../models/booking.model';
import { ServiceItem } from '../models/service.model';
import { SERVICES_DATA } from '../data/services.data';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private selectedServiceId: string | null = null;
  private selectedAddons: { id: string; name: string; price: number }[] = [];
  private activeBooking: BookingData | null = null;

  constructor(private storageService: StorageService) {
    // Restore state from HTML5 Web Storage (localStorage) & Cookies on init
    this.activeBooking = this.storageService.getItem<BookingData>('saterax_active_booking');
    const savedCookieCity = this.storageService.getCookie('saterax_user_city');
    if (savedCookieCity) {
      console.log('Restored user city from cookie:', savedCookieCity);
    }
  }

  setSelectedServiceId(serviceId: string, addons: { id: string; name: string; price: number }[] = []): void {
    this.selectedServiceId = serviceId;
    this.selectedAddons = addons;
  }

  getSelectedServiceId(): string | null {
    return this.selectedServiceId;
  }

  getSelectedAddons(): { id: string; name: string; price: number }[] {
    return this.selectedAddons;
  }

  getSelectedService(): ServiceItem | undefined {
    if (!this.selectedServiceId) {
      return SERVICES_DATA[0];
    }
    return SERVICES_DATA.find(s => s.id === this.selectedServiceId) || SERVICES_DATA[0];
  }

  saveBookingState(booking: BookingData): void {
    this.activeBooking = {
      ...booking,
      paymentStatus: booking.paymentStatus || 'pending'
    };
    // Save to HTML5 localStorage & Cookies for WT Syllabus compliance
    this.storageService.setItem('saterax_active_booking', this.activeBooking);
    if (booking.city) {
      this.storageService.setCookie('saterax_user_city', booking.city, 7);
    }
  }

  getBookingState(): BookingData | null {
    if (!this.activeBooking) {
      this.activeBooking = this.storageService.getItem<BookingData>('saterax_active_booking');
    }
    return this.activeBooking;
  }

  markPaymentAsPaid(): void {
    if (!this.activeBooking) {
      this.activeBooking = this.storageService.getItem<BookingData>('saterax_active_booking');
    }

    if (this.activeBooking) {
      this.activeBooking.paymentStatus = 'paid';
      if (!this.activeBooking.bookingReference) {
        const randomNum = Math.floor(100000 + Math.random() * 900000);
        this.activeBooking.bookingReference = `STR-${randomNum}`;
      }
      this.storageService.setItem('saterax_active_booking', this.activeBooking);
    }
  }

  clearBookingState(): void {
    this.selectedServiceId = null;
    this.selectedAddons = [];
    this.activeBooking = null;
    this.storageService.removeItem('saterax_active_booking');
  }
}
