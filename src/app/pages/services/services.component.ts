import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
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
export class ServicesComponent {
  services: ServiceItem[] = SERVICES_DATA;
  categories: string[] = ['All', 'Cleaning', 'Plumbing', 'Electrical', 'AC Repair'];
  
  selectedCategory: string = 'All';
  searchQuery: string = '';

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  resetFilters(): void {
    this.selectedCategory = 'All';
    this.searchQuery = '';
  }

  get filteredServices(): ServiceItem[] {
    return this.services.filter(service => {
      const matchesCategory = this.selectedCategory === 'All' || service.category === this.selectedCategory;
      const query = this.searchQuery.trim().toLowerCase();
      const matchesSearch = !query ||
        service.name.toLowerCase().includes(query) ||
        service.category.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }
}
