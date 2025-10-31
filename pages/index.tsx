import { NextPage } from 'next';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { APP_CONFIG, UI_TEXT } from '../constants';

const Home: NextPage = () => {
  const sampleListings = [
    {
      title: 'Modern Apartment in Downtown',
      image: '/assets/placeholder.jpg',
      price: 120,
      location: 'New York, NY',
      description: 'Beautiful modern apartment with amazing city views and all amenities included.',
      rating: 4.8
    },
    {
      title: 'Cozy Beach House',
      image: '/assets/placeholder.jpg',
      price: 95,
      location: 'Miami, FL',
      description: 'Relaxing beach house with private access to the shore and stunning ocean views.',
      rating: 4.9
    }
  ];

  return (
    <div className=\"min-h-screen bg-gray-50\">
      <header className=\"bg-white shadow-sm border-b\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4\">
          <div className=\"flex justify-between items-center\">
            <h1 className=\"text-2xl font-bold text-gray-900\">{APP_CONFIG.APP_NAME}</h1>
            <nav className=\"flex space-x-4\">
              <Button variant=\"outline\" size=\"small\">Login</Button>
              <Button variant=\"primary\" size=\"small\">Sign Up</Button>
            </nav>
          </div>
        </div>
      </header>

      <main className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8\">
        <section className=\"text-center mb-12\">
          <h2 className=\"text-4xl font-bold text-gray-900 mb-4\">Find Your Perfect Stay</h2>
          <p className=\"text-xl text-gray-600 max-w-2xl mx-auto mb-8\">{APP_CONFIG.DESCRIPTION}</p>
          <div className=\"flex justify-center gap-4\">
            <Button variant=\"primary\" size=\"large\">{UI_TEXT.BOOK_NOW}</Button>
            <Button variant=\"outline\" size=\"large\">{UI_TEXT.VIEW_DETAILS}</Button>
          </div>
        </section>

        <section>
          <h3 className=\"text-2xl font-semibold text-gray-900 mb-6\">Featured Listings</h3>
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\">
            {sampleListings.map((listing, index) => (
              <Card key={index} {...listing} />
            ))}
          </div>
        </section>

        <section className=\"mt-12\">
          <h3 className=\"text-2xl font-semibold text-gray-900 mb-6\">UI Components</h3>
          <div className=\"bg-white p-6 rounded-lg shadow-sm border\">
            <h4 className=\"text-lg font-medium mb-4\">Button Variants</h4>
            <div className=\"flex flex-wrap gap-4 mb-6\">
              <Button variant=\"primary\">Primary Button</Button>
              <Button variant=\"secondary\">Secondary Button</Button>
              <Button variant=\"outline\">Outline Button</Button>
            </div>
            <div className=\"flex flex-wrap gap-4\">
              <Button variant=\"primary\" size=\"small\">Small</Button>
              <Button variant=\"primary\" size=\"medium\">Medium</Button>
              <Button variant=\"primary\" size=\"large\">Large</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className=\"bg-white border-t mt-12\">
        <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8\">
          <p className=\"text-center text-gray-500\">&copy; {new Date().getFullYear()} {APP_CONFIG.APP_NAME}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
