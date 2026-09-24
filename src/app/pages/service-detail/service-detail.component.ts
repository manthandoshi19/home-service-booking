import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SERVICES_DATA } from '../../data/services.data';
import { ServiceItem } from '../../models/service.model';
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

  onBookService(): void {
    if (this.service) {
      this.bookingService.setSelectedServiceId(this.service.id);
      this.router.navigate(['/booking'], { queryParams: { serviceId: this.service.id } });
    }
  }
}
