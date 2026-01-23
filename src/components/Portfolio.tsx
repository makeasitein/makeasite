import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Vythiri Dew Vista',
    category: 'Luxury Resort',
    description: 'Premium resort booking platform with immersive visuals and seamless experience',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNFRKLsBsYBwve98AtIp3i8YZArTdsykStHfoN5=s680-w680-h510-rw',
    color: '#D8A546',
    link: 'https://vythiridewvista.com/',
  },
  {
    title: 'Mount Vista',
    category: 'Hospitality & Tourism',
    description: 'Clean, nature-inspired website with elegant design and smooth navigation',
    image: 'https://mountvista.in/static/media/property/mount-vista-chundale-wayanad-resorts-thu50ajr8n.jpeg',
    color: '#0F7B5F',
    link: 'https://www.mountvista.in/',
  },
  {
    title: 'TravLocus',
    category: 'Travel & Tourism',
    description: 'Modern travel website with youthful design and excellent user experience',
    image: 'https://images.unsplash.com/photo-1721908919568-4003760b6c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=85&w=1600',
    color: '#1E64F0',
    link: 'https://travlocus.in/',
  },
];

export function Portfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-font text-slate-900 mb-4">Our Portfolio</h2>
          <p className="text-slate-600 text-lg">
            Beautiful websites we've created for businesses like yours.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ring-1 ring-[#1E62FF11] hover:ring-[#00E6FF44]"
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 }
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="bg-white text-slate-800 px-6 py-3 rounded-lg flex items-center gap-2"
                    initial={{ y: 20 }}
                    whileHover={{ y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              </div>
              <div className="p-6">
                <motion.div
                  className="inline-block px-3 py-1 rounded-full text-xs mb-3"
                  style={{ backgroundColor: `${project.color}20`, color: project.color }}
                  whileHover={{ scale: 1.1 }}
                >
                  {project.category}
                </motion.div>
                <h3 className="text-slate-900 mb-2 heading-font">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {project.description}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
