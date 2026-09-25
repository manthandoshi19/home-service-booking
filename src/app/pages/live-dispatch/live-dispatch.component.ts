import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { BookingService } from '../../services/booking.service';

export interface TechnicianMatch {
  id: string;
  name: string;
  photoUrl: string;
  trade: string;
  experienceYears: number;
  completedJobs: number;
  rating: number;
  distanceKm: number;
  etaMins: number;
  policeVerified: boolean;
  specialization: string;
  acceptedStatus: 'reviewing' | 'accepted' | 'en_route';
  recentReview: string;
}

@Component({
  selector: 'app-live-dispatch',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './live-dispatch.component.html',
  styleUrl: './live-dispatch.component.css'
})
export class LiveDispatchComponent implements OnInit, OnDestroy {
  step: 1 | 2 | 3 | 4 = 1;

  // Form Fields
  issueCategory: string = 'Plumbing Leakage';
  problemDescription: string = '';
  urgency: 'immediate' | '2hours' | 'today' = 'immediate';
  customerLocation: string = 'Andheri West, Mumbai';
  customerPhone: string = '';

  // Radar Search Simulation State
  radarScanProgress: number = 0;
  private scanInterval: any;

  // Simulated Nearby Technicians
  nearbyTechnicians: TechnicianMatch[] = [
    {
      id: 'tech-1',
      name: 'Ramesh Kumar',
      photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      trade: 'Senior Master Plumber',
      experienceYears: 9,
      completedJobs: 1420,
      rating: 4.93,
      distanceKm: 1.4,
      etaMins: 12,
      policeVerified: true,
      specialization: 'High-Pressure Pipe Leaks & Tap Fitting',
      acceptedStatus: 'accepted',
      recentReview: 'Fixed major sink leak in 20 mins. Highly skilled & polite.'
    },
    {
      id: 'tech-2',
      name: 'Vikram Singh',
      photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
      trade: 'Certified HVAC & Plumbing Specialist',
      experienceYears: 7,
      completedJobs: 980,
      rating: 4.88,
      distanceKm: 2.8,
      etaMins: 18,
      policeVerified: true,
      specialization: 'Drainage Unclogging & Main Line Fitting',
      acceptedStatus: 'accepted',
      recentReview: 'Very quick arrival. Had all spare parts ready.'
    }
  ];

  selectedTechnician: TechnicianMatch | null = null;
  matchedOtp: string = '4829';

  constructor(
    private bookingService: BookingService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  startLiveScan(): void {
    if (!this.problemDescription.trim()) {
      this.problemDescription = 'Urgent issue requiring professional technician inspection.';
    }

    this.step = 2;
    this.radarScanProgress = 0;

    this.scanInterval = setInterval(() => {
      this.radarScanProgress += 20;
      if (this.radarScanProgress >= 100) {
        clearInterval(this.scanInterval);
        this.step = 3;
      }
    }, 600);
  }

  acceptTechnician(tech: TechnicianMatch): void {
    this.selectedTechnician = tech;
    this.matchedOtp = Math.floor(1000 + Math.random() * 9000).toString();
    this.step = 4;
  }

  confirmBookingWithMatchedTech(): void {
    if (!this.selectedTechnician) return;

    // Create active booking record with matched technician
    this.bookingService.saveBookingState({
      serviceId: 'plumbing',
      serviceName: `${this.issueCategory} (On-Demand Dispatch)`,
      serviceCategory: 'On-Demand',
      servicePrice: 499,
      serviceDuration: `${this.selectedTechnician.etaMins} mins ETA`,
      customerName: 'Valued Customer',
      customerPhone: this.customerPhone || '9876543210',
      customerEmail: 'customer@saterax.in',
      city: 'Mumbai',
      address: this.customerLocation,
      preferredDate: 'Today (Immediate Dispatch)',
      preferredTime: `Arrival in ~${this.selectedTechnician.etaMins} mins`,
      specialNotes: `Problem Description: ${this.problemDescription} | Matched Tech: ${this.selectedTechnician.name}`,
      totalPrice: 499,
      isValid: true,
      paymentStatus: 'pending'
    });

    this.router.navigate(['/payment']);
  }

  ngOnDestroy(): void {
    if (this.scanInterval) {
      clearInterval(this.scanInterval);
    }
  }
}
