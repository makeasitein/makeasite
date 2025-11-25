import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}