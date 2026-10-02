'use client';

import { sampleProjects } from '@/lib/sample-data';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import ProjectList from '@/components/dashboard/ProjectList';
import { Plus } from 'lucide-react';
import Link from 'next/link';

type Project = (typeof sampleProjects)[number];

export default function DashboardPage() {
  const handleEdit = (project: Project) => {
    console.log('Edit:', project.title);
  };

  const handleDelete = (project: Project) => {
    if (confirm(`Delete "${project.title}"?`)) {
      console.log('Delete:', project.title);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Your Builds</h1>
          <p className="text-muted-foreground">
            Manage and document your 100-day journey
          </p>
        </div>
        
        <Link
          href="/dashboard/new"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Today's Build
        </Link>
      </div>
      
      <ProjectList 
        projects={sampleProjects}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </DashboardLayout>
  );
}