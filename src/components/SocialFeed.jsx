import { motion } from "framer-motion";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";
import { useEffect, useState } from "react";

const SocialFeed = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch GitHub Repos
  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/dhruvmendiratta2005/repos?sort=updated&direction=desc&per_page=3"
        );
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();
        setRepos(data);
      } catch (err) {
        console.error("Failed to fetch repos:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  return (
    <section id="github-feed" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 gradient-text"
        >
          My Latest Code
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center mb-8">
            <FaGithub className="text-4xl text-secondary mr-3" />
            <h3 className="text-2xl font-bold">Recent GitHub Repositories</h3>
          </div>

          {error ? (
            <div className="text-center p-6 bg-gray-800 rounded-lg">
              <p className="text-red-400">Error loading repositories: {error}</p>
              <p className="text-gray-300 mt-2">
                You can view my GitHub profile directly at{" "}
                <a 
                  href="https://github.com/dhruvmendiratta2005" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline"
                >
                  github.com/dhruvmendiratta2005
                </a>
              </p>
            </div>
          ) : loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-40 bg-gray-800 rounded-xl animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {repos.map((repo) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="block p-6 bg-gray-800 rounded-xl border border-secondary/20 hover:border-secondary/50 transition-all"
                >
                  <h4 className="font-bold text-white truncate">{repo.name}</h4>
                  <p className="text-gray-300 text-sm mt-2 h-12 overflow-hidden">
                    {repo.description || "No description available"}
                  </p>
                  <div className="flex items-center mt-4 text-sm text-gray-400">
                    <span className="flex items-center mr-4">
                      <FaStar className="mr-1 text-yellow-400" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center">
                      <FaCodeBranch className="mr-1 text-blue-400" />
                      {repo.forks_count}
                    </span>
                  </div>
                  <div className="mt-3">
                    <span className="inline-block px-2 py-1 bg-gray-700 text-xs rounded-full">
                      {repo.language || "Various"}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/dhruvmendiratta2005?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all"
          >
            <FaGithub className="mr-2" />
            View All Repositories
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialFeed;