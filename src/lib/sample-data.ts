import { Project } from '@/types';

export const sampleProjects: Project[] = [
  {
    id: '4',
    dayNumber: 4,
    title: '100 Days of Building Log',
    slug: '100-days-of-building-log',
    date: '2026-10-02',
    shortDescription:
      'A personal build log for documenting what I create, learn, and ship throughout 100 days of building.',
    problem:
      'When you build consistently, it is easy to forget what you made, why you made it, and how much progress you have actually made.',
    solution:
      'A simple public build log where I can document each day’s project, share what it does, explain how to use it, and keep links, images, and build notes in one place.',
    features: [
      'Daily build entries',
      'Project documentation',
      'Demo and GitHub links',
      'Build screenshots',
      'Instructions',
      'Progress tracking',
    ],
    instructions: [
      {
        id: '1',
        title: 'Browse the builds',
        description:
          'Explore the projects I build throughout the 100-day challenge.',
      },
      {
        id: '2',
        title: 'Open a project',
        description:
          'Read what I built, why I built it, how it works, and how to use it.',
      },
      {
        id: '3',
        title: 'Follow the journey',
        description:
          'Use the day numbers and build history to follow my progress from Day 1 to Day 100.',
      },
    ],
    technologies: ['React', 'TypeScript'],
    category: 'Frontend',
    featured: true,
    coverImage:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop',
    images: [
      {
        id: '1',
        url:
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop',
        alt: '100 Days of Building Log',
        isCover: true,
      },
    ],
    links: [],
    challenges:
      'Designing a simple system that makes documenting each day quick enough that it does not become another project on its own.',
    lessons:
      'Building in public is not just about showing the final product. The process, decisions, experiments, and small wins are part of the story.',
    buildNotes:
      'I wanted a place where every day of this challenge could become a small, documented artifact rather than disappearing into my camera roll, GitHub, or social media posts.',
    whoIsItFor:
      'Anyone following my 100-day building journey or interested in the things I create.',
    inspiration:
      'The desire to make my building journey visible, organized, and easy to revisit.',
    createdAt: '2026-10-02T09:00:00Z',
    updatedAt: '2026-10-02T18:00:00Z',
    publishedAt: '2026-10-02T18:00:00Z',
  },

  {
    id: '3',
    dayNumber: 3,
    title: 'SaveIdeas',
    slug: 'saveideas',
    date: '2026-10-01',
    shortDescription:
      'A simple way to save interesting ideas from social media instead of letting them disappear into the scroll.',
    problem:
      'I constantly come across useful ideas on social media, but saving them usually means bookmarking posts, taking screenshots, or telling myself I will come back later.',
    solution:
      'A small app for capturing ideas from social media so they can be collected and revisited instead of getting lost in the feed.',
    features: [
      'Share posts directly to the app',
      'Save ideas for later',
      'Central place for saved ideas',
    ],
    instructions: [
      {
        id: '1',
        title: 'Find something interesting',
        description:
          'Come across a post, idea, or piece of information you want to remember.',
      },
      {
        id: '2',
        title: 'Share it',
        description:
          'Use your device sharing options to send the post directly to SaveIdeas.',
      },
      {
        id: '3',
        title: 'Come back to it',
        description:
          'Open SaveIdeas later when you are ready to revisit the idea.',
      },
    ],
    technologies: ['React Native', 'TypeScript ', 'Expo', 'EAS CLI', 'Android Studio', 'Android Emulator'],
    category: 'Mobile',
    featured: true,
    coverImage:
      'https://images.unsplash.com/photo-1726066012749-f81bf4422d4e?w=1200&h=800&fit=crop',
    images: [
      {
        id: '1',
        url:
          'https://images.unsplash.com/photo-1726066012749-f81bf4422d4e?w=1200&h=800&fit=crop',
        alt: 'SaveIdeas app',
        isCover: true,
      },
    ],
    links: [],
    challenges:
      'Thinking about the smallest possible interaction that would make saving an idea easier than relying on bookmarks or screenshots.',
    lessons:
      'Sometimes a useful product starts with a very small annoyance that keeps happening in everyday life.',
    buildNotes:
      'Day 3 started from a simple question: what if saving something I found on social media was as easy as sharing it? I built the first piece around that interaction.',
    whoIsItFor:
      'People who regularly discover useful ideas, resources, and inspiration on social media.',
    inspiration:
      'My own habit of finding interesting posts and then struggling to actually return to them.',
    createdAt: '2026-10-01T09:00:00Z',
    updatedAt: '2026-10-01T18:00:00Z',
    publishedAt: '2026-10-01T18:00:00Z',
  },

  {
    id: '2',
    dayNumber: 2,
    title: 'Mobile App Sharing',
    slug: 'mobile-app-sharing',
    date: '2026-09-30',
    shortDescription:
      'The first mobile interaction that lets content be shared directly into something I am building.',
    problem:
      'I wanted a simple way to move content from another app into my own app without copying links or manually switching between applications.',
    solution:
      'I explored and built the mobile sharing flow that allows content from another app to be shared directly into my application.',
    features: [
      'Mobile share integration',
      'Share content from other apps',
      'Receive shared links or content',
    ],
    instructions: [
      {
        id: '1',
        title: 'Open another app',
        description:
          'Find a post or piece of content you want to save.',
      },
      {
        id: '2',
        title: 'Tap Share',
        description:
          'Use the native share option on your phone.',
      },
      {
        id: '3',
        title: 'Choose the app',
        description:
          'Select the app to send the content into the workflow.',
      },
    ],
        technologies: ['React Native', 'TypeScript ', 'Android share intents'],
    category: 'Mobile',
    featured: false,
    coverImage:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop',
    images: [
      {
        id: '1',
        url:
          'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop',
        alt: 'Mobile app sharing',
        isCover: true,
      },
    ],
    links: [],
    challenges:
      'Understanding how content moves between mobile applications and how to make that interaction feel natural to the user.',
    lessons:
      'A good user experience often starts outside the application itself. The way users enter a product matters just as much as what happens after they arrive.',
    buildNotes:
      'This was the small technical piece that led into Day 3 and the SaveIdeas idea.',
    whoIsItFor:
      'Anyone building mobile experiences that need to receive content from other applications.',
    inspiration:
      'The desire to make saving content feel as natural as sharing it.',
    createdAt: '2026-09-30T09:00:00Z',
    updatedAt: '2026-09-30T18:00:00Z',
    publishedAt: '2026-09-30T18:00:00Z',
  },

  {
    id: '1',
    dayNumber: 1,
    title: 'Automated Email Workflow',
    slug: 'automated-email-workflow',
    date: '2026-09-29',
    shortDescription:
      'A small automation that uses Google tools to make sending emails easier and less repetitive.',
    problem:
      'Some email tasks are repetitive and can take unnecessary time when they are done manually.',
    solution:
      'I used Google Apps Script to automate an email workflow and explore how simple scripts can remove repetitive work.',
    features: [
      'Automated email sending',
      'Google Apps Script',
      'Google Workspace integration',
    ],
    instructions: [
      {
        id: '1',
        title: 'Prepare the data',
        description:
          'Provide the information needed for the email workflow.',
      },
      {
        id: '2',
        title: 'Run the automation',
        description:
          'Let the Google Apps Script handle the repetitive email task.',
      },
      {
        id: '3',
        title: 'Check the result',
        description:
          'Confirm that the emails were sent successfully.',
      },
    ],
    technologies: ['Google Apps Script', 'JavaScript', 'Google Workspace'],
    category: 'Automation',
    featured: false,
    coverImage:
      'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&h=800&fit=crop',
    images: [
      {
        id: '1',
        url:
          'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&h=800&fit=crop',
        alt: 'Email automation',
        isCover: true,
      },
    ],
    links: [],
    challenges:
      'Thinking beyond writing code for an application and identifying small repetitive tasks that can be automated with existing tools.',
    lessons:
      'Not every useful software solution needs to be a large application. A small automation can remove a surprisingly frustrating task.',
    buildNotes:
      'For Day 1, I started with automation and explored how Google Apps Script could handle an email task that would otherwise require repetitive manual work.',
    whoIsItFor:
      'People and teams with repetitive email workflows that can be automated.',
    inspiration:
      'The idea that building software should not always mean building a large product from scratch.',
    createdAt: '2026-09-29T09:00:00Z',
    updatedAt: '2026-09-29T18:00:00Z',
    publishedAt: '2026-09-29T18:00:00Z',
  },
];