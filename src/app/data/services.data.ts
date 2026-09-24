import { ServiceItem } from '../models/service.model';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'cleaning',
    name: 'Home Deep Cleaning',
    category: 'Cleaning',
    description: 'Complete home sanitization, dusting, floor scrubbing, and deep kitchen & bathroom cleaning.',
    price: 79,
    duration: '3 - 4 Hours',
    inclusions: [
      'Deep kitchen & bathroom degreasing & scrubbing',
      'Floor vacuuming, mopping, and stain removal',
      'Dusting of all furniture, fixtures, and appliances',
      'Window pane cleaning and trash disposal'
    ],
    iconSvg: 'M12 2l2.4 4.87L19.8 7.7l-3.9 3.8.92 5.37L12 14.34l-4.82 2.53.92-5.37-3.9-3.8 5.4-.83L12 2z'
  },
  {
    id: 'plumbing',
    name: 'Plumbing Repairs & Fixes',
    category: 'Plumbing',
    description: 'Leak repair, pipe fitting, faucet replacement, drainage unclogging, and fixture installation.',
    price: 49,
    duration: '1 - 2 Hours',
    inclusions: [
      'Comprehensive leak detection and pipe sealing',
      'Faucet, showerhead, and valve replacement',
      'Drainage unclogging and trap cleaning',
      'Water pressure and line safety check'
    ],
    iconSvg: 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.7 4.7C.6 7.1 1 10.1 3 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.4-.4.4-1.1 0-1.4z'
  },
  {
    id: 'electrical',
    name: 'Electrical Wiring & Fixes',
    category: 'Electrical',
    description: 'Safety inspection, switchboard repair, appliance wiring, lighting installation, and short-circuit fixes.',
    price: 59,
    duration: '1 - 2 Hours',
    inclusions: [
      'Full electrical panel & circuit inspection',
      'Switchboard repair and socket replacements',
      'Light fixture and ceiling fan installation',
      'Short-circuit diagnosis and wiring safety check'
    ],
    iconSvg: 'M7 2v11h3v9l7-12h-4l4-8H7z'
  },
  {
    id: 'ac-repair',
    name: 'AC Servicing & Repair',
    category: 'AC Repair',
    description: 'Filter cleaning, refrigerant top-up, cooling inspection, coil washing, and compressor troubleshooting.',
    price: 69,
    duration: '2 - 3 Hours',
    inclusions: [
      'Air filter cleaning and antimicrobial treatment',
      'Evaporator & condenser coil jet washing',
      'Gas pressure check and refrigerant top-up',
      'Compressor health & cooling performance check'
    ],
    iconSvg: 'M12 2v20M2 12h20M5 5l14 14M5 19L19 5'
  }
];
