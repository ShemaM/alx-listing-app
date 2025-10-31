import { NextPage } from 'next';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { APP_CONFIG, UI_TEXT } from '../constants';

const Home: NextPage = () => {
  // Sample data for demonstration
  const sampleListing = {
    title: 'Cozy Apartment in Downtown',
    description: 'Beautiful apartment with amazing city views',
    image: '/assets/placeholder-property.jpg',
    price: 120,
    location: 'New York, NY',
    rating: 4.8
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-bold text-gray-900">
            {APP_CONFIG.APP_NAME}
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Welcome to {APP_CONFIG.APP_NAME}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {APP_CONFIG.DESCRIPTION} - Find your perfect stay anywhere in the world.
          </p>
        </div>

        {/* Demo Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-6">Featured Listing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <Card {...sampleListing} />
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Component Demo</h4>
              <div className="space-y-2">
                <Button variant="primary" size="large">
                  {UI_TEXT.BOOK_NOW}
                </Button>
                <Button variant="secondary" size="medium">
                  {UI_TEXT.VIEW_DETAILS}
                </Button>
                <Button variant="outline" size="small">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500">
            &copy; {new Date().getFullYear()} {APP_CONFIG.APP_NAME}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;