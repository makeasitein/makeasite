import { Header } from './components/Header';
import { Portfolio } from './components/Portfolio';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function PortfolioApp() {
    return (
        <div className="min-h-screen bg-[#F8F8F8]">
            <Header />
            <Portfolio />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
