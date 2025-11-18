// Filter categories for the pills
export const FILTER_CATEGORIES = [
  "Top Villa",
  "Self Checkin", 
  "Luxury Villa",
  "Mountain View",
  "Beachfront",
  "City View",
  "Pool",
  "Free Parking",
  "Pet Friendly"
];

// If you have a hero/background image, import it here. Example:
export const HERO_BACKGROUND = "/images/hero.jpg"; // adjust path to your asset

export const UI_TEXT = {
  BOOK_NOW: 'Book Now',
  VIEW_DETAILS: 'View Details',
  SEARCH: 'Search',
  LOADING: 'Loading...',
  NO_LISTINGS: 'No listings found',
};

export const ROUTES = {
  HOME: '/',
  LISTINGS: '/listings',
  ABOUT: '/about',
  CONTACT: '/contact',
};

// Existing sample data; ensure type compatibility
export const PROPERTYLISTINGSAMPLE = [
  {
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400",
    discount: ""
  },
  {
    name: "Mountain Escape Chalet",
    address: { state: "Aspen", city: "Colorado", country: "USA" },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400",
    discount: "30"
  },
  {
    name: "Cozy Desert Retreat",
    address: { state: "Palm Springs", city: "California", country: "USA" },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: { bed: "2", shower: "1", occupants: "2-3" },
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=400",
    discount: ""
  },
  {
    name: "City Lights Penthouse",
    address: { state: "New York", city: "New York", country: "USA" },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: { bed: "2", shower: "2", occupants: "2-4" },
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400",
    discount: "15"
  },
  {
    name: "Riverside Cabin",
    address: { state: "Queenstown", city: "Otago", country: "New Zealand" },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: { bed: "3", shower: "2", occupants: "4-6" },
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400",
    discount: "20"
  },
  {
    name: "Modern Beachfront Villa",
    address: { state: "Sidemen", city: "Bali", country: "Indonesia" },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: { bed: "5", shower: "4", occupants: "8-10" },
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400",
    discount: ""
  }
];