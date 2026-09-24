export interface BookingData {
  serviceId: string;
  serviceName: string;
  serviceCategory: string;
  servicePrice: number;
  serviceDuration: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  address: string;
  preferredDate: string;
  preferredTime: string;
  specialNotes?: string;
  isValid: boolean;
  paymentStatus?: 'pending' | 'paid';
  bookingReference?: string;
}
