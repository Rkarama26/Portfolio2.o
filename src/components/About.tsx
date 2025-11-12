import { Code2, Lightbulb, Rocket } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description:
        'Writing maintainable and scalable code following best practices',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solver',
      description: 'Analytical thinking to solve complex technical challenges',
    },
    {
      icon: Rocket,
      title: 'Fast Learner',
      description: 'Quick to adapt and learn new technologies and frameworks',
    },
  ];

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

  return (
    <section id="about" className="section-padding bg-background">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12"></div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-2xl p-6 cursor-pointer"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="glass-effect rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hi, I'm Rohit Vishwakarma, a passionate Full Stack Developer
            specializing in Java Spring Boot and React.js. I love building
            scalable web applications that combine robust backend logic with
            seamless user experiences. Over the past few months, I’ve developed
            full-stack projects including an e-commerce platform for robotics
            and electronics components, featuring JWT-based authentication,
            Spring Security, and React UI integration. I'm currently seeking
            opportunities where I can contribute my skills in Java, Spring Boot,
            React, and SQL, and grow as a professional developer in a
            collaborative environment.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
