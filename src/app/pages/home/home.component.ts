import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SERVICES_DATA } from '../../data/services.data';
import { ServiceItem } from '../../models/service.model';

export interface StepItem {
  step: number;
  title: string;
  description: string;
}

export interface SafetyPillar {
  title: string;
  badge: string;
  description: string;
  details: string[];
  iconSvg: string;
}

export interface CompactReview {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  verifiedBadge: string;
  avatarUrl: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  services: ServiceItem[] = SERVICES_DATA;
  categories: string[] = ['All', 'Cleaning', 'AC Repair', 'Plumbing', 'Electrical', 'Painting', 'Pest Control'];
  selectedCategory: string = 'All';

  stats = [
    { label: 'Happy Indian Homes', value: '50,000+' },
    { label: 'Verified Experts', value: '4,800+' },
    { label: 'Average Rating', value: '4.9 ★' },
    { label: 'Express Arrival', value: '60 Mins' }
  ];

  safetyPillars: SafetyPillar[] = [
    {
      title: 'Offline Identity & Police Background Verification',
      badge: 'STRICT ONBOARDING',
      description: 'We do not just verify online documents. Every technician undergoes rigorous offline physical checks before stepping into your home.',
      details: [
        'Offline Aadhaar & PAN card identity authentication',
        'Physical address & permanent residence verification',
        'Police criminal record & court history verification',
        'In-person practical trade skills & safety etiquette training'
      ],
      iconSvg: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
    },
    {
      title: 'Doorstep Security & OTP Entry System',
      badge: 'SECURE ARRIVAL',
      description: 'Your safety is paramount. Every technician arrival is guarded by instant digital verification technology.',
      details: [
        '4-Digit secure OTP required before technician enters your home',
        'Mandatory Saterax branded uniform & RFID digital ID card',
        'Live GPS tracking of technician during transit',
        'Sanitized commercial equipment & protective footwear covers'
      ],
      iconSvg: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
      title: '₹10,000 Property Damage Guarantee',
      badge: 'COMPREHENSIVE COVER',
      description: 'Book with complete peace of mind. Every service booked on Saterax is backed by our zero-cost damage protection.',
      details: [
        'Automatic ₹10,000 property damage insurance included',
        '30-Day free re-service warranty on all completed jobs',
        'Dedicated 24/7 customer safety escalation line (1800-890-5000)'
      ],
      iconSvg: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
    }
  ];

  compactReviews: CompactReview[] = [
    {
      id: 'r1',
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      comment: 'Verified technician Suresh showed his official RFID ID badge & entered only after OTP check. Felt 100% safe at home!',
      verifiedBadge: 'Verified Address Service',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop'
    },
    {
      id: 'r2',
      name: 'Rahul Verma',
      location: 'Bengaluru',
      rating: 5,
      comment: 'Knowing their technicians undergo offline police verification gave me huge confidence. Excellent AC foam wash!',
      verifiedBadge: 'Verified Resident',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
    },
    {
      id: 'r3',
      name: 'Ananya Patel',
      location: 'Delhi NCR',
      rating: 5,
      comment: 'Clean uniform, sanitized tools, and transparent pricing. The ₹10,000 safety guarantee shows high professionalism.',
      verifiedBadge: 'Verified Booking',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
    }
  ];

  howItWorksSteps: StepItem[] = [
    {
      step: 1,
      title: 'Select Service & Addons',
      description: 'Choose from deep cleaning, AC repair, plumbing, electrical, or painting with upfront transparent INR prices.'
    },
    {
      step: 2,
      title: 'Pick Time Slot & Address',
      description: 'Choose instant express 60-min arrival or schedule any date & convenient time slot.'
    },
    {
      step: 3,
      title: 'Offline-Verified Pro Arrives',
      description: 'Police & Aadhaar verified technician with OTP security check arrives at your door.'
    },
    {
      step: 4,
      title: 'Post-Service Pay & Guarantee',
      description: 'Inspect the completed job, pay via UPI/Card/COD, and enjoy a 30-day service warranty.'
    }
  ];

  selectCategory(cat: string): void {
    this.selectedCategory = cat;
  }

  onImgError(event: Event): void {
    (event.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=800&auto=format&fit=crop';
  }

  get filteredServices(): ServiceItem[] {
    if (this.selectedCategory === 'All') {
      return this.services;
    }
    return this.services.filter(s => s.category === this.selectedCategory);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
