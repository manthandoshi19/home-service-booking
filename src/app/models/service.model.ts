export interface ServiceItem {
  id: string;
  name: string;
  category: 'Cleaning' | 'Plumbing' | 'Electrical' | 'AC Repair';
  description: string;
  price: number;
  duration: string;
  inclusions: string[];
  iconSvg: string;
}
