import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Footer from './components/Footer';
import Creations from './components/Creations';
import Catalog from './components/Catalog';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import { Cat } from 'lucide-react';

// Named export for LandingPage
export const LandingPage = () => (
  <>
      <Navbar />
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      <Hero />
      <Expertise />
      <Creations />
      <Footer />
    </div>
  </>
);

export const StoryPage = () => (
  <>
      <Navbar />
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      <AboutUs />
      <Footer />
    </div>
  </>
);

export const ContPage = () => (
  <>
      <Navbar />
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      <ContactUs />
      <Footer />
    </div>
  </>
);

export const StorePage = () => (
  <>
      <Navbar />
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
      <Catalog />
      <Footer />
    </div>
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/story" element={<StoryPage />} />
        <Route path="/Store" element={<StorePage />} />
        <Route path="/Contact" element={<ContPage />} />
      </Routes>
    </Router>
  );
}

export default App;