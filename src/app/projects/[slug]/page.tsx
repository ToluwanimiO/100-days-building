import { sampleProjects } from '@/lib/sample-data';
import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/showcase/ProjectDetail';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = sampleProjects.find(p => p.slug === slug);
  
  if (!project) {
    notFound();
  }
  
  const previousProject = sampleProjects.find(p => p.dayNumber === project.dayNumber - 1);
  const nextProject = sampleProjects.find(p => p.dayNumber === project.dayNumber + 1);
  
  return (
    <ProjectDetail 
      project={project} 
      previousProject={previousProject} 
      nextProject={nextProject} 
    />
  );
}