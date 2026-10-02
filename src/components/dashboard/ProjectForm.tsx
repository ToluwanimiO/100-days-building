'use client';

import { useState, useCallback } from 'react';
import { Project, ProjectFormData, ProjectImage, ProjectLink, InstructionStep } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Upload, Image as ImageIcon, Link as LinkIcon, Trash2, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectFormProps {
  initialData?: Partial<Project>;
  onSubmit: (data: ProjectFormData) => void;
  onCancel: () => void;
  isSubmitting?: boolean;
}

export default function ProjectForm({ 
  initialData, 
  onSubmit, 
  onCancel,
  isSubmitting = false 
}: ProjectFormProps) {
  // Form state - use Partial<ProjectFormData> for initial state
  const [formData, setFormData] = useState<Partial<ProjectFormData>>({
    dayNumber: initialData?.dayNumber || 1,
    title: initialData?.title || '',
    date: initialData?.date || new Date().toISOString().split('T')[0],
    shortDescription: initialData?.shortDescription || '',
    problem: initialData?.problem || '',
    solution: initialData?.solution || '',
    features: initialData?.features || [],
    instructions: initialData?.instructions || [],
    technologies: initialData?.technologies || [],
    category: initialData?.category || '',
    featured: initialData?.featured || false,
    coverImage: initialData?.coverImage || '',
    images: initialData?.images || [],
    links: initialData?.links || [],
    challenges: initialData?.challenges || '',
    lessons: initialData?.lessons || '',
    buildNotes: initialData?.buildNotes || '',
    whoIsItFor: initialData?.whoIsItFor || '',
    inspiration: initialData?.inspiration || '',
  });

  const [activeSection, setActiveSection] = useState(0);
  const [newTech, setNewTech] = useState('');
  const [newFeature, setNewFeature] = useState('');
  const [newLink, setNewLink] = useState({ label: '', url: '', type: 'demo' as const });

  // Form sections
  const sections = [
    { title: 'Identity', icon: '📝' },
    { title: 'The Idea', icon: '💡' },
    { title: 'The Build', icon: '🔨' },
    { title: 'Media', icon: '🖼️' },
    { title: 'Links', icon: '🔗' },
    { title: 'How It Works', icon: '📖' },
  ];

  // Handlers
  const updateField = <K extends keyof ProjectFormData,>(field: K, value: ProjectFormData[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addTechnology = () => {
    if (newTech.trim() && !formData.technologies?.includes(newTech.trim())) {
      updateField('technologies', [...(formData.technologies || []), newTech.trim()]);
      setNewTech('');
    }
  };

  const removeTechnology = (tech: string) => {
    updateField('technologies', formData.technologies?.filter(t => t !== tech) || []);
  };

  const addFeature = () => {
    if (newFeature.trim()) {
      updateField('features', [...(formData.features || []), newFeature.trim()]);
      setNewFeature('');
    }
  };

  const removeFeature = (index: number) => {
    updateField('features', (formData.features || []).filter((_, i) => i !== index));
  };

  const addLink = () => {
    if (newLink.label && newLink.url) {
      updateField('links', [
        ...(formData.links || []),
        { ...newLink, id: Date.now().toString() }
      ]);
      setNewLink({ label: '', url: '', type: 'demo' });
    }
  };

  const removeLink = (id: string) => {
    updateField('links', formData.links?.filter(l => l.id !== id) || []);
  };

  const addInstruction = () => {
    updateField('instructions', [
      ...(formData.instructions || []),
      { id: Date.now().toString(), title: '', description: '' }
    ]);
  };

  const updateInstruction = (id: string, field: keyof InstructionStep, value: string) => {
    updateField(
      'instructions',
      (formData.instructions || []).map(inst => inst.id === id ? { ...inst, [field]: value } : inst)
    );
  };

  const removeInstruction = (id: string) => {
    updateField('instructions', (formData.instructions || []).filter(inst => inst.id !== id));
  };

  // Image upload handler
  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const url = URL.createObjectURL(file);
      const newImage: ProjectImage = {
        id: Date.now().toString() + Math.random(),
        url,
        alt: file.name,
        isCover: (formData.images?.length || 0) === 0,
      };
      updateField('images', [...(formData.images || []), newImage]);
      
      if (!formData.coverImage) {
        updateField('coverImage', url);
      }
    });
  }, [formData.images, formData.coverImage]);

  const removeImage = (id: string) => {
    const newImages = (formData.images || []).filter(img => img.id !== id);
    updateField('images', newImages);
    if (formData.coverImage === formData.images?.find(i => i.id === id)?.url) {
      updateField('coverImage', newImages[0]?.url || '');
    }
  };

  const setAsCover = (url: string) => {
    updateField('coverImage', url);
    updateField(
      'images',
      (formData.images || []).map(img => ({ ...img, isCover: img.url === url }))
    );
  };

  // Validation
  const isStepValid = (step: number) => {
    if (step === 0) {
      return formData.dayNumber && formData.title && formData.shortDescription && formData.coverImage;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData as ProjectFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
      {/* Section tabs */}
      <div className="flex overflow-x-auto gap-2 mb-8 pb-2">
        {sections.map((section, index) => (
          <button
            key={section.title}
            type="button"
            onClick={() => setActiveSection(index)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
              activeSection === index
                ? "bg-[#2d5a6e] text-white"
                : "bg-white text-neutral-600 hover:bg-neutral-100 border border-black/5"
            )}
          >
            <span>{section.icon}</span>
            <span className="hidden sm:inline">{section.title}</span>
          </button>
        ))}
      </div>

      {/* Form content */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-black/5 shadow-lg">
        <AnimatePresence mode="wait">
          {/* Section 1: Identity */}
          {activeSection === 0 && (
            <motion.div
              key="section-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-[#2d5a6e] mb-6">Project Identity</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-2">Day Number *</label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={formData.dayNumber}
                    onChange={(e) => updateField('dayNumber', parseInt(e.target.value) || 1)}
                    className="w-full px-4 py-2 bg-white border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a6e]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-2">Date *</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => updateField('date', e.target.value)}
                    className="w-full px-4 py-2 bg-white border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a6e]"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-neutral-700 mb-2">Project Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => updateField('title', e.target.value)}
                  placeholder="e.g., SaveIdeas, FocusFlow"
                  className="w-full px-4 py-2 bg-white border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a6e]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-neutral-700 mb-2">One-Line Description *</label>
                <input
                  type="text"
                  value={formData.shortDescription}
                  onChange={(e) => updateField('shortDescription', e.target.value)}
                  placeholder="A simple way to save ideas from social media..."
                  className="w-full px-4 py-2 bg-white border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d5a6e]"
                  required
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => updateField('featured', e.target.checked)}
                  className="w-4 h-4 rounded border-black/20"
                />
                <label htmlFor="featured" className="text-sm font-bold text-neutral-700">
                  Mark as featured project
                </label>
              </div>
            </motion.div>
          )}

          {/* More sections... */}
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-black/5">
          <button
            type="button"
            onClick={() => setActiveSection(Math.max(0, activeSection - 1))}
            disabled={activeSection === 0}
            className="px-6 py-2 text-neutral-600 hover:text-[#2d5a6e] disabled:opacity-50 disabled:cursor-not-allowed font-bold"
          >
            ← Previous
          </button>

          {activeSection < sections.length - 1 ? (
            <button
              type="button"
              onClick={() => setActiveSection(Math.min(sections.length - 1, activeSection + 1))}
              className="px-6 py-2 bg-[#2d5a6e] text-white rounded-xl font-bold hover:bg-[#254958] transition-all"
            >
              Next →
            </button>
          ) : (
            <div className="flex gap-3">
              <button
                type="button"
                onClick={onCancel}
                className="px-6 py-2 border border-black/10 rounded-xl hover:bg-neutral-50 font-bold"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-[#2d5a6e] text-white rounded-xl font-bold hover:bg-[#254958] disabled:opacity-50 transition-all"
              >
                {isSubmitting ? 'Saving...' : 'Save Project'}
              </button>
            </div>
          )}
        </div>
      </div>
    </form>
  );
}