import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface Repository {
  name: string;
  description: string;
  url: string;
  homepageUrl: string | null;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: { name: string } | null;
  repositoryTopics: { nodes: { topic: { name: string } }[] };
}

const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const ref = useRef(null);

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

  useEffect(() => {
    const fetchPinnedRepos = async () => {
      const query = `
        {
          user(login: "Rkarama26") {
            pinnedItems(first: 6, types: REPOSITORY) {
              nodes {
                ... on Repository {
                  name
                  description
                  url
                  homepageUrl
                  stargazerCount
                  forkCount
                  primaryLanguage {
                    name
                  }
                  repositoryTopics(first: 5) {
                    nodes {
                      topic {
                        name
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `;

      try {
        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN || ''}`,
          },
          body: JSON.stringify({ query }),
        });

        const data = await response.json();

        if (data.errors) {
          setError(data.errors[0].message);
        } else {
          setRepos(data.data.user.pinnedItems.nodes);
        }
      } catch {
        setError('Failed to fetch pinned repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchPinnedRepos();
  }, []);

  if (loading) {
    return (
      <section id="projects" className="section-padding bg-card/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse">Loading projects...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="section-padding bg-card/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-red-500">Error: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section-padding bg-card/30">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12"></div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {repos.map((repo) => {
            const tech = [
              repo.primaryLanguage?.name || 'Unknown',
              ...repo.repositoryTopics.nodes
                .map((t) => t.topic.name)
                .slice(0, 3),
            ];

            return (
              <motion.div key={repo.name} variants={itemVariants}>
                <ProjectCard
                  title={repo.name}
                  description={repo.description || 'No description available'}
                  image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop" // Default image
                  tech={tech}
                  github={repo.url}
                  demo={repo.homepageUrl || repo.url}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
