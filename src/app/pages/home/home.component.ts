import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES_DATA } from '../../data/services.data';
import { ServiceItem } from '../../models/service.model';

export interface StepItem {
  step: number;
  title: string;
  description: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  iconSvg: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  services: ServiceItem[] = SERVICES_DATA;

  howItWorksSteps: StepItem[] = [
    {
      step: 1,
      title: 'Choose a Service',
      description: 'Browse our specialized home service categories and pick the service you need.'
    },
    {
      step: 2,
      title: 'Select Booking Details',
      description: 'Provide your preferred date, time, and service location details.'
    },
    {
      step: 3,
      title: 'Confirm Your Booking',
      description: 'Review your service summary and flat pricing before scheduling.'
    },
    {
      step: 4,
      title: 'Complete Payment Step',
      description: 'Pay seamlessly via our simulated QR code workflow upon confirmation.'
    }
  ];

  whyChooseUsFeatures: BenefitItem[] = [
    {
      title: 'Convenient At-Home Service',
      description: 'Professional service delivered right at your doorstep on your schedule.',
      iconSvg: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'
    },
    {
      title: 'Verified Professionals',
      description: 'Experienced home service professionals for quality service delivery.',
      iconSvg: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
    },
    {
      title: 'Clear Flat Pricing',
      description: 'Sample flat rates for straightforward project pricing.',
      iconSvg: 'M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z'
    },
    {
      title: 'Simple 4-Step Process',
      description: 'Seamless online workflow designed for quick and hassle-free scheduling.',
      iconSvg: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'
    }
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
