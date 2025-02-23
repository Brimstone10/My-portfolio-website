
import { motion } from 'framer-motion';
import { ExternalLink, GitHub } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  problem: string;
  approach: string;
  tools: string[];
  outcome: string;
  image: string;
  liveLink?: string;
  githubLink?: string;
}

const ProjectCard = ({
  title,
  description,
  problem,
  approach,
  tools,
  outcome,
  image,
  liveLink,
  githubLink
}: ProjectCardProps) => {
  return (
    <motion.div
      className="bg-white/5 rounded-xl overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-purple-200">{description}</p>
        
        <div className="space-y-2">
          <div>
            <h4 className="font-semibold text-white">Problem:</h4>
            <p className="text-purple-200">{problem}</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Approach:</h4>
            <p className="text-purple-200">{approach}</p>
          </div>
          <div>
            <h4 className="font-semibold text-white">Tools:</h4>
            <div className="flex flex-wrap gap-2 mt-1">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-purple-500/20 text-purple-200 px-2 py-1 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white">Outcome:</h4>
            <p className="text-purple-200">{outcome}</p>
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-200 hover:text-white transition-colors"
            >
              <GitHub className="w-4 h-4" />
              View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
