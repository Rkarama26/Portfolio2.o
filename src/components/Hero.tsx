import { Github, Linkedin, Mail, Download } from 'lucide-react';
import profileImg from '@/assets/profile.png';
import { Button } from './ui/button';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  const handleDownloadResume = () => {
    // Download the resume PDF directly
    const downloadLink = document.createElement('a');
    downloadLink.href =
      'https://drive.google.com/uc?export=download&id=1lwJkwDrLy97w6mCmCAUjPq8wE6BYbV20';
    downloadLink.download = 'Rohit_Vishwakarma_Resume.pdf';
    downloadLink.click();

    // Open the Google Drive view link in a new tab
    window.open(
      'https://drive.google.com/file/d/1J3Oje6sVKy18el0y36Wv9TZUjSSMoY70/view',
      '_blank'
    );
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>

      <motion.div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={itemVariants}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Rohit Vishwakarma</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Passionate about creating elegant solutions to complex problems.
              Specialized in building responsive web applications with modern
              technologies and delivering exceptional user experiences.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleDownloadResume}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href="#contact">Get In Touch</a>
                </Button>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <motion.a
                href="https://github.com/Rkarama26"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-effect hover:bg-primary transition-colors"
                aria-label="GitHub"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rohit026/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-effect hover:bg-primary transition-colors"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="mailto:rohit.karma026@gmail.com"
                className="p-3 rounded-full glass-effect hover:bg-primary transition-colors"
                aria-label="Email"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-30 animate-float"></div>
              <img
                src={profileImg}
                alt="Profile"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
