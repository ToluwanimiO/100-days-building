'use client';

import { Project } from '@/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { Edit, Trash2, ExternalLink, Star } from 'lucide-react';

interface ProjectListProps {
  projects: Project[];
  onEdit?: (project: Project) => void;
  onDelete?: (project: Project) => void;
}

export default function ProjectList({ projects, onEdit, onDelete }: ProjectListProps) {
  const sortedProjects = [...projects].sort((a, b) => b.dayNumber - a.dayNumber);
  
  if (projects.length === 0) {
    return (
      <div className="text-center py-20 border border-dashed border-border rounded-lg">
        <p className="text-muted-foreground mb-4">No builds yet</p>
        <Link
          href="/dashboard/new"
          className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
        >
          Add your first build →
        </Link>
      </div>
    );
  }
  
  return (
    <div className="space-y-4">
      {/* Table header */}
      <div className="hidden md:grid grid-cols-12 gap-4 text-sm text-muted-foreground px-4 py-2">
        <div className="col-span-1">Day</div>
        <div className="col-span-4">Project</div>
        <div className="col-span-2">Date</div>
        <div className="col-span-3">Technologies</div>
        <div className="col-span-2 text-right">Actions</div>
      </div>
      
      {/* Project rows */}
      {sortedProjects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className="group grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
        >
          {/* Day number */}
          <div className="flex items-center gap-3 md:col-span-1">
            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
              {project.dayNumber}
            </div>
            {project.featured && (
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 hidden md:block" />
            )}
          </div>
          
          {/* Project info */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              {project.coverImage && (
                <div className="relative w-16 h-12 rounded overflow-hidden flex-shrink-0">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
              )}
              <div>
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-1">
                  {project.shortDescription}
                </p>
              </div>
            </div>
          </div>
          
          {/* Date */}
          <div className="text-sm text-muted-foreground md:col-span-2">
            {formatDate(project.date)}
          </div>
          
          {/* Technologies */}
          <div className="flex items-center gap-2 flex-wrap md:col-span-3">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs text-muted-foreground">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          
          {/* Actions */}
          <div className="flex items-center justify-end gap-2 md:col-span-2">
            <Link
              href={`/projects/${project.slug}`}
              target="_blank"
              className="p-2 hover:bg-muted rounded-md transition-colors"
              title="View"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
            <button
              onClick={() => onEdit?.(project)}
              className="p-2 hover:bg-muted rounded-md transition-colors"
              title="Edit"
            >
              <Edit className="w-4 h-4" />
            </button>
            <button
              onClick={() => onDelete?.(project)}
              className="p-2 hover:bg-destructive/10 text-destructive rounded-md transition-colors"
              title="Delete"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}