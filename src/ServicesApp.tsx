import { Header } from './components/Header';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function ServicesApp() {
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Header />
      <Services />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
