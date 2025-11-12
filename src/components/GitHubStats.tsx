import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface GitHubUser {
  repositories: { totalCount: number };
  contributionsCollection: {
    totalCommitContributions: number;
    totalPullRequestContributions: number;
    totalIssueContributions: number;
    totalRepositoryContributions: number;
    contributionCalendar: {
      weeks: {
        contributionDays: {
          contributionCount: number;
          date: string;
        }[];
      }[];
    };
  };
}

const GitHubStats = () => {
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState({
    totalContributions: 0,
  });

  useEffect(() => {
    const fetchGitHubData = async () => {
      const query = `
        {
          user(login: "Rkarama26") {
            contributionsCollection {
              totalCommitContributions
              totalPullRequestContributions
              totalIssueContributions
              totalRepositoryContributions
              contributionCalendar {
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
            repositories(first: 100, ownerAffiliations: OWNER) {
              totalCount
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
          const user = data.data.user;
          const totalContributions =
            user.contributionsCollection.totalCommitContributions +
            user.contributionsCollection.totalPullRequestContributions +
            user.contributionsCollection.totalIssueContributions +
            user.contributionsCollection.totalRepositoryContributions;

          setUserData(user);
          setStats({ totalContributions });
        }
      } catch {
        setError('Failed to fetch GitHub data');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <section id="github" className="section-padding bg-card/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse">Loading GitHub stats...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="github" className="section-padding bg-card/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-red-500">Error: {error}</div>
        </div>
      </section>
    );
  }

  if (!userData) return null;

  // Function to get color intensity based on contribution count using theme colors
  const getContributionColor = (count: number): string => {
    if (count === 0) return 'hsl(var(--muted))'; // Theme muted color for no contributions
    if (count <= 3) return 'hsl(var(--primary) / 0.3)'; // Light theme primary
    if (count <= 6) return 'hsl(var(--primary) / 0.5)'; // Medium theme primary
    if (count <= 9) return 'hsl(var(--primary) / 0.7)'; // Bright theme primary
    return 'hsl(var(--primary))'; // Full theme primary
  };

  // Get the last 52 weeks of contribution data
  const contributionWeeks =
    userData.contributionsCollection.contributionCalendar.weeks.slice(-52);

  return (
    <section id="github" className="section-padding bg-card/30">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          GitHub <span className="gradient-text">Stats</span>
        </motion.h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12"></div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
        >
          <motion.div
            className="glass-effect rounded-2xl overflow-hidden cursor-pointer"
            whileHover={{
              scale: 1.05,
              rotate: 1,
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            }}
          >
            <div className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {stats.totalContributions}
              </div>
              <div className="text-sm text-muted-foreground">
                Total Contributions
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass-effect rounded-2xl overflow-hidden cursor-pointer"
            whileHover={{
              scale: 1.05,
              rotate: 1,
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            }}
          >
            <div className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">
                {userData.repositories.totalCount}
              </div>
              <div className="text-sm text-muted-foreground">
                Public Repositories
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <motion.div
            className="glass-effect rounded-2xl overflow-hidden cursor-pointer"
            whileHover={{
              scale: 1.02,
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            }}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4 text-center">
                Contribution Activity
              </h3>
              <div className="flex flex-col items-center">
                <div className="flex gap-2 mb-4 text-sm text-muted-foreground">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div
                      className="w-3 h-3 rounded-sm border border-border/20"
                      style={{ backgroundColor: 'hsl(var(--muted))' }}
                    ></div>
                    <div
                      className="w-3 h-3 rounded-sm border border-border/20"
                      style={{ backgroundColor: 'hsl(var(--primary) / 0.3)' }}
                    ></div>
                    <div
                      className="w-3 h-3 rounded-sm border border-border/20"
                      style={{ backgroundColor: 'hsl(var(--primary) / 0.5)' }}
                    ></div>
                    <div
                      className="w-3 h-3 rounded-sm border border-border/20"
                      style={{ backgroundColor: 'hsl(var(--primary) / 0.7)' }}
                    ></div>
                    <div
                      className="w-3 h-3 rounded-sm border border-border/20"
                      style={{ backgroundColor: 'hsl(var(--primary))' }}
                    ></div>
                  </div>
                  <span>More</span>
                </div>
                <div className="flex gap-1 overflow-x-auto pb-4">
                  {contributionWeeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-1">
                      {week.contributionDays.map((day, dayIndex) => (
                        <motion.div
                          key={`${weekIndex}-${dayIndex}`}
                          className="w-3 h-3 rounded-sm border border-border/20"
                          style={{
                            backgroundColor: getContributionColor(
                              day.contributionCount
                            ),
                          }}
                          title={`${day.contributionCount} contributions on ${new Date(day.date).toLocaleDateString()}`}
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.1 }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
                <div className="text-xs text-muted-foreground mt-2">
                  {contributionWeeks.length * 7} days of activity
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GitHubStats;
