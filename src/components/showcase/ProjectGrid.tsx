'use client';

import { useState } from 'react';
import { Project } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Code2, FolderGit2, ChevronRight } from 'lucide-react';

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const completedDays = projects.length;

  const categories = ['all', 'frontend', 'automation', 'mobile'];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => {
        // Check if project's category or technologies match the selected category
        const categoryMatch = project.category?.toLowerCase() === selectedCategory.toLowerCase();
        const techMatch = project.technologies.some(tech => 
          tech.toLowerCase().includes(selectedCategory.toLowerCase())
        );
        return categoryMatch || techMatch;
      });

  return (
    <section id="builds" className="w-full max-w-7xl mx-auto mt-12 bg-[#f5f8f5] rounded-[2.5rem] sm:rounded-[3.5rem] border border-white/20 shadow-2xl p-6 sm:p-12 lg:p-16">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-black/10 bg-white shadow-sm text-[11px] font-bold uppercase tracking-widest text-[#2d5a6e] mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Project Catalog</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#2d5a6e] tracking-tight">
            Featured Builds
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-[#2d5a6e] text-white shadow-md'
                  : 'bg-white hover:bg-neutral-100 text-neutral-600 border border-black/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.slice(0, 6).map((project, idx) => (
            <motion.div
              key={project.id || idx}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative bg-white rounded-3xl p-4 border border-black/5 shadow-[0_15px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Card Media Preview */}
                <div className="aspect-[16/10] bg-gradient-to-tr from-neutral-100 to-emerald-50 rounded-2xl overflow-hidden relative border border-black/5 mb-4">
                  {project.coverImage ? (
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-neutral-300">
                      <Code2 className="w-12 h-12 text-[#2d5a6e]/40" />
                    </div>
                  )}

                  <div className="absolute top-3 left-3 bg-[#2d5a6e]/90 backdrop-blur-md text-white text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase">
                    Day {String(project.dayNumber).padStart(2, '0')}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#254958] transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-neutral-500 line-clamp-2 leading-relaxed mb-6 font-medium">
                  {project.shortDescription || 'Micro-experiment and application crafted for the 100 days development cycle.'}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 2).map((t, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-wider bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="w-8 h-8 rounded-full bg-neutral-100 group-hover:bg-[#acd1e0] flex items-center justify-center transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4 text-neutral-800 group-hover:text-[#254958] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-neutral-500 text-sm font-medium mb-4">No projects found in this category</p>
          <button
            onClick={() => setSelectedCategory('all')}
            className="px-6 py-2 bg-white border border-black/10 rounded-full text-sm font-bold text-neutral-700 hover:bg-neutral-50 transition-all"
          >
            View All Projects
          </button>
        </div>
      )}
    </section>
  );
}