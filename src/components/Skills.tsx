const Skills = () => {
  const skills = [
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'NextJs',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'Express',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    {
      name: 'PostgreSQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    },
    {
      name: 'Java',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    },
    {
      name: 'Spring-Boot',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    },
  ];

  const tools = [
    {
      name: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      name: 'VS Code',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    },
    {
      name: 'Docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    },
    {
      name: 'Postman',
      icon: 'https://www.svgrepo.com/show/354202/postman-icon.svg',
    },
  ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Skills & <span className="gradient-text">Technologies</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12"></div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-4 glass-effect rounded-xl hover:scale-110 transition-transform group"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-12 h-12 md:w-16 md:h-16 group-hover:drop-shadow-[0_0_15px_rgba(14,165,233,0.5)] transition-all"
                />
                <span className="text-sm font-medium text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Tools & Platforms
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 p-4 glass-effect rounded-xl hover:scale-110 transition-transform group"
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="w-12 h-12 md:w-16 md:h-16 group-hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all"
                />
                <span className="text-sm font-medium text-center">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
