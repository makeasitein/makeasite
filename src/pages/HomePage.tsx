import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Portfolio } from '../components/Portfolio';
import { Pricing } from '../components/Pricing';
import { Testimonials } from '../components/Testimonials';
import { Contact } from '../components/Contact';

export function HomePage() {
    return (
        <>
            <Hero />
            <Services />
            <WhyChooseUs />
            <Portfolio />
            <Pricing />
            <Testimonials />
            <Contact />
        </>
    );
}
