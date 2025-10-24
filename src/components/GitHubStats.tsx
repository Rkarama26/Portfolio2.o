const GitHubStats = () => {

  const githubUsername = 'Rkarama26';

  return (
    <section className="section-padding bg-card/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          GitHub <span className="gradient-text">Statistics</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-primary mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* GitHub Stats Card */}
          <div className="glass-effect rounded-2xl p-4 flex items-center justify-center">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=1a1b27&title_color=0ea5e9&icon_color=8b5cf6&text_color=e2e8f0`}
              alt="GitHub Stats"
              className="w-full max-w-md"
            />
          </div>

          {/* Top Languages Card */}
          <div className="glass-effect rounded-2xl p-4 flex items-center justify-center">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=tokyonight&hide_border=true&bg_color=1a1b27&title_color=0ea5e9&text_color=e2e8f0`}
              alt="Top Languages"
              className="w-full max-w-md"
            />
          </div>
        </div>

        {/* GitHub Streak Stats */}
        <div className="glass-effect rounded-2xl p-4 flex items-center justify-center">
          <img
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=tokyonight&hide_border=true&background=1a1b27&ring=0ea5e9&fire=8b5cf6&currStreakLabel=e2e8f0`}
            alt="GitHub Streak"
            className="w-full max-w-2xl"
          />
        </div>

        {/* GitHub Contribution Calendar */}
        <div className="mt-8 glass-effect rounded-2xl p-4">
          <h3 className="text-2xl font-semibold mb-4 text-center">Contribution Activity</h3>
          <img
            src={`https://ghchart.rshah.org/0ea5e9/${githubUsername}`}
            alt="GitHub Contribution Calendar"
            className="w-full"
            style={{ filter: 'brightness(1.1)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;