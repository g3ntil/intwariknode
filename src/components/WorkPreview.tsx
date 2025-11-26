import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Star, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WorkPreview() {
  const projects = [
    {
      title: 'E-commerce Revolution',
      category: 'Web Development',
      result: '+250% Sales',
      resultIcon: TrendingUp,
      image: 'https://images.unsplash.com/photo-1676792519027-7c42006d7b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzU5OTQwNjAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-purple-50'
    },
    {
      title: 'Brand Photography',
      category: 'Business Photography',
      result: '4.8★ Rating',
      resultIcon: Star,
      image: 'https://images.unsplash.com/photo-1425421669292-0c3da3b8f529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlb3BsZXxlbnwxfHx8fDE3NTk5MDY3OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-yellow-50'
    },
    {
      title: 'Social Media Growth',
      category: 'Social Media Management',
      result: '10K+ Followers',
      resultIcon: Users,
      image: 'https://images.unsplash.com/photo-1710993012000-f109972e3b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYXBwJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc1OTkxMzM0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'bg-blue-50'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-gray-500 mb-3 tracking-wide uppercase" style={{ fontWeight: 600 }}>
            Our Work
          </p>
          <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] leading-[1.1] tracking-tight mb-4" style={{ fontWeight: 700 }}>
            Recent Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results for real businesses
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer"
            >
              <div className={`${project.color} rounded-3xl overflow-hidden border border-black/5 hover:shadow-xl transition-all duration-300`}>
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wide text-gray-500 mb-2" style={{ fontWeight: 600 }}>
                    {project.category}
                  </p>
                  <h3 className="text-xl md:text-2xl mb-4" style={{ fontWeight: 700 }}>
                    {project.title}
                  </h3>

                  {/* Result Badge */}
                  <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                    <project.resultIcon className="w-4 h-4 text-green-600" />
                    <span className="text-sm" style={{ fontWeight: 600 }}>
                      {project.result}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/get-started">
            <motion.div
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-black/80 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontWeight: 600 }}
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}