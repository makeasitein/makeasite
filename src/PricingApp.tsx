import { Header } from './components/Header';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function PricingApp() {
    return (
        <div className="min-h-screen bg-[#F8F8F8]">
            <Header />
            <Pricing />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
