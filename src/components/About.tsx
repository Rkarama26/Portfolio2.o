import { Code2, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
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

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="glass-effect rounded-2xl p-8 md:p-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
