
export interface Activity {
  id: string;
  title: string;
  description: string;
  category: 'BBQ' | 'Olijfolie' | 'Workshop';
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  bgColor?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Printer {
  id: string;
  name: string;
  type: string;
  locations: string[];
  description: string;
  imageUrl: string;
  features: string[];
}
