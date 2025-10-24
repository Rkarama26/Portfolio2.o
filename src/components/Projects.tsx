import { Github, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce solution with payment integration, user authentication, and admin dashboard. Built with modern web technologies.',
      image:
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Social Media Dashboard',
      description:
        'Analytics dashboard for social media metrics with beautiful data visualizations and real-time updates.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tech: ['React', 'TypeScript', 'Chart.js', 'REST API'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Weather Application',
      description:
        'Real-time weather application with location-based forecasts, interactive maps, and weather alerts.',
      image:
        'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
      tech: ['React', 'Weather API', 'Geolocation'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Portfolio Website',
      description:
        'Responsive portfolio website with smooth animations, dark mode support, and contact form integration.',
      image:
        'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-transform group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0  from-card to-transparent opacity-60"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-primary/20 text-primary border-primary/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
