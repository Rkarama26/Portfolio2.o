import { Github, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  github,
  demo,
}: ProjectCardProps) => {
  return (
    <motion.div
      className="glass-effect rounded-2xl overflow-hidden cursor-pointer h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.05,
        rotate: 1,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1, rotate: 2, filter: 'brightness(1.1)' }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-card to-transparent opacity-60"></div>
      </div>

      {/* Project Content */}
      <motion.div
        className="p-6 flex-1 flex flex-col"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 text-sm flex-1">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((techItem, i) => (
            <Badge
              key={i}
              variant="secondary"
              className="bg-primary/20 text-primary border-primary/30 hover:scale-105 transition-transform duration-200"
            >
              {techItem}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-transform duration-200"
            asChild
          >
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-transform duration-200"
            asChild
          >
            <a href={demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
