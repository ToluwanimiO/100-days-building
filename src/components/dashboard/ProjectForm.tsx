import { useState } from 'react';
import { ProjectFormData } from '@/types';
import { cn } from '@/lib/utils';

interface ProjectFormProps {
  initialData?: Partial<ProjectFormData>;
  onSubmit: (data: ProjectFormData) => void;
  onCancel: () => void;
}

export default function ProjectForm({ 
  initialData, 
  onSubmit, 
  onCancel 
}: ProjectFormProps) {
  const [formData, setFormData] = useState<ProjectFormData>({
    dayNumber: initialData?.dayNumber || 1,
    title: initialData?.title || '',
    date: initialData?.date || new Date().toISOString().split('T')[0],
    shortDescription: initialData?.shortDescription || '',
    // ... other fields
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
      {/* Section 1: Identity */}
      <div className="bg-card border border-border rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Project Identity</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Day Number *</label>
            <input
              type="number"
              min="1"
              max="100"
              value={formData.dayNumber}
              onChange={(e) => setFormData({ ...formData, dayNumber: parseInt(e.target.value) || 1 })}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Date *</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium mb-2">Project Title *</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="e.g., SaveIdeas, FocusFlow"
            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium mb-2">One-Line Description *</label>
          <input
            type="text"
            value={formData.shortDescription}
            onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
            placeholder="A simple way to save ideas from social media..."
            className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        <div className="mt-6 flex items-center gap-3">
          <input
            type="checkbox"
            id="featured"
            checked={formData.featured || false}
            onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
            className="w-4 h-4 rounded border-border"
          />
          <label htmlFor="featured" className="text-sm font-medium">
            Mark as featured project
          </label>
        </div>
      </div>

      {/* More sections... */}
    </form>
  );
}