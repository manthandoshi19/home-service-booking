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
  city?: string;
  landmark?: string;
  preferredDate: string;
  preferredTime: string;
  specialNotes?: string;
  selectedAddons?: { name: string; price: number }[];
  couponCode?: string;
  discountAmount?: number;
  totalPrice?: number;
  paymentMethod?: string;
  isValid: boolean;
  paymentStatus?: 'pending' | 'paid';
  bookingReference?: string;
}

