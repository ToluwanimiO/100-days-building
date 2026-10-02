'use client';

import { Project } from '@/types';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { TrendingUp, CheckCircle2, Circle } from 'lucide-react';

interface ProgressTimelineProps {
  projects: Project[];
}

export default function ProgressTimeline({ projects }: ProgressTimelineProps) {
  const projectDays = new Set(projects.map(p => p.dayNumber));
  const totalDays = 100;
  const completedDays = projects.length;
  
  const allDays = Array.from({ length: totalDays }, (_, i) => i + 1);
  
  return (
    <section id="journey" className="w-full max-w-7xl mx-auto mt-12 bg-[#f5f8f5] rounded-[2.5rem] sm:rounded-[3.5rem] border border-white/20 shadow-2xl p-6 sm:p-12 lg:p-16">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-black/10 bg-white shadow-sm text-[11px] font-bold uppercase tracking-widest text-[#2d5a6e] mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Milestone Roadmap</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-[#2d5a6e] tracking-tight">
            The 100-Day Journey
          </h2>
        </div>

        <div className="bg-white border border-black/10 px-5 py-2.5 rounded-full text-xs font-bold text-neutral-700 shadow-sm flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#2d5a6e] animate-ping" />
          <span>Currently on Day {Math.max(...projectDays, 0)}</span>
        </div>
      </div>

      {/* Timeline Grid */}
      <div className="grid grid-cols-10 md:grid-cols-20 lg:grid-cols-25 gap-2 mb-12">
        {allDays.map((day, idx) => {
          const isCompleted = projectDays.has(day);
          const project = projects.find(p => p.dayNumber === day);
          
          return (
            <motion.div
              key={day}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: Math.min(day * 0.01, 0.5) }}
              whileHover={{ scale: 1.15, y: -2 }}
            >
              {isCompleted && project ? (
                <Link
                  href={`/projects/${project.slug}`}
                  className={cn(
                    "aspect-square flex items-center justify-center rounded-xl text-[10px] font-black transition-all border-2",
                    "bg-[#2d5a6e] text-white border-black/20 hover:bg-[#1a3a4a] hover:shadow-lg hover:-translate-y-0.5"
                  )}
                  title={project.title}
                >
                  {day}
                </Link>
              ) : (
                <div
                  className={cn(
                    "aspect-square flex items-center justify-center rounded-xl text-[10px] font-bold transition-all border-2",
                    "bg-white/60 text-neutral-400 border-black/5"
                  )}
                >
                  {day}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
      
      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-2xl p-5 border border-black/5 shadow-[0_10px_25px_rgba(0,0,0,0.03)]">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-4 h-4 text-[#2d5a6e]" />
            <p className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">Completed</p>
          </div>
          <p className="text-3xl font-black text-[#2d5a6e]">{completedDays}</p>
        </div>
        
        <div className="bg-white rounded-2xl p-5 border border-black/5 shadow-[0_10px_25px_rgba(0,0,0,0.03)]">
          <div className="flex items-center gap-2 mb-2">
            <Circle className="w-4 h-4 text-neutral-400" />
            <p className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">Remaining</p>
          </div>
          <p className="text-3xl font-black text-neutral-700">{100 - completedDays}</p>
        </div>
        
        <div className="bg-white rounded-2xl p-5 border border-black/5 shadow-[0_10px_25px_rgba(0,0,0,0.03)]">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-[#2d5a6e]" />
            <p className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">Progress</p>
          </div>
          <p className="text-3xl font-black text-[#2d5a6e]">{Math.round((completedDays / 100) * 100)}%</p>
        </div>
        
        <div className="bg-white rounded-2xl p-5 border border-black/5 shadow-[0_10px_25px_rgba(0,0,0,0.03)]">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-4 h-4 rounded-full bg-[#2d5a6e]" />
            <p className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">Current</p>
          </div>
          <p className="text-3xl font-black text-neutral-700">Day {Math.max(...projectDays, 0)}</p>
        </div>
      </div>
      
      {/* Legend */}
      <div className="flex items-center gap-6 text-sm font-bold">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#2d5a6e] rounded-xl border-2 border-black/20" />
          <span className="text-neutral-600">Completed builds</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-white/60 rounded-xl border-2 border-black/5" />
          <span className="text-neutral-400">Still building...</span>
        </div>
      </div>
    </section>
  );
}