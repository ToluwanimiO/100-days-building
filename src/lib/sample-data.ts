import { Project } from '@/types';

export const sampleProjects: Project[] = [
  {
  id: '6',
  dayNumber: 6,
  title: 'Spreadsheet to Web App',
  slug: 'spreadsheet-to-web-app',
  date: '2026-10-06',
  shortDescription:
    'A web app that turns Excel spreadsheets into searchable, browsable web interfaces with cards, filters, and detailed record views.',
  problem:
    'Excel spreadsheets can contain useful information but become difficult to browse and search as the number of records grows.',
  solution:
    'A simple web app where users can upload an Excel spreadsheet and automatically turn its rows into a searchable card-based interface with filtering and detailed views for individual records.',
  features: [
    'Excel file upload',
    'Automatic spreadsheet parsing',
    'Card-based data display',
    'Search across records',
    'Filter records',
    'Detailed record views',
  ],
  instructions: [
    {
      id: '1',
      title: 'Upload an Excel file',
      description:
        'Upload an Excel spreadsheet and let the app parse the data automatically.',
    },
    {
      id: '2',
      title: 'Browse your data',
      description:
        'View each spreadsheet entry as a card instead of navigating through rows and columns.',
    },
    {
      id: '3',
      title: 'Search and filter',
      description:
        'Search across your data, use filters to narrow the results, and click any card to view its full details.',
    },
  ],
  technologies: ['Next JS', 'TypeScript', 'SheetJS'],
  category: 'Frontend',
  featured: true,
  coverImage:
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
  images: [
    {
      id: '1',
      url:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      alt: 'Spreadsheet to Web App',
      isCover: true,
    },
  ],
  links: [
    {
       id: '1',
  label: "Live Demo",   
  url: "https://excel-browser.netlify.app/",
  type: 'demo'
    }
  ],
  challenges:
    'Parsing an Excel file with an unknown structure and dynamically turning its rows and columns into a useful interface without hardcoding the type of data being uploaded.',
  lessons:
    'A spreadsheet does not have to remain a spreadsheet. Once the data is parsed and structured, the same information can be presented in a completely different interface that makes it easier to browse and interact with.',
  buildNotes:
    'This build was directly inspired by yesterday’s project. While working with the Excel dataset for yesterday’s app, I found the process of parsing the spreadsheet and turning its data into something the app could use surprisingly interesting. I decided to build a small tool around that process.',
  whoIsItFor:
    'Anyone who has useful information stored in an Excel spreadsheet and wants a simpler way to browse, search, filter, and view the individual records.',
  inspiration:
    'Yesterday’s build required me to parse an Excel dataset because I could not find an API with the country and religious statistics I needed. That small technical challenge became the inspiration for today’s project.',
  createdAt: '2026-10-06T09:00:00Z',
  updatedAt: '2026-10-06T19:00:00Z',
  publishedAt: '2026-10-06T19:00:00Z',
},
  {
  id: '5',
  dayNumber: 5,
  title: 'Pray for the Nations',
  slug: 'pray-for-the-nations',
  date: '2026-10-05',
  shortDescription:
    'An interactive tool for exploring countries, learning about their people and religious makeup, and being inspired to pray for them.',
  problem:
    'It can be difficult to intentionally learn about different countries and the people who live there, especially when trying to understand their religious makeup and use that information to pray for the nations.',
  solution:
    'An interactive web app that lets users explore countries around the world, view information about their population and religious makeup, and use what they learn as a starting point for praying for that nation.',
  features: [
    'Explore countries around the world',
    'Country information',
    'Religious makeup statistics',
    'Search and browse countries',
    'Interactive country views',
    'Prayer-focused exploration',
  ],
  instructions: [
    {
      id: '1',
      title: 'Explore a country',
      description:
        'Browse or select a country to learn more about its people and religious makeup.',
    },
    {
      id: '2',
      title: 'Learn about the country',
      description:
        'View country information and religious statistics to better understand the people who live there.',
    },
    {
      id: '3',
      title: 'Pray for the nation',
      description:
        'Use what you learn as a starting point to intentionally pray for the people and needs of that country.',
    },
  ],
  technologies: ['Next JS', 'TypeScript'],
  category: 'Frontend',
  featured: true,
  coverImage:
    'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&h=800&fit=crop',
  images: [
    {
      id: '1',
      url:
        'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&h=800&fit=crop',
      alt: 'Pray for the Nations',
      isCover: true,
    },
  ],
    links: [
    {
       id: '2',
  label: "Live Demo",   
  url: "https://pray-for-the-nations.netlify.app/",
  type: 'demo'
    }
  ],
  challenges:
    'Finding a suitable source for the religious statistics and parsing the Excel dataset so the information could be transformed into structured data that the application could display.',
  lessons:
    'Not every useful dataset comes from an API. Sometimes working with a raw dataset means figuring out how to parse, structure, and transform the data yourself before an application can use it.',
  buildNotes:
    'This build started with a simple challenge: I wanted country data that included religious statistics, but I could not find an API with exactly what I needed. I ended up using a Pew Research Center dataset in an Excel file and had to parse the spreadsheet data for the app.',
  whoIsItFor:
    'Anyone who wants to explore countries around the world, learn about their people and religious makeup, and be intentional about praying for the nations.',
  inspiration:
    'A challenge from my pastor to adopt a nation and intentionally pray for them, which made me want to create a simple way to explore countries and learn more about the people I was praying for.',
  createdAt: '2026-10-05T09:00:00Z',
  updatedAt: '2026-10-05T18:00:00Z',
  publishedAt: '2026-10-05T18:00:00Z',
},
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