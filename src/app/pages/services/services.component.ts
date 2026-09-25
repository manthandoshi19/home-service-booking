import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SERVICES_DATA } from '../../data/services.data';
import { ServiceItem } from '../../models/service.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  services: ServiceItem[] = SERVICES_DATA;
  categories: string[] = ['All', 'Cleaning', 'AC Repair', 'Plumbing', 'Electrical', 'Painting', 'Pest Control'];
  
  selectedCategory: string = 'All';
  searchQuery: string = '';
  sortBy: string = 'recommended';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['category'] && this.categories.includes(params['category'])) {
        this.selectedCategory = params['category'];
      }
    });
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  resetFilters(): void {
    this.selectedCategory = 'All';
    this.searchQuery = '';
    this.sortBy = 'recommended';
  }

  onImgError(event: Event): void {
    (event.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=800&auto=format&fit=crop';
  }

  get filteredServices(): ServiceItem[] {
    let result = this.services.filter(service => {
      const matchesCategory = this.selectedCategory === 'All' || service.category === this.selectedCategory;
      const query = this.searchQuery.trim().toLowerCase();
      const matchesSearch = !query ||
        service.name.toLowerCase().includes(query) ||
        service.category.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    if (this.sortBy === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (this.sortBy === 'rating') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }
}
