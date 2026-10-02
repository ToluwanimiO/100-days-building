'use client';

import { Project } from '@/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { ArrowLeft, ArrowRight, ExternalLink, Link as LinkIcon, Share2 } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  previousProject?: Project;
  nextProject?: Project;
}

export default function ProjectDetail({ project, previousProject, nextProject }: ProjectDetailProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${project.title} - Day ${project.dayNumber}`,
          text: project.shortDescription,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <article className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative">
        {/* Cover image */}
        {project.coverImage && (
          <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          </div>
        )}
        
        {/* Navigation */}
        <nav className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors backdrop-blur-sm px-4 py-2 rounded-lg bg-black/20"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all builds
          </Link>
          
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors"
          >
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </nav>
        
        {/* Project info overlay */}
        <div className="container mx-auto px-6 -mt-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium mb-4">
              DAY {project.dayNumber}
            </span>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              {project.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {project.shortDescription}
            </p>
            
            <div className="flex items-center gap-6 flex-wrap">
              <span className="text-sm text-muted-foreground">
                {formatDate(project.date)}
              </span>
              
              <div className="flex items-center gap-2 flex-wrap">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-background/80 backdrop-blur-sm border border-border rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {project.links.length > 0 && (
              <div className="flex items-center gap-4 mt-8">
                {project.links.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    {link.type === 'github' ? <LinkIcon className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </header>
      
      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Why I Built This */}
          {project.problem && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4">Why I Built This</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.problem}
              </p>
            </motion.section>
          )}
          
          {/* What I Built */}
          {project.solution && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-4">What I Built</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.solution}
              </p>
              
              {project.features.length > 0 && (
                <div className="mt-8 grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.section>
          )}
          
          {/* How To Use It */}
          {project.instructions.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6">How To Use It</h2>
              <div className="space-y-6">
                {project.instructions.map((step, index) => (
                  <div key={step.id} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}
          
          {/* Behind The Build */}
          {(project.challenges || project.lessons || project.buildNotes) && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6">Behind The Build</h2>
              
              {project.buildNotes && (
                <div className="mb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.buildNotes}
                  </p>
                </div>
              )}
              
              {project.challenges && (
                <div className="mb-6">
                  <h3 className="font-semibold mb-2">Challenges</h3>
                  <p className="text-muted-foreground">{project.challenges}</p>
                </div>
              )}
              
              {project.lessons && (
                <div className="p-6 bg-accent/50 rounded-lg">
                  <h3 className="font-semibold mb-2">What I Learned</h3>
                  <p className="text-muted-foreground italic">&quot;{project.lessons}&quot;</p>
                </div>
              )}
            </motion.section>
          )}
          
          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-between pt-8 border-t border-border"
          >
            {previousProject ? (
              <Link
                href={`/projects/${previousProject.slug}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <div className="text-left">
                  <p className="text-xs uppercase tracking-widest mb-1">Previous Build</p>
                  <p className="font-medium">Day {previousProject.dayNumber}: {previousProject.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="text-right">
                  <p className="text-xs uppercase tracking-widest mb-1">Next Build</p>
                  <p className="font-medium">Day {nextProject.dayNumber}: {nextProject.title}</p>
                </div>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <div />
            )}
          </motion.nav>
        </div>
      </div>
    </article>
  );
}