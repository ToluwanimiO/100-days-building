'use client';

import { Cpu, Layers, Sparkles, Code2, Database, Terminal, Flame, Globe } from 'lucide-react';
import { ExternalLink } from 'lucide-react';

export default function TechShowcase() {
  const technologies = [
    { name: 'Next.js 15', category: 'frontend', icon: Globe, count: '1 build' },
    { name: 'Tailwind CSS', category: 'frontend', icon: Layers, count: '1 build' },
    { name: 'CSS', category: 'frontend', icon: Layers, count: '3 builds' },
    { name: 'React Native', category: 'mobile', icon: Layers, count: '3 builds' },
    { name: 'Framer Motion', category: 'frontend', icon: Sparkles, count: '1 build' },
    { name: 'Google Script', category: 'ai', icon: Cpu, count: '1 build' },
    { name: 'TypeScript', category: 'tools', icon: Code2, count: '3 builds' }
  ];

  return (
    <section id="technologies" className="w-full max-w-7xl mx-auto mt-12 bg-[#f5f8f5] rounded-[2.5rem] sm:rounded-[3.5rem] border border-white/20 shadow-2xl p-6 sm:p-12 lg:p-16">
      
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-black/10 bg-white shadow-sm text-[11px] font-bold uppercase tracking-widest text-[#2d5a6e] mb-4">
          <Cpu className="w-3.5 h-3.5" />
          <span>Stack & Tooling</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-[#2d5a6e] tracking-tight mb-4">
          Technologies Explored
        </h2>
        <p className="text-neutral-600 text-sm sm:text-base font-medium">
          From modern frontend frameworks and mobile applications to automation tools.
        </p>
      </div>

      {/* Tech Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {technologies.map((tech, idx) => {
          const Icon = tech.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-black/5 shadow-[0_10px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_35px_rgba(0,0,0,0.06)] transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#eef5ee] group-hover:bg-[#cbe1eb] flex items-center justify-center transition-colors">
                  <Icon className="w-5 h-5 text-[#2d5a6e]" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-neutral-900">{tech.name}</h4>
                  <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">{tech.count}</p>
                </div>
              </div>

              <div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-[#2d5a6e] group-hover:text-white transition-colors">
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}