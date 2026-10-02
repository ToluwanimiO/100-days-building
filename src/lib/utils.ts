import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function calculateProgressStats(projects: { dayNumber: number; date: string }[]) {
  const totalDays = 100;
  const completedDays = projects.length;

  // Calculate streaks
  const sortedProjects = [...projects].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  let currentStreak = 0;
  let longestStreak = 0;
  let tempStreak = 0;

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  for (let i = 0; i < sortedProjects.length; i++) {
    const projectDate = new Date(sortedProjects[i].date);
    const projectDay = new Date(projectDate.getFullYear(), projectDate.getMonth(), projectDate.getDate());

    if (i === 0) {
      const diffDays = Math.floor((today.getTime() - projectDay.getTime()) / (1000 * 60 * 60 * 24));
      if (diffDays <= 1) currentStreak = 1;
    }

    if (i > 0) {
      const prevDate = new Date(sortedProjects[i - 1].date);
      const prevDay = new Date(prevDate.getFullYear(), prevDate.getMonth(), prevDate.getDate());
      const diffDays = Math.floor((projectDay.getTime() - prevDay.getTime()) / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        tempStreak++;
        if (tempStreak > longestStreak) longestStreak = tempStreak;
      } else {
        tempStreak = 1;
      }
    } else {
      tempStreak = 1;
    }
  }

  // Aggregate technologies
  const techMap = new Map<string, number>();
  projects.forEach(project => {
    // This would need full project data
  });

  return {
    totalDays,
    completedDays,
    currentStreak,
    longestStreak,
    technologiesUsed: {} as Record<string, number>,
    featuredCount: 0,
  };
}

export function getDaysRemaining(currentDay: number): number {
  return Math.max(0, 100 - currentDay);
}

export function getDayLabel(dayNumber: number): string {
  return `Day ${dayNumber}`;
}

export function calculateCompletionPercentage(completedDays: number): number {
  return Math.round((completedDays / 100) * 100);
}