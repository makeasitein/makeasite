import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Vythiri Dew Vista',
    category: 'Luxury Resort',
    description: 'Premium resort booking platform with immersive visuals and seamless experience',
    image: 'https://images.unsplash.com/photo-1722409195473-d322e99621e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBwb29sfGVufDF8fHx8MTc2NDA4ODk5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#D8A546',
    link: 'https://vythiridewvista.com/',
  },
  {
    title: 'Mount Vista',
    category: 'Hospitality & Tourism',
    description: 'Clean, nature-inspired website with elegant design and smooth navigation',
    image: 'https://images.unsplash.com/photo-1646145046136-3ed07e259887?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHJlc29ydCUyMG5hdHVyZXxlbnwxfHx8fDE3NjQwODM0NDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#0F7B5F',
    link: 'https://www.mountvista.in/',
  },
  {
    title: 'TravLocus',
    category: 'Travel & Tourism',
    description: 'Modern travel website with youthful design and excellent user experience',
    image: 'https://images.unsplash.com/photo-1721908919568-4003760b6c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbiUyMGJlYWNofGVufDF8fHx8MTc2NDA5MjkwOXww&ixlib=rb-4.1.0&q=80&w=1080',
    color: '#1E64F0',
    link: 'https://travlocus.in/',
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-slate-800 mb-4">
            Our Portfolio
          </h2>
          <p className="text-slate-600 text-lg">
            Beautiful websites we've created for businesses like yours.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white text-slate-800 px-6 py-3 rounded-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs mb-3"
                  style={{ backgroundColor: `${project.color}20`, color: project.color }}
                >
                  {project.category}
                </div>
                <h3 className="text-slate-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}