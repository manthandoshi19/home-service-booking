export interface ServiceAddon {
  id: string;
  name: string;
  price: number;
}

export interface ServiceItem {
  id: string;
  name: string;
  category: 'Cleaning' | 'Plumbing' | 'Electrical' | 'AC Repair' | 'Painting' | 'Pest Control' | 'Appliance Repair';
  description: string;
  price: number;
  originalPrice?: number;
  duration: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  isPopular?: boolean;
  inclusions: string[];
  exclusions?: string[];
  processSteps?: string[];
  addons?: ServiceAddon[];
  iconSvg: string;
}

