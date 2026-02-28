import { Header } from './Header';
// import { DynamicEventBanner } from './DynamicEventBanner';
import { Footer } from './Footer';
import { WhatsAppButton } from './WhatsAppButton';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export function Layout() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="min-h-screen bg-[#F8F8F8]">
            {/* <DynamicEventBanner /> */}
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
