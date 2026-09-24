import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BookingService } from '../../services/booking.service';
import { SERVICES_DATA } from '../../data/services.data';
import { ServiceItem } from '../../models/service.model';
import { BookingData } from '../../models/booking.model';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;
  selectedService: ServiceItem | undefined;
  availableServices: ServiceItem[] = SERVICES_DATA;
  timeSlots: string[] = [
    '09:00 AM - 11:00 AM',
    '11:00 AM - 01:00 PM',
    '02:00 PM - 04:00 PM',
    '04:00 PM - 06:00 PM'
  ];

  minDate: string = new Date().toISOString().split('T')[0];
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const paramServiceId = params['serviceId'];
      if (paramServiceId) {
        this.bookingService.setSelectedServiceId(paramServiceId);
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
      address: ['', Validators.required],
      preferredDate: ['', [Validators.required, this.futureDateValidator]],
      preferredTime: ['', Validators.required],
      specialNotes: ['']
    });

    this.bookingForm.get('serviceId')?.valueChanges.subscribe((serviceId: string) => {
      this.onServiceChange(serviceId);
    });
  }

  onServiceChange(serviceId: string): void {
    this.bookingService.setSelectedServiceId(serviceId);
    this.selectedService = SERVICES_DATA.find(s => s.id === serviceId) || SERVICES_DATA[0];
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
      address: formVal.address,
      preferredDate: formVal.preferredDate,
      preferredTime: formVal.preferredTime,
      specialNotes: formVal.specialNotes,
      isValid: true,
      paymentStatus: 'pending'
    };

    this.bookingService.saveBookingState(bookingData);
    this.router.navigate(['/payment']);
  }
}
