import { ServiceItem } from '../models/service.model';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'cleaning',
    name: 'Full Home Deep Cleaning',
    category: 'Cleaning',
    description: 'Complete home sanitization, kitchen degreasing, bathroom scrubbing, sofa vacuuming, and balcony washing by trained Indian professionals.',
    price: 1499,
    originalPrice: 1999,
    duration: '3 - 4 Hours',
    rating: 4.88,
    reviewCount: 1420,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop',
    inclusions: [
      'Kitchen degreasing, chimney exterior wipe, stove & countertop scrubbing',
      'Bathroom hard-water stain removal, floor scrubbing & toilet sanitization',
      'Living room & bedroom dusting, fan cleaning, cobweb removal',
      'Floor vacuuming, wet mopping & glass window cleaning'
    ],
    exclusions: [
      'Removal of heavy furniture without assistance',
      'Cleaning of interior cabinets/drawers with items inside'
    ],
    processSteps: [
      '1. Pre-inspection & requirement mapping with client',
      '2. Dry vacuuming of all surfaces, curtains & furniture',
      '3. High-pressure jet & chemical scrubbing of wet areas',
      '4. Final mopping, aroma spray & client approval check'
    ],
    addons: [
      { id: 'sofa_shampoo', name: '5-Seater Sofa Shampooing', price: 499 },
      { id: 'balcony_jet', name: 'Balcony High-Pressure Wash', price: 299 },
      { id: 'fridge_deep', name: 'Refrigerator Internal Scrubbing', price: 349 }
    ],
    iconSvg: 'M12 2l2.4 4.87L19.8 7.7l-3.9 3.8.92 5.37L12 14.34l-4.82 2.53.92-5.37-3.9-3.8 5.4-.83L12 2z'
  },
  {
    id: 'ac-repair',
    name: 'Split & Window AC Foam Servicing',
    category: 'AC Repair',
    description: 'Deep foam jet wash, filter cleaning, gas pressure check, drain pipe unclogging, and cooling optimization.',
    price: 599,
    originalPrice: 899,
    duration: '1 - 2 Hours',
    rating: 4.92,
    reviewCount: 2150,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=800&auto=format&fit=crop',
    inclusions: [
      'High-pressure jet wash with anti-bacterial foam spray',
      'Air filter, cooling coil, and blower wheel cleaning',
      'Refrigerant gas pressure reading & leak diagnostic',
      'Drainage tray flushing to stop water leakage'
    ],
    exclusions: [
      'Gas refilling charges (available as add-on if required)',
      'Major PCB repair or compressor replacement'
    ],
    processSteps: [
      '1. Initial temperature & airflow test',
      '2. Protective jacket placement around AC unit',
      '3. High-pressure foam spray jet wash',
      '4. Drying & final performance verification'
    ],
    addons: [
      { id: 'gas_topup', name: 'R32 / R410a Gas Top-Up', price: 899 },
      { id: 'ac_unmount', name: 'Unmounting & Relocation Service', price: 499 }
    ],
    iconSvg: 'M12 2v20M2 12h20M5 5l14 14M5 19L19 5'
  },
  {
    id: 'plumbing',
    name: 'Plumbing Repairs & Tap Fitting',
    category: 'Plumbing',
    description: 'Expert leak detection, faucet & shower installation, blockage removal, toilet repair, and RO water line setup.',
    price: 349,
    originalPrice: 499,
    duration: '1 Hour',
    rating: 4.82,
    reviewCount: 980,
    isPopular: false,
    imageUrl: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=800&auto=format&fit=crop',
    inclusions: [
      'Diagnostic & repair of leaking taps, valves & pipes',
      'Sink drain unclogging & trap cleaning',
      'Flush tank repair or flush valve replacement',
      'Water pressure audit & safety check'
    ],
    exclusions: [
      'Cost of new brass fittings, taps or replacement pipes',
      'Major wall breaking or underground line excavation'
    ],
    processSteps: [
      '1. Water main valve isolation & leak location identification',
      '2. Disassembly & washer/valve replacement',
      '3. Sealing with Teflon tape & high-strength adhesive',
      '4. Pressure testing & leak verification'
    ],
    addons: [
      { id: 'tap_replacement', name: 'New Designer Tap Installation', price: 199 },
      { id: 'ro_connection', name: 'RO Water Purifier Inlet Fitting', price: 249 }
    ],
    iconSvg: 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.7 4.7C.6 7.1 1 10.1 3 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.4-.4.4-1.1 0-1.4z'
  },
  {
    id: 'electrical',
    name: 'Modular Switchboard & Wiring Repairs',
    category: 'Electrical',
    description: 'Safe short-circuit diagnosis, MCB box repair, fan/light fixture installation, and inverter wiring.',
    price: 399,
    originalPrice: 599,
    duration: '1 - 2 Hours',
    rating: 4.85,
    reviewCount: 1120,
    isPopular: false,
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop',
    inclusions: [
      'Switchboard repair, socket replacement & internal rewiring',
      'Ceiling fan, chandelier & LED panel light installation',
      'MCB tripping diagnostic & load balance check',
      'Inverter battery connection & safety check'
    ],
    exclusions: [
      'Cost of new switches, sockets, wires or light fixtures',
      'Concealed wall channelling (quoted separately)'
    ],
    processSteps: [
      '1. Main circuit power off & voltage safety test',
      '2. Component inspection using multimeter',
      '3. Wire stripping, soldering & heavy-duty insulation',
      '4. Power restoration & load testing'
    ],
    addons: [
      { id: 'fan_install', name: 'Ceiling Fan Assembly & Mounting', price: 249 },
      { id: 'mcb_install', name: 'Single Pole MCB Unit Fitting', price: 199 }
    ],
    iconSvg: 'M7 2v11h3v9l7-12h-4l4-8H7z'
  },
  {
    id: 'painting',
    name: 'Home Wall Painting & Waterproofing',
    category: 'Painting',
    description: 'Accent wall painting, texture finish, wall putty application, dampness treatment, and touch-ups with royal sheen finish.',
    price: 2499,
    originalPrice: 3200,
    duration: '1 - 2 Days',
    rating: 4.90,
    reviewCount: 640,
    isPopular: true,
    imageUrl: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=800&auto=format&fit=crop',
    inclusions: [
      'Floor & furniture masking with protective plastic sheets',
      'Sanding, crack filling & double coat primer application',
      'Premium washable emulsion coat (Asian Paints / Berger)',
      'Post-painting cleanup & tape removal'
    ],
    exclusions: [
      'Scaffolding for exterior high-rise walls',
      'Civil plaster work'
    ],
    processSteps: [
      '1. Moisture meter check & wall surface inspection',
      '2. Masking tape & floor covering setup',
      '3. Putty sanding & dual-layer paint coating',
      '4. Inspection with client under high light'
    ],
    addons: [
      { id: 'waterproofing', name: 'Damp-Proof Waterproofing Coat', price: 899 },
      { id: 'stencil_art', name: 'Royal Wall Stencil Design', price: 699 }
    ],
    iconSvg: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
  },
  {
    id: 'pest-control',
    name: 'Herbal Kitchen & Home Pest Control',
    category: 'Pest Control',
    description: 'Odorless, pet-safe gel treatment for cockroaches, ants, termites, and bed bugs with 90-day warranty.',
    price: 899,
    originalPrice: 1299,
    duration: '1 Hour',
    rating: 4.87,
    reviewCount: 890,
    isPopular: false,
    imageUrl: 'https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=800&auto=format&fit=crop',
    inclusions: [
      'Odorless Bayer gel application inside kitchen cabinets',
      'Spray treatment for drain pipes & hiding spots',
      'Anti-termite spot treatment & ant barrier creation',
      'Complimentary 90-day re-service warranty card'
    ],
    exclusions: [
      'Fumigation requiring 24-hr vacancy',
      'Structural wood replacement'
    ],
    processSteps: [
      '1. Pest infestation mapping',
      '2. Targeted gel dot application inside hinges & cracks',
      '3. Safe herbal spray along floor perimeters',
      '4. Guidance on food storage & warranty issuance'
    ],
    addons: [
      { id: 'bedbug_spray', name: 'Bed Bug Thermal & Chemical Treatment', price: 599 },
      { id: 'mosquito_spray', name: 'Balcony & Garden Mosquito Spray', price: 399 }
    ],
    iconSvg: 'M12 3v18M3 12h18M5.3 5.3l13.4 13.4M5.3 18.7L18.7 5.3'
  }
];
