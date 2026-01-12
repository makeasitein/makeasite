import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Vythiri Dew Vista',
    role: 'Luxury Resort',
    quote: 'Outstanding work on our resort website! The elegant design perfectly captures the essence of our property. We\'ve seen a significant increase in direct bookings since the launch. The team understood our vision and delivered beyond expectations.',
    image: 'https://a0.muscache.com/im/pictures/user/User/original/8669a38f-d8b8-4ead-8014-5cdb5d8f7ef7.jpeg?im_w=240',
    website: 'https://vythiridewvista.com',
  },
  {
    name: 'Mount Vista',
    role: 'Hospitality & Tourism',
    quote: 'The website they created for us is simply beautiful. Clean, modern design with smooth navigation that our guests love. The booking integration works flawlessly, and the mobile experience is exceptional. Highly recommend their services!',
    image: 'https://a0.muscache.com/im/pictures/user/User/original/8595f36a-3f96-41c0-a861-20fa1648792e.jpeg?im_w=240',
    website: 'https://www.mountvista.in',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Boutique Owner',
    quote: 'Professional, responsive, and creative! They transformed our online presence completely. Our customers find it so easy to browse and shop now. Sales have increased by 40% in just two months!',
    image: 'https://cdn-icons-png.flaticon.com/512/727/727362.png',
    website: '',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Tech Startup Founder',
    quote: 'Fast turnaround, modern design, and excellent SEO optimization. The site loads incredibly fast and looks amazing on all devices. Best investment we made for our online presence.',
    image: '	https://cdn-icons-png.flaticon.com/512/657/657052.png',
    website: '',
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-white to-[#F8FBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-font text-slate-900 mb-4">Testimonials</h2>
          <p className="text-slate-600 text-lg">Minimal cards with subtle 3D avatars and auto-scroll.</p>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i} 
                className="min-w-[280px] md:min-w-[360px] bg-white rounded-2xl p-6 shadow-lg ring-1 ring-[#1E62FF11]"
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {t.image ? (
                    <motion.img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-2xl object-cover shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    />
                  ) : (
                    <motion.div 
                      className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1E62FF] to-[#00E6FF] shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    />
                  )}
                  <div>
                    <div className="heading-font text-slate-900" style={{ fontSize: '16px' }}>{t.name}</div>
                    <div className="text-slate-600 text-sm">{t.role}</div>
                  </div>
                </div>
                <p className="text-slate-700">"{t.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

