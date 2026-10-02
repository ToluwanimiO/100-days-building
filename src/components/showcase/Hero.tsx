'use client';

import { Project } from '@/types';
import { motion } from 'framer-motion';
import { calculateCompletionPercentage } from '@/lib/utils';
import Link from 'next/link';
import { ArrowUpRight, Zap, Sparkles, Layers, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  projects: Project[];
}

export default function Hero({ projects }: HeroProps) {
  const completedDays = projects.length;
  const percentage = calculateCompletionPercentage(completedDays);
  const currentDay = projects.length > 0 ? Math.max(...projects.map((p) => p.dayNumber)) : 0;
  
  const floatingProjects = projects.slice(0, 4);

  return (
    <div className="bg-[#2d5a6e] text-neutral-900 min-h-screen selection:bg-emerald-300 selection:text-emerald-950">
      
      {/* Hero Canvas */}
      <section className="relative w-full max-w-7xl mx-auto bg-[#f8f4e8] rounded-[2.5rem] sm:rounded-[3.5rem] border border-white/20 shadow-2xl overflow-hidden px-6 py-8 sm:px-12 sm:py-12 lg:px-16 lg:py-16 min-h-[92vh] flex flex-col justify-between">
        
        {/* Glow backdrop behind canvas */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]  rounded-full blur-[120px] pointer-events-none" />

        {/* Top Navbar */}
        <nav className="flex items-center justify-center relative z-20">
          <Link href="/" className="flex items-center gap-2 group">
            {/* <span className="font-black text-2xl sm:text-3xl tracking-tight text-neutral-900 italic font-serif">
              100<span className="text-[#103b35] not-italic">Days.</span>
            </span> */}
          </Link>

          {/* Nav Pills */}
          <div className="hidden md:flex items-center bg-[#2d5a6e] text-neutral-200 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase gap-6 shadow-inner">
            <a href="#builds" className="hover:text-emerald-300 transition-colors">Builds</a>
            <a href="#technologies" className="hover:text-emerald-300 transition-colors">Tech</a>
            <a href="#journey" className="hover:text-emerald-300 transition-colors">Journey</a>
          </div>

          {/* <Link
            href="/dashboard"
            className="flex items-center gap-2 bg-[#102d29] hover:bg-[#18453f] text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all shadow-md group"
          >
            <span>Dashboard</span>
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </div>
          </Link> */}
        </nav>

        {/* Center Hero Box */}
        <div className="relative z-10 my-auto py-12 flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-white shadow-sm text-[11px] font-black uppercase tracking-widest text-neutral-600 mb-6"
          >
            <span>100 DAYS</span>
            <span className="text-neutral-300">•</span>
            <span className="text-emerald-700">100 BUILDS</span>
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#2d5a6e] tracking-tight leading-[1.02] mb-6"
          >
            <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-black tracking-tighter leading-[0.9] mb-8">
              <span className="block">100 DAYS.</span>
              <span className="block">100 BUILDS.</span>
              <span className="block text-[#2d5a6e]">LET'S SEE WHAT</span>
              <span className="block text-[#2d5a6e]">HAPPENS.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-neutral-600 max-w-xl mx-auto mb-8 font-medium leading-relaxed"
          >
<span className="text-lg md:text-xl text-black/70 max-w-2xl mb-12 leading-relaxed">
              A public experiment in building useful things, weird things, tiny things, 
              and ideas I've been meaning to try.
            </span>          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#builds"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#9bc8db] hover:bg-[#bce0f0] border border-emerald-900/15 text-emerald-950 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#2d5a6e] animate-pulse" />
              <span>Explore Builds</span>
              <div className="w-6 h-6 rounded-full bg-[#28576b] text-white flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>

            <Link
              href="/projects/automated-email-workflow"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-neutral-100 border border-black/10 text-neutral-800 rounded-full font-bold text-sm shadow-sm transition-all"
            >
              Start Day 01
            </Link>
          </motion.div>
        </div>

        {/* 4 Floating Cards (Desktop Hero Visual) */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -60, rotate: -12 }}
            animate={{ opacity: 1, x: 0, rotate: -8 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="absolute top-24 left-10 pointer-events-auto cursor-pointer hover:rotate-0 hover:scale-105 transition-all duration-300"
          >
            <div className="w-48 bg-white/95 rounded-2xl p-2.5 shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-black/5">
              <div className="aspect-square bg-gradient-to-tr from-emerald-100 to-teal-50 rounded-xl overflow-hidden mb-2 flex items-center justify-center">
                {floatingProjects[0]?.coverImage ? (
                  <img src={floatingProjects[0].coverImage} alt={floatingProjects[0].title} className="w-full h-full object-cover" />
                ) : (
                  <Zap className="w-10 h-10 text-emerald-700" />
                )}
              </div>
              <p className="text-center text-xs font-bold text-neutral-800 py-1">
                {floatingProjects[0]?.title || 'Built to Grow'}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60, rotate: 12 }}
            animate={{ opacity: 1, x: 0, rotate: 10 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="absolute top-28 right-12 pointer-events-auto cursor-pointer hover:rotate-0 hover:scale-105 transition-all duration-300"
          >
            <div className="w-52 bg-white/95 rounded-2xl p-2.5 shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-black/5">
              <div className="aspect-square bg-gradient-to-tr from-rose-100 to-amber-50 rounded-xl overflow-hidden mb-2 flex items-center justify-center">
                {floatingProjects[1]?.coverImage ? (
                  <img src={floatingProjects[1].coverImage} alt={floatingProjects[1].title} className="w-full h-full object-cover" />
                ) : (
                  <Sparkles className="w-10 h-10 text-rose-600" />
                )}
              </div>
              <p className="text-center text-xs font-bold text-neutral-800 py-1">
                {floatingProjects[1]?.title || 'Easy Launches'}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60, rotate: 6 }}
            animate={{ opacity: 1, y: 0, rotate: 4 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="absolute bottom-36 left-16 pointer-events-auto cursor-pointer hover:rotate-0 hover:scale-105 transition-all duration-300"
          >
            <div className="w-48 bg-white/95 rounded-2xl p-2.5 shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-black/5">
              <div className="aspect-square bg-gradient-to-tr from-sky-100 to-indigo-100 rounded-xl overflow-hidden mb-2 flex items-center justify-center">
                {floatingProjects[2]?.coverImage ? (
                  <img src={floatingProjects[2].coverImage} alt={floatingProjects[2].title} className="w-full h-full object-cover" />
                ) : (
                  <Layers className="w-10 h-10 text-indigo-600" />
                )}
              </div>
              <p className="text-center text-xs font-bold text-neutral-800 py-1">
                {floatingProjects[2]?.title || 'More Traction'}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: -6 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="absolute bottom-32 right-20 pointer-events-auto cursor-pointer hover:rotate-0 hover:scale-105 transition-all duration-300"
          >
            <div className="w-52 bg-white/95 rounded-2xl p-2.5 shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-black/5">
              <div className="aspect-square bg-gradient-to-tr from-purple-100 to-fuchsia-50 rounded-xl overflow-hidden mb-2 flex items-center justify-center">
                {floatingProjects[3]?.coverImage ? (
                  <img src={floatingProjects[3].coverImage} alt={floatingProjects[3].title} className="w-full h-full object-cover" />
                ) : (
                  <CheckCircle2 className="w-10 h-10 text-purple-600" />
                )}
              </div>
              <p className="text-center text-xs font-bold text-neutral-800 py-1">
                {floatingProjects[3]?.title || 'Instant Shipped'}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Hero Bottom Bar */}
        <div className="relative z-20 pt-6 mt-6 border-black/5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl py-3 px-4 border border-black/5 shadow-sm">
            <p className="text-2xl font-black text-neutral-900">{completedDays}</p>
            <p className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">Builds Done</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl py-3 px-4 border border-black/5 shadow-sm">
            <p className="text-2xl font-black text-neutral-900">Day {currentDay}</p>
            <p className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">Current Day</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl py-3 px-4 border border-black/5 shadow-sm">
            <p className="text-2xl font-black text-emerald-800">{percentage}%</p>
            <p className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">Completed</p>
          </div>
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl py-3 px-4 border border-black/5 shadow-sm">
            <p className="text-2xl font-black text-neutral-900">{100 - completedDays}</p>
            <p className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider">Days Remaining</p>
          </div>
        </div>
      </section>
    </div>
  );
}