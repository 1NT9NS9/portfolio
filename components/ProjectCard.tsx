import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { Project } from '../types';
import TiltContainer from './TiltContainer';

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  return (
    <TiltContainer className={className} classNameContent="h-full">
      <div className="h-full relative group overflow-hidden bg-zinc-900 border border-white/5 rounded-3xl shadow-2xl transition-all duration-300 hover:border-white/10">
        <div className="flex flex-col md:flex-row h-full">
          {/* Image Area - Left side on desktop */}
          <div
            className="relative w-full md:w-2/5 h-48 md:h-auto shrink-0 overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className={`absolute inset-0 opacity-20 group-hover:opacity-10 transition-opacity ${project.color}`} />

            {/* Image with depth effect */}
            <div className="w-full h-full" style={{ transform: "translateZ(20px)" }}>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transform scale-110 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Action Buttons overlay */}
            <div className="absolute top-4 left-4 flex gap-2" style={{ transform: "translateZ(40px)" }}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md bg-black/40 text-white border border-white/10 shadow-lg`}>
                <span className={`w-2 h-2 rounded-full ${project.color.replace('bg-', 'bg-')}`}></span>
              </div>
            </div>
          </div>

          {/* Content Area - Right side */}
          <div className="p-6 md:p-8 flex flex-col justify-center flex-grow relative min-w-0" style={{ transform: "translateZ(30px)" }}>
            <div className="flex justify-between items-start mb-4 gap-4">
              <div className="min-w-0">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1 block truncate">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors truncate">
                  {project.title}
                </h3>
              </div>

              <div className="flex gap-2 shrink-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-colors bg-zinc-800/50 border border-white/5"
                    aria-label="GitHub Repository"
                  >
                    <Github size={18} />
                  </a>
                )}

                {project.githubUrl2 && (
                  <a
                    href={project.githubUrl2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-colors bg-zinc-800/50 border border-white/5"
                    aria-label="GitHub Repository 2"
                  >
                    <Github size={18} />
                  </a>
                )}

                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-colors bg-zinc-800/50 border border-white/5"
                    aria-label="View Project"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              {project.description}
            </p>

            <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-zinc-500">
              {project.tags.map((tag, index) => (
                <React.Fragment key={tag}>
                  <span className="hover:text-zinc-300 transition-colors whitespace-nowrap">{tag}</span>
                  {index < project.tags.length - 1 && (
                    <span className="w-1 h-1 rounded-full bg-zinc-700 shrink-0"></span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TiltContainer>
  );
};

export default ProjectCard;