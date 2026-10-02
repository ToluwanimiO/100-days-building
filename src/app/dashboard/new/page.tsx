'use client';

import { useRouter } from 'next/navigation';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import ProjectForm from '@/components/dashboard/ProjectForm';
import { ProjectFormData } from '@/types';

export default function NewProjectPage() {
  const router = useRouter();

  const handleSubmit = async (data: ProjectFormData) => {
    try {
      console.log('Saving project:', data);
      
      // TODO: Save to database
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      router.push('/dashboard');
    } catch (error) {
      console.error('Failed to save project:', error);
      alert('Failed to save project. Please try again.');
    }
  };

  const handleCancel = () => {
    router.push('/dashboard');
  };

  // Auto-suggest next day number
  const nextDayNumber = 24; // TODO: Calculate from existing projects

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Add New Build</h1>
        <p className="text-muted-foreground">
          Document what you built today. Suggested: Day {nextDayNumber}
        </p>
      </div>
      
      <ProjectForm
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        initialData={{
          dayNumber: nextDayNumber,
          date: new Date().toISOString().split('T')[0],
        }}
      />
    </DashboardLayout>
  );
}