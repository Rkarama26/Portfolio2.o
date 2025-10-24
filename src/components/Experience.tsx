import { Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const experiences = [
  {
    company: 'Innobimb infotech Pvt Ltd',
    position: 'Software Engineer Intern',
    duration: 'Sept 2024 - Dec 2024',
    location: 'Bhopal, India',
    description: [
      'Led development of core features using React and TypeScript',
      'Collaborated with cross-functional teams to deliver high-quality solutions',
      'Mentored junior developers and conducted code reviews',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          My professional journey and work experience
        </p>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {exp.position}
                    </h3>
                    <p className="text-xl text-primary font-semibold">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
