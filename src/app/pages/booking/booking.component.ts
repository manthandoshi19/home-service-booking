import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { SERVICES_DATA } from '../../data/services.data';
import { ServiceItem } from '../../models/service.model';
import { BookingData } from '../../models/booking.model';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;
  selectedService: ServiceItem | undefined;
  availableServices: ServiceItem[] = SERVICES_DATA;
  selectedAddons: { id: string; name: string; price: number }[] = [];

  cities: string[] = ['Mumbai', 'Delhi NCR & Gurgaon', 'Bengaluru', 'Hyderabad', 'Pune', 'Chennai', 'Kolkata'];

  timeSlots: string[] = [
    '08:00 AM - 10:00 AM (Express)',
    '10:00 AM - 12:00 PM',
    '12:00 PM - 02:00 PM',
    '02:00 PM - 04:00 PM',
    '04:00 PM - 06:00 PM',
    '06:00 PM - 08:00 PM'
  ];

  couponInput: string = '';
  appliedCoupon: string | null = null;
  discountAmount: number = 0;
  couponMessage: string = '';
  isCouponSuccess: boolean = false;

  minDate: string = new Date().toISOString().split('T')[0];
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    this.selectedAddons = this.bookingService.getSelectedAddons();
    
    this.route.queryParams.subscribe(params => {
      const paramServiceId = params['serviceId'];
      if (paramServiceId) {
        this.bookingService.setSelectedServiceId(paramServiceId, this.selectedAddons);
      }
      this.selectedService = this.bookingService.getSelectedService();
      this.initForm();
    });
  }

  private initForm(): void {
    const defaultServiceId = this.selectedService ? this.selectedService.id : this.availableServices[0].id;
    this.bookingForm = this.fb.group({
      serviceId: [defaultServiceId, Validators.required],
      customerName: ['', [Validators.required, Validators.minLength(2)]],
      customerPhone: ['', [Validators.required, Validators.pattern('^[6-9]\\d{9}$')]],
      customerEmail: ['', [Validators.required, Validators.email]],
      city: ['Mumbai', Validators.required],
      address: ['', Validators.required],
      landmark: [''],
      preferredDate: [this.minDate, [Validators.required, this.futureDateValidator]],
      preferredTime: [this.timeSlots[1], Validators.required],
      specialNotes: ['']
    });

    this.bookingForm.get('serviceId')?.valueChanges.subscribe((serviceId: string) => {
      this.onServiceChange(serviceId);
    });
  }

  onServiceChange(serviceId: string): void {
    this.bookingService.setSelectedServiceId(serviceId, this.selectedAddons);
    this.selectedService = SERVICES_DATA.find(s => s.id === serviceId) || SERVICES_DATA[0];
    this.recalculateDiscount();
  }

  get addonsTotalPrice(): number {
    return this.selectedAddons.reduce((sum, a) => sum + a.price, 0);
  }

  get subtotalPrice(): number {
    return (this.selectedService?.price || 0) + this.addonsTotalPrice;
  }

  get totalPrice(): number {
    return Math.max(0, this.subtotalPrice - this.discountAmount);
  }

  applyCoupon(): void {
    const code = this.couponInput.trim().toUpperCase();
    if (!code) return;

    if (code === 'WELCOME50') {
      this.appliedCoupon = 'WELCOME50';
      this.discountAmount = 300;
      this.couponMessage = 'Promo code WELCOME50 applied! Flat ₹300 OFF';
      this.isCouponSuccess = true;
    } else if (code === 'CLEAN20') {
      this.appliedCoupon = 'CLEAN20';
      this.discountAmount = Math.round(this.subtotalPrice * 0.20);
      this.couponMessage = `Promo code CLEAN20 applied! 20% OFF (-₹${this.discountAmount})`;
      this.isCouponSuccess = true;
    } else {
      this.couponMessage = 'Invalid coupon code. Try WELCOME50 or CLEAN20';
      this.isCouponSuccess = false;
    }
  }

  removeCoupon(): void {
    this.couponInput = '';
    this.appliedCoupon = null;
    this.discountAmount = 0;
    this.couponMessage = '';
  }

  private recalculateDiscount(): void {
    if (this.appliedCoupon === 'CLEAN20') {
      this.discountAmount = Math.round(this.subtotalPrice * 0.20);
    }
  }

  futureDateValidator(control: AbstractControl): ValidationErrors | null {
    if (!control.value) return null;
    const selected = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selected < today) {
      return { pastDate: true };
    }
    return null;
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.bookingForm.get(fieldName);
    if (!control) return false;
    return control.invalid && (control.touched || control.dirty || this.isSubmitted);
  }

  onSubmit(): void {
    this.isSubmitted = true;

    if (this.bookingForm.invalid || !this.selectedService) {
      this.bookingForm.markAllAsTouched();
      return;
    }

    const formVal = this.bookingForm.value;
    const bookingData: BookingData = {
      serviceId: this.selectedService.id,
      serviceName: this.selectedService.name,
      serviceCategory: this.selectedService.category,
      servicePrice: this.selectedService.price,
      serviceDuration: this.selectedService.duration,
      customerName: formVal.customerName,
      customerPhone: formVal.customerPhone,
      customerEmail: formVal.customerEmail,
      city: formVal.city,
      address: formVal.address,
      landmark: formVal.landmark,
      preferredDate: formVal.preferredDate,
      preferredTime: formVal.preferredTime,
      specialNotes: formVal.specialNotes,
      selectedAddons: this.selectedAddons.map(a => ({ name: a.name, price: a.price })),
      couponCode: this.appliedCoupon || undefined,
      discountAmount: this.discountAmount,
      totalPrice: this.totalPrice,
      isValid: true,
      paymentStatus: 'pending'
    };

    this.bookingService.saveBookingState(bookingData);
    this.router.navigate(['/payment']);
  }
}
