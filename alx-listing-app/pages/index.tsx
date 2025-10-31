@"
import { NextPage } from 'next';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Home: NextPage = () => {
  const sampleListings = [
    {
      title: 'Modern Apartment in Downtown',
      image: '/assets/placeholder.jpg',
      price: 120,
      location: 'New York, NY',
      description: 'Beautiful modern apartment with amazing city views.',
      rating: 4.8
    }
  ];

  return (
    <div className=\"min-h-screen bg-gray-50\">
      <header className=\"bg-white shadow-sm border-b\">
        <div className=\"max-w-7xl mx-auto px-4 py-4\">
          <h1 className=\"text-2xl font-bold text-gray-900\">ALX Listing App</h1>
        </div>
      </header>

      <main className=\"max-w-7xl mx-auto px-4 py-8\">
        <section className=\"mb-8\">
          <h2 className=\"text-2xl font-semibold mb-4\">Featured Listings</h2>
          <div className=\"grid grid-cols-1 md:grid-cols-2 gap-6\">
            {sampleListings.map((listing, index) => (
              <Card key={index} {...listing} />
            ))}
          </div>
        </section>

        <section>
          <h3 className=\"text-xl font-semibold mb-4\">UI Components</h3>
          <div className=\"flex gap-4\">
            <Button variant=\"primary\">Primary Button</Button>
            <Button variant=\"secondary\">Secondary Button</Button>
            <Button variant=\"outline\">Outline Button</Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
"@ | Out-File -FilePath "pages\index.tsx" -Encoding utf8