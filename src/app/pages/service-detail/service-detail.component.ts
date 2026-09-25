import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SERVICES_DATA } from '../../data/services.data';
import { ServiceItem, ServiceAddon } from '../../models/service.model';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.css'
})
export class ServiceDetailComponent implements OnInit {
  service: ServiceItem | undefined;
  selectedAddons: ServiceAddon[] = [];
  activeTab: 'overview' | 'inclusions' | 'process' | 'faqs' = 'overview';

  faqs = [
    {
      q: 'Are your technicians background-verified?',
      a: 'Yes, 100% of our service technicians undergo mandatory police background checks, identity verification, and formal skills training.'
    },
    {
      q: 'What if I am not satisfied with the service quality?',
      a: 'We provide a 30-day service warranty. If you face any issues, our team will revisit and re-service your home free of charge.'
    },
    {
      q: 'Do I need to supply any cleaning equipment or tools?',
      a: 'No, our professionals bring all necessary commercial-grade tools, eco-friendly cleaning agents, and protective gear.'
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.service = SERVICES_DATA.find(s => s.id === id);
      }
    });
  }

  isAddonSelected(addonId: string): boolean {
    return this.selectedAddons.some(a => a.id === addonId);
  }

  toggleAddon(addon: ServiceAddon): void {
    if (this.isAddonSelected(addon.id)) {
      this.selectedAddons = this.selectedAddons.filter(a => a.id !== addon.id);
    } else {
      this.selectedAddons.push(addon);
    }
  }

  get addonsTotalPrice(): number {
    return this.selectedAddons.reduce((sum, a) => sum + a.price, 0);
  }

  get finalEstimatedPrice(): number {
    return (this.service?.price || 0) + this.addonsTotalPrice;
  }

  onImgError(event: Event): void {
    (event.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=800&auto=format&fit=crop';
  }

  onBookService(): void {
    if (this.service) {
      this.bookingService.setSelectedServiceId(this.service.id, this.selectedAddons);
      this.router.navigate(['/booking'], { queryParams: { serviceId: this.service.id } });
    }
  }
}
