import { sampleProjects } from '@/lib/sample-data';
import Hero from '@/components/showcase/Hero';
import ProjectGrid from '@/components/showcase/ProjectGrid';
import TechShowcase from '@/components/showcase/TechShowcase';
import ProgressTimeline from '@/components/showcase/ProgressTimeline';
import Footer from '@/components/shared/Footer';

export default function Home() {
  const featuredProjects = sampleProjects.filter(p => p.featured);
  const allProjects = sampleProjects;

  return (
    <main className="min-h-screen bg-[#2d5a6e] p-3">
      <Hero projects={allProjects} />
      <ProjectGrid projects={allProjects} />
      <TechShowcase />
      <ProgressTimeline projects={allProjects} />
      <Footer />
    </main>
  );
}