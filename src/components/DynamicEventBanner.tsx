import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface BannerConfig {
    enabled: boolean;
    id: string;
    imageUrl?: string;
    mobileImageUrl?: string;
    link?: string;
    altText?: string;
    backgroundColor?: string;
    textColor?: string;
    height?: string;
    mobileHeight?: string;
    content?: string;
}

// Default to local file, but can be changed to a raw GitHub URL
const CONFIG_URL = "/events/banner-config.json";

export function DynamicEventBanner() {
    const [config, setConfig] = useState<BannerConfig | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const fetchConfig = async () => {
            try {
                // Add timestamp to prevent caching
                const response = await fetch(`${CONFIG_URL}?t=${new Date().getTime()}`);
                if (!response.ok) return;

                const data: BannerConfig = await response.json();

                if (data.enabled) {
                    // Check if dismissed
                    const dismissedId = localStorage.getItem('eventBannerDismissedId');
                    if (dismissedId !== data.id) {
                        setConfig(data);
                        setIsVisible(true);
                    }
                }
            } catch (error) {
                console.error("Failed to load banner config", error);
            }
        };

        fetchConfig();
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        if (config?.id) {
            localStorage.setItem('eventBannerDismissedId', config.id);
        }
    };

    if (!config || !isVisible) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="relative w-full overflow-hidden"
                style={{ backgroundColor: config.backgroundColor || '#1E62FF' }}
            >
                {config.link ? (
                    <a href={config.link} className="block w-full h-full">
                        <BannerContent config={config} onClose={handleClose} />
                    </a>
                ) : (
                    <BannerContent config={config} onClose={handleClose} />
                )}
            </motion.div>
        </AnimatePresence>
    );
}

function BannerContent({ config, onClose }: { config: BannerConfig; onClose: (e: React.MouseEvent) => void }) {
    // If image is present, show full width image with responsive height
    if (config.imageUrl) {
        const desktopHeight = config.height || '80px';
        const mobileHeight = config.mobileHeight || desktopHeight;

        return (
            <div
                className="relative w-full"
                style={{
                    // @ts-ignore - Custom CSS variables
                    '--banner-h-desk': desktopHeight,
                    '--banner-h-mob': mobileHeight,
                }}
            >
                <style>{`
                    .banner-responsive-height {
                        height: var(--banner-h-mob);
                    }
                    @media (min-width: 768px) {
                        .banner-responsive-height {
                            height: var(--banner-h-desk);
                        }
                    }
                `}</style>


                <picture className="block w-full banner-responsive-height">
                    {/* Mobile Image */}
                    {config.mobileImageUrl && (
                        <source media="(max-width: 768px)" srcSet={config.mobileImageUrl} />
                    )}
                    {/* Desktop Image (default) */}
                    <img
                        src={config.imageUrl}
                        alt={config.altText || "Event"}
                        className="w-full h-full object-cover block"
                    />
                </picture>

                <button
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onClose(e);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/20 hover:bg-black/40 transition-colors backdrop-blur-sm z-10"
                    aria-label="Close banner"
                >
                    <X className="w-5 h-5 text-white drop-shadow-sm" />
                </button>
            </div>
        );
    }

    // Text-only fallback
    return (
        <div className="relative flex items-center justify-center min-h-[40px] px-8 py-2 text-center">
            <p
                className="text-sm md:text-base font-medium"
                style={{ color: config.textColor || '#ffffff' }}
            >
                {config.content}
            </p>

            <button
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onClose(e);
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-black/10 transition-colors"
                aria-label="Close banner"
            >
                <X className="w-4 h-4" style={{ color: config.textColor || '#ffffff' }} />
            </button>
        </div>
    );
}
