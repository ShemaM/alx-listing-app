export const APP_CONFIG = {
  APP_NAME: 'ALX Listing App',
  DESCRIPTION: 'Airbnb clone for property listings',
  API_BASE_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
};

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
