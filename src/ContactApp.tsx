import { Header } from './components/Header';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function ContactApp() {
    return (
        <div className="min-h-screen bg-[#F8F8F8]">
            <Header />
            <Contact />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
