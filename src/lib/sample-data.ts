import { Project } from "@/types";

export const sampleProjects: Project[] = [
  {
  id: "13",
  dayNumber: 13,
  title: "Vision 52",
  slug: "vision-52",
  date: "2026-10-12",
  shortDescription:
    "A faith-centered PWA that helps Christians be more intentional about evangelism, prayer, and following up with people they meet.",
  problem:
    "It can be difficult to stay intentional about evangelism and caring for people beyond the initial conversation. Remembering the people we meet, their prayer points, and when to follow up can become challenging without a simple way to keep track of them.",
  solution:
    "A web app that helps Christians organise the people they meet, record responses to Gospel conversations, save prayer points, create prayer and follow-up lists, and plan regular evangelism sessions.",
  features: [
    "User authentication and personalised accounts",
    "Dashboard with an overview of people added and recorded Gospel responses",
    "Set and edit a recurring evangelism schedule",
    "Add evangelism sessions to Google Calendar",
    "Create and manage records of people met",
    "Record Gospel responses, including giving one's life to Christ and rededication",
    "Save prayer points, locations, and additional notes",
    "Organise people into Prayer List, Follow-up List, and custom lists",
    "Create and manage custom lists",
    "Installable Progressive Web App (PWA)",
  ],
  instructions: [
    {
      id: "1",
      title: "Create an account",
      description:
        "Sign up to create your personal Vision 52 account. Your people records and lists are associated with your account.",
    },
    {
      id: "2",
      title: "Set your evangelism schedule",
      description:
        "Choose the day, time, and duration for your regular evangelism sessions. You can add a session to Google Calendar to help you remember to make time for it.",
    },
    {
      id: "3",
      title: "Add the people you meet",
      description:
        "Create a record for someone you meet during evangelism. Save their name or preferred identifier, the date you met, their Gospel response, and any relevant details or prayer points.",
    },
    {
      id: "4",
      title: "Organise your people",
      description:
        "Add people to your Prayer List, Follow-up List, or custom lists so you can remember to pray for them and reconnect with them intentionally.",
    },
    {
      id: "5",
      title: "Keep taking the next step",
      description:
        "Return to your dashboard to see the people you've added and your next scheduled evangelism session. Use your lists to stay intentional about prayer and follow-up.",
    },
    {
      id: "6",
      title: "Install the app (optional)",
      description:
        "Vision 52 can be installed as a PWA from a supported browser, allowing you to add it to your device's home screen and access it like an app without an app store.",
    },
  ],
  technologies: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Vite",
    "Supabase",
    "PostgreSQL",
    "Supabase Auth",
    "Lucide React",
    "vite-plugin-pwa",
    "Google Calendar Event Links",
  ],
  category: "Frontend",
  featured: true,
  coverImage: "https://images.unsplash.com/photo-1758502033995-e52a218738ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  images: [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1758502033995-e52a218738ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      alt: "Vision 52 dashboard",
      isCover: true,
    },
  ],
  links: [
    {
      id: "1",
      label: "Live Demo",
      url: "http://vision-52.netlify.app/",
      type: "demo",
    },
  ],
  challenges:
    "Designing a simple way to manage people and their relationships with multiple lists while keeping the data associated with the correct user. Another consideration was integrating Google Calendar without requiring OAuth or Google Calendar API access. Calendar links can prefill events, but users still need to save the events and configure recurrence or notifications themselves.",
  lessons:
    "I was reminded that building a useful solution involves more than writing code. I spent time thinking through the user flow, deciding what information to capture, and considering how the different features should work together. I also worked with Supabase for authentication and database operations, including organising related records across people, lists, and list memberships.",
  buildNotes:
    "I knew what I wanted to build fairly early, but the desire to make everything perfect made it difficult to start coding. I had to remind myself that it is okay to ship something that still needs improvement. Vision 52 grew from my desire to make it easier to be intentional about sharing the Gospel, praying for people, and following up after conversations.",
  whoIsItFor:
    "Christians, evangelism teams, and individuals who want a more intentional way to organise the people they meet, remember prayer points, plan evangelism sessions, and follow up with people.",
  inspiration:
    "The idea came from wanting to be more intentional about evangelism and recognising that sharing the Gospel is not the end of caring for someone. Prayer, remembering people, and following up matter too.",
  createdAt: "2026-10-12T09:00:00Z",
  updatedAt: "2026-10-12T21:00:00Z",
  publishedAt: "2026-10-12T21:00:00Z",
},

{
  id: "10",
  dayNumber: 10,
  title: "Nourish",
  slug: "nourish",
  date: "2026-10-13",
  shortDescription:
    "A food discovery web app that helps users explore recipes, search by dish or ingredient, and find inspiration when they don't know what to cook.",
  problem:
    "Deciding what to cook can be difficult when you have no particular meal in mind. Finding inspiration across a large collection of recipes can involve endless scrolling, making it harder to discover something new to try.",
  solution:
    "A food discovery web app that allows users to browse a large recipe collection, search for dishes and ingredients, explore recipe details, and discover a random meal when they need inspiration.",
  features: [
    "Browse a collection of over 13,000 recipes",
    "Search recipes by dish name or ingredient",
    "Filter recipes to show only those with available photos",
    "View recipe cards with food images and titles",
    "Open individual recipes to view ingredients and cooking instructions",
    "Surprise Me feature for discovering a random recipe",
    "Paginated recipe gallery for browsing large datasets",
  ],
  instructions: [
    {
      id: "1",
      title: "Explore the collection",
      description:
        "Open Nourish to browse featured recipes and discover meal ideas from the recipe collection.",
    },
    {
      id: "2",
      title: "Search for something specific",
      description:
        "Enter a dish name or ingredient to find recipes that match what you have in mind.",
    },
    {
      id: "3",
      title: "Browse and filter recipes",
      description:
        "Explore the recipe gallery, sort the results, and filter for recipes with available photos.",
    },
    {
      id: "4",
      title: "View a recipe",
      description:
        "Select a recipe to see its ingredients and cooking instructions before deciding what to make.",
    },
    {
      id: "5",
      title: "Let Nourish surprise you",
      description:
        "Use the Surprise Me feature when you want to discover a meal but don't know what to cook.",
    },
  ],
  technologies: [
    "Python",
    "Pandas",
    "Streamlit",
    "CSV Data Processing",
    "Git",
    "GitHub",
    "Streamlit Community Cloud",
  ],
  category: "Frontend",
  featured: true,
  coverImage: "https://images.unsplash.com/photo-1767277672167-18105701959b?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  images: [],
  links: [
    {
      id: "1",
      label: "Live Demo",
      url: "https://wellness-recommender.streamlit.app/",
      type: "demo",
    },
    {
      id: "2",
      label: "Source Code",
      url: "https://github.com/ToluwanimiO/wellness-recommender",
      type: "github",
    },
  ],
  challenges:
    "The build evolved from an initial wellness-focused food recommendation system into a recipe discovery app. Working with a dataset of over 13,000 recipes introduced data preparation and image-matching challenges. Another challenge was debugging Streamlit's rerun behaviour, which caused randomly selected recipes to change during interactions and interfered with recipe navigation. Preparing the app for deployment also required ensuring that local image paths worked in the cloud environment.",
  lessons:
    "I learned more about processing larger datasets with Pandas, matching recipe records to image files, building interactive interfaces with Streamlit, and managing application state across reruns. I also learned that file paths that work on a local Windows machine may need adjustment when deploying to a Linux-based environment.",
  buildNotes:
    "I started the day building a wellness-oriented recommendation system that matched food ingredients to nutritional goals. However, I wanted to work with a larger dataset and reconsidered the direction of the project. I pivoted to Nourish, using a dataset of over 13,000 recipes to build a more visual food discovery experience. The day involved changing direction, processing data, designing the interface, debugging navigation, and working towards deployment. The result was not perfect, but the process reinforced the importance of learning through consistent building rather than waiting for the perfect idea.",
  whoIsItFor:
    "Anyone looking for meal inspiration, home cooks who want to discover new recipes, and people who need a simple way to browse dishes by name or ingredient.",
  inspiration:
    "The idea evolved from an interest in food recommendation systems and nutritional wellness. Working with a larger recipe dataset led me to focus on a more general problem: helping people discover what to cook when they don't know where to start.",
  createdAt: "2026-10-13T09:00:00Z",
  updatedAt: "2026-10-13T21:00:00Z",
  publishedAt: "2026-10-13T21:00:00Z",
},

{
  id: "9",
  dayNumber: 9,
  title: "Open When Letters",
  slug: "open-when-letters",
  date: "2026-10-10",
  shortDescription:
    "A web app for creating personalized 'open when' letters for yourself or loved ones and sharing them through unique links.",
  problem:
    "Sometimes, people need a little reminder that they are loved, especially when they feel sad, lonely, or miss someone. Traditional letters are meaningful, but they are not always easy to create, personalize, and share digitally.",
  solution:
    "A web app that lets users write personalized letters for specific moments, customize their appearance, and share them through unique links. The MVP keeps the experience simple, with no sign-up or login required.",
  features: [
    "Create personalized 'open when' letters for yourself or others",
    "Customize the appearance of letters",
    "Save letters to a personal collection",
    "Generate unique shareable links for individual letters",
    "Access shared letters through their links without creating an account",
    "Responsive interface for mobile and desktop devices",
  ],
  instructions: [
    {
      id: "1",
      title: "Create a letter",
      description:
        "Write a message for a particular moment, such as when someone feels sad, misses you, or needs encouragement.",
    },
    {
      id: "2",
      title: "Personalize your letter",
      description:
        "Customize the appearance to make your letter feel more personal and meaningful.",
    },
    {
      id: "3",
      title: "Save your letter",
      description:
        "Save your letter and keep track of your created letters in your collection. Your collection is tied to the browser you created it in.",
    },
    {
      id: "4",
      title: "Share it with someone",
      description:
        "Copy the unique link for your letter and send it to the intended recipient so they can open and read it.",
    },
  ],
  technologies: [
    "Next.js",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "Token-Based Access",
    "Responsive Web Design",
  ],
  category: "Frontend",
  featured: false,
  coverImage: "https://images.unsplash.com/photo-1567473030492-533b30c5494c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  images: [],
  links: [
    {
        id: "1",
        label: "Live Demo",
        url: "https://open-whenletters.netlify.app/",
        type: "demo",
      }
  ],
  challenges:
    "One interesting challenge was managing letter ownership and sharing without traditional user accounts. I needed a way to associate letters with their creators while allowing recipients to access individual letters through unique links. Another consideration was keeping the MVP simple without introducing a full authentication system.",
  lessons:
    "I learned more about implementing token-based access and designing a simple sharing experience without traditional user accounts. I was also reminded that building an MVP involves making deliberate trade-offs: delivering the core experience first while being clear about the limitations that remain.",
  buildNotes:
    "This MVP was built with Next.js, TypeScript, and Supabase. It does not require sign-up or login, but the letter collection is tied to the browser used to create it. Letters are text-only, cannot be edited or deleted after saving, and do not support scheduled delivery or email notifications. Users need to share their letter links themselves.",
  whoIsItFor:
    "People who want to send thoughtful, personalized messages to friends, family, or themselves for specific moments when encouragement, comfort, or a reminder of love might be needed.",
  inspiration:
    "The idea came from the concept of 'open when' letters: messages written for someone to read at a particular moment. I wanted to explore how to bring that thoughtful, sentimental experience into a simple web app that makes creating and sharing these letters easier.",
  createdAt: "2026-10-10T09:00:00Z",
  updatedAt: "2026-10-10T21:00:00Z",
  publishedAt: "2026-10-10T21:00:00Z",
},

{
  id: "8",
  dayNumber: 8,
  title: "Church Website",
  slug: "church-website",
  date: "2026-10-09",
  shortDescription:
    "A website for my church, designed to communicate its identity, share its mission, and make information about the ministry accessible online.",
  problem:
    "Churches need an accessible online presence where people can learn about the ministry, understand its mission, find relevant information, and discover ways to connect with and support the work of the church.",
  solution:
    "A church website that brings together information about the ministry, its mission, and opportunities to connect and give. The first iteration focuses on presenting the church's identity and making important information accessible through a welcoming digital experience.",
  features: [
    "Church landing page with a welcoming introduction",
    "Sections communicating the church's identity, mission, and vision",
    "Visual storytelling using shapes, colors, and design elements",
    "Information about the ministry and its work",
    "Responsive layout for different screen sizes",
  ],
  instructions: [
    {
      id: "1",
      title: "Not available yet",
      description:"The website is still in development and has not been publicly deployed. It will be shared once it is ready for public access.",
    }
  ],
  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
    "Responsive Web Design",
  ],
  category: "Frontend",
  featured: false,
  coverImage: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  images: [],
  links: [],
  challenges:
    "Turning the church's identity and needs into a clear, welcoming digital experience while making design decisions that communicate its mission effectively. Another consideration was that the website needed to go through the church's approval process before it could be deployed publicly.",
  lessons:
    "I was reminded that building a solution involves more than writing code. Understanding the organisation, communicating its message, and deciding how information should be presented are important parts of the process. I also got to think about how design can make a website feel welcoming while helping visitors find what they need.",
  buildNotes:
    "This was the first iteration of a website for my church. It is not publicly deployed yet because it needs to go through the approval process and may require further refinement. Even though there is no live link to share yet, it was an opportunity to work on a real-world project with an actual organisation and a genuine need.",
  whoIsItFor:
    "Churches and faith-based organisations that want to communicate their identity, share their mission, provide useful information, and establish an accessible online presence.",
  inspiration:
    "The project came from the need for my church to have a website. I wanted to create a digital space that communicates the church's identity and makes information about the ministry accessible to people online.",
  createdAt: "2026-10-09T09:00:00Z",
  updatedAt: "2026-10-09T21:00:00Z",
  publishedAt: "2026-10-09T21:00:00Z",
},
  {
    id: "7",
    dayNumber: 7,
    title: "TimeTrail",
    slug: "timetrail",
    date: "2026-10-07",
    shortDescription:
      "A PWA that helps users build consistency by tracking cumulative time spent on activities across multiple sessions throughout the day.",
    problem:
      "Building a habit does not always fit neatly into one uninterrupted block of time. Traditional timers can make it difficult to track a daily time goal when the time available is scattered throughout the day.",
    solution:
      "A time-tracking PWA where users can set a daily time goal for an activity, start and pause a timer whenever they work on it, and accumulate all their sessions toward one daily target.",
    features: [
      "Create activities with daily time goals",
      "Start, pause, and resume activity timers",
      "Accumulate time across multiple sessions",
      "Visual daily progress tracking",
      "Session history with timestamps",
      "Automatic daily progress reset",
      "Offline-first local data storage",
      "Installable PWA",
    ],
    instructions: [
      {
        id: "1",
        title: "Install the app (optional)",
        description:
          "TimeTrail works directly in your browser, but you can optionally install it as a PWA. Open the app in your browser and select “Add to Home Screen” or “Install App” to add it to your device like a regular app.",
      },
      {
        id: "2",
        title: "Create an activity",
        description:
          "Add an activity such as Coding, Reading, or Prayer and set how much time you want to spend on it each day.",
      },
      {
        id: "3",
        title: "Start tracking",
        description:
          "Start the timer when you begin the activity and pause it whenever you need to stop. Your progress is saved.",
      },
      {
        id: "4",
        title: "Come back later",
        description:
          "Resume the activity whenever you return to it. Every session adds to your total progress toward the daily goal.",
      },
      {
        id: "5",
        title: "Reach your daily goal",
        description:
          "Keep accumulating time throughout the day until you reach your target. Your previous sessions remain available in the activity history.",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
      "Vite",
      "vite-plugin-pwa",
    ],
    category: "Frontend",
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&h=800&fit=crop",
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&h=800&fit=crop",
        alt: "TimeTrail habit time tracker",
        isCover: true,
      },
    ],
    links: [
      {
        id: "1",
        label: "Live Demo",
        url: "https://time-trails.netlify.app/",
        type: "demo",
      },
    ],
    challenges:
      "Building a timer that accurately accumulates time across multiple sessions and remains reliable when the app is backgrounded or temporarily suspended. The app needed to calculate elapsed time from timestamps rather than relying only on a continuously incrementing counter.",
    lessons:
      "I finally got to build a Progressive Web App, something I had been meaning to try for a while. I learned how PWAs bridge the gap between web apps and installable apps, and how vite-plugin-pwa simplifies much of the setup, including the Web App Manifest and service worker configuration.",
    buildNotes:
      "This build came from thinking about habits I want to be more intentional about. For example, I might want to spend two hours reading my Bible each day, but I may not always have two uninterrupted hours available. I wanted to build something that could track those smaller sessions and show that they still add up.",
    whoIsItFor:
      "Anyone trying to build consistency around activities that require a certain amount of time each day but may not always fit into one uninterrupted session.",
    inspiration:
      "The idea came from wanting to be more intentional about building habits and recognizing that tracking whether I actually spend the intended amount of time on something can help with consistency.",
    createdAt: "2026-10-07T09:00:00Z",
    updatedAt: "2026-10-07T21:00:00Z",
    publishedAt: "2026-10-07T21:00:00Z",
  },
  {
    id: "6",
    dayNumber: 6,
    title: "Spreadsheet to Web App",
    slug: "spreadsheet-to-web-app",
    date: "2026-10-06",
    shortDescription:
      "A web app that turns Excel spreadsheets into searchable, browsable web interfaces with cards, filters, and detailed record views.",
    problem:
      "Excel spreadsheets can contain useful information but become difficult to browse and search as the number of records grows.",
    solution:
      "A simple web app where users can upload an Excel spreadsheet and automatically turn its rows into a searchable card-based interface with filtering and detailed views for individual records.",
    features: [
      "Excel file upload",
      "Automatic spreadsheet parsing",
      "Card-based data display",
      "Search across records",
      "Filter records",
      "Detailed record views",
    ],
    instructions: [
      {
        id: "1",
        title: "Upload an Excel file",
        description:
          "Upload an Excel spreadsheet and let the app parse the data automatically.",
      },
      {
        id: "2",
        title: "Browse your data",
        description:
          "View each spreadsheet entry as a card instead of navigating through rows and columns.",
      },
      {
        id: "3",
        title: "Search and filter",
        description:
          "Search across your data, use filters to narrow the results, and click any card to view its full details.",
      },
    ],
    technologies: ["Next JS", "TypeScript", "SheetJS"],
    category: "Frontend",
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
        alt: "Spreadsheet to Web App",
        isCover: true,
      },
    ],
    links: [
      {
        id: "1",
        label: "Live Demo",
        url: "https://excel-browser.netlify.app/",
        type: "demo",
      },
    ],
    challenges:
      "Parsing an Excel file with an unknown structure and dynamically turning its rows and columns into a useful interface without hardcoding the type of data being uploaded.",
    lessons:
      "I learned how to parse Excel files in the browser, extract the worksheet data, use the first row as dynamic column headers, and transform each subsequent row into structured records that could be rendered dynamically by the application.",
    buildNotes:
      "This build was directly inspired by yesterday’s project. While working with the Excel dataset for yesterday’s app, I found the process of parsing the spreadsheet and turning its data into something the app could use surprisingly interesting. I decided to build a small tool around that process.",
    whoIsItFor:
      "Anyone who has useful information stored in an Excel spreadsheet and wants a simpler way to browse, search, filter, and view the individual records.",
    inspiration:
      "Yesterday’s build required me to parse an Excel dataset because I could not find an API with the country and religious statistics I needed. That small technical challenge became the inspiration for today’s project.",
    createdAt: "2026-10-06T09:00:00Z",
    updatedAt: "2026-10-06T19:00:00Z",
    publishedAt: "2026-10-06T19:00:00Z",
  },
  {
    id: "5",
    dayNumber: 5,
    title: "Pray for the Nations",
    slug: "pray-for-the-nations",
    date: "2026-10-05",
    shortDescription:
      "An interactive tool for exploring countries, learning about their people and religious makeup, and being inspired to pray for them.",
    problem:
      "It can be difficult to intentionally learn about different countries and the people who live there, especially when trying to understand their religious makeup and use that information to pray for the nations.",
    solution:
      "An interactive web app that lets users explore countries around the world, view information about their population and religious makeup, and use what they learn as a starting point for praying for that nation.",
    features: [
      "Explore countries around the world",
      "Country information",
      "Religious makeup statistics",
      "Search and browse countries",
      "Interactive country views",
      "Prayer-focused exploration",
    ],
    instructions: [
      {
        id: "1",
        title: "Explore a country",
        description:
          "Browse or select a country to learn more about its people and religious makeup.",
      },
      {
        id: "2",
        title: "Learn about the country",
        description:
          "View country information and religious statistics to better understand the people who live there.",
      },
      {
        id: "3",
        title: "Pray for the nation",
        description:
          "Use what you learn as a starting point to intentionally pray for the people and needs of that country.",
      },
    ],
    technologies: ["Next JS", "TypeScript"],
    category: "Frontend",
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&h=800&fit=crop",
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1200&h=800&fit=crop",
        alt: "Pray for the Nations",
        isCover: true,
      },
    ],
    links: [
      {
        id: "2",
        label: "Live Demo",
        url: "https://pray-for-the-nations.netlify.app/",
        type: "demo",
      },
    ],
    challenges:
      "Finding a suitable source for the religious statistics and parsing the Excel dataset so the information could be transformed into structured data that the application could display.",
    lessons:
      "Not every useful dataset comes from an API. Sometimes working with a raw dataset means figuring out how to parse, structure, and transform the data yourself before an application can use it.",
    buildNotes:
      "This build started with a simple challenge: I wanted country data that included religious statistics, but I could not find an API with exactly what I needed. I ended up using a Pew Research Center dataset in an Excel file and had to parse the spreadsheet data for the app.",
    whoIsItFor:
      "Anyone who wants to explore countries around the world, learn about their people and religious makeup, and be intentional about praying for the nations.",
    inspiration:
      "A challenge from my pastor to adopt a nation and intentionally pray for them, which made me want to create a simple way to explore countries and learn more about the people I was praying for.",
    createdAt: "2026-10-05T09:00:00Z",
    updatedAt: "2026-10-05T18:00:00Z",
    publishedAt: "2026-10-05T18:00:00Z",
  },
  {
    id: "4",
    dayNumber: 4,
    title: "100 Days of Building Log",
    slug: "100-days-of-building-log",
    date: "2026-10-02",
    shortDescription:
      "A personal build log for documenting what I create, learn, and ship throughout 100 days of building.",
    problem:
      "When you build consistently, it is easy to forget what you made, why you made it, and how much progress you have actually made.",
    solution:
      "A simple public build log where I can document each day’s project, share what it does, explain how to use it, and keep links, images, and build notes in one place.",
    features: [
      "Daily build entries",
      "Project documentation",
      "Demo and GitHub links",
      "Build screenshots",
      "Instructions",
      "Progress tracking",
    ],
    instructions: [
      {
        id: "1",
        title: "Browse the builds",
        description:
          "Explore the projects I build throughout the 100-day challenge.",
      },
      {
        id: "2",
        title: "Open a project",
        description:
          "Read what I built, why I built it, how it works, and how to use it.",
      },
      {
        id: "3",
        title: "Follow the journey",
        description:
          "Use the day numbers and build history to follow my progress from Day 1 to Day 100.",
      },
    ],
    technologies: ["React", "TypeScript"],
    category: "Frontend",
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop",
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop",
        alt: "100 Days of Building Log",
        isCover: true,
      },
    ],
    links: [],
    challenges:
      "Designing a simple system that makes documenting each day quick enough that it does not become another project on its own.",
    lessons:
      "Building in public is not just about showing the final product. The process, decisions, experiments, and small wins are part of the story.",
    buildNotes:
      "I wanted a place where every day of this challenge could become a small, documented artifact rather than disappearing into my camera roll, GitHub, or social media posts.",
    whoIsItFor:
      "Anyone following my 100-day building journey or interested in the things I create.",
    inspiration:
      "The desire to make my building journey visible, organized, and easy to revisit.",
    createdAt: "2026-10-02T09:00:00Z",
    updatedAt: "2026-10-02T18:00:00Z",
    publishedAt: "2026-10-02T18:00:00Z",
  },

  {
    id: "3",
    dayNumber: 3,
    title: "SaveIdeas",
    slug: "saveideas",
    date: "2026-10-01",
    shortDescription:
      "A simple way to save interesting ideas from social media instead of letting them disappear into the scroll.",
    problem:
      "I constantly come across useful ideas on social media, but saving them usually means bookmarking posts, taking screenshots, or telling myself I will come back later.",
    solution:
      "A small app for capturing ideas from social media so they can be collected and revisited instead of getting lost in the feed.",
    features: [
      "Share posts directly to the app",
      "Save ideas for later",
      "Central place for saved ideas",
    ],
    instructions: [
      {
        id: "1",
        title: "Find something interesting",
        description:
          "Come across a post, idea, or piece of information you want to remember.",
      },
      {
        id: "2",
        title: "Share it",
        description:
          "Use your device sharing options to send the post directly to SaveIdeas.",
      },
      {
        id: "3",
        title: "Come back to it",
        description:
          "Open SaveIdeas later when you are ready to revisit the idea.",
      },
    ],
    technologies: [
      "React Native",
      "TypeScript ",
      "Expo",
      "EAS CLI",
      "Android Studio",
      "Android Emulator",
    ],
    category: "Mobile",
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1726066012749-f81bf4422d4e?w=1200&h=800&fit=crop",
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1726066012749-f81bf4422d4e?w=1200&h=800&fit=crop",
        alt: "SaveIdeas app",
        isCover: true,
      },
    ],
    links: [],
    challenges:
      "Thinking about the smallest possible interaction that would make saving an idea easier than relying on bookmarks or screenshots.",
    lessons:
      "Sometimes a useful product starts with a very small annoyance that keeps happening in everyday life.",
    buildNotes:
      "Day 3 started from a simple question: what if saving something I found on social media was as easy as sharing it? I built the first piece around that interaction.",
    whoIsItFor:
      "People who regularly discover useful ideas, resources, and inspiration on social media.",
    inspiration:
      "My own habit of finding interesting posts and then struggling to actually return to them.",
    createdAt: "2026-10-01T09:00:00Z",
    updatedAt: "2026-10-01T18:00:00Z",
    publishedAt: "2026-10-01T18:00:00Z",
  },

  {
    id: "2",
    dayNumber: 2,
    title: "Mobile App Sharing",
    slug: "mobile-app-sharing",
    date: "2026-09-30",
    shortDescription:
      "The first mobile interaction that lets content be shared directly into something I am building.",
    problem:
      "I wanted a simple way to move content from another app into my own app without copying links or manually switching between applications.",
    solution:
      "I explored and built the mobile sharing flow that allows content from another app to be shared directly into my application.",
    features: [
      "Mobile share integration",
      "Share content from other apps",
      "Receive shared links or content",
    ],
    instructions: [
      {
        id: "1",
        title: "Open another app",
        description: "Find a post or piece of content you want to save.",
      },
      {
        id: "2",
        title: "Tap Share",
        description: "Use the native share option on your phone.",
      },
      {
        id: "3",
        title: "Choose the app",
        description: "Select the app to send the content into the workflow.",
      },
    ],
    technologies: ["React Native", "TypeScript ", "Android share intents"],
    category: "Mobile",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop",
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop",
        alt: "Mobile app sharing",
        isCover: true,
      },
    ],
    links: [],
    challenges:
      "Understanding how content moves between mobile applications and how to make that interaction feel natural to the user.",
    lessons:
      "A good user experience often starts outside the application itself. The way users enter a product matters just as much as what happens after they arrive.",
    buildNotes:
      "This was the small technical piece that led into Day 3 and the SaveIdeas idea.",
    whoIsItFor:
      "Anyone building mobile experiences that need to receive content from other applications.",
    inspiration:
      "The desire to make saving content feel as natural as sharing it.",
    createdAt: "2026-09-30T09:00:00Z",
    updatedAt: "2026-09-30T18:00:00Z",
    publishedAt: "2026-09-30T18:00:00Z",
  },

  {
    id: "1",
    dayNumber: 1,
    title: "Automated Email Workflow",
    slug: "automated-email-workflow",
    date: "2026-09-29",
    shortDescription:
      "A small automation that uses Google tools to make sending emails easier and less repetitive.",
    problem:
      "Some email tasks are repetitive and can take unnecessary time when they are done manually.",
    solution:
      "I used Google Apps Script to automate an email workflow and explore how simple scripts can remove repetitive work.",
    features: [
      "Automated email sending",
      "Google Apps Script",
      "Google Workspace integration",
    ],
    instructions: [
      {
        id: "1",
        title: "Prepare the data",
        description: "Provide the information needed for the email workflow.",
      },
      {
        id: "2",
        title: "Run the automation",
        description:
          "Let the Google Apps Script handle the repetitive email task.",
      },
      {
        id: "3",
        title: "Check the result",
        description: "Confirm that the emails were sent successfully.",
      },
    ],
    technologies: ["Google Apps Script", "JavaScript", "Google Workspace"],
    category: "Automation",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&h=800&fit=crop",
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&h=800&fit=crop",
        alt: "Email automation",
        isCover: true,
      },
    ],
    links: [],
    challenges:
      "Thinking beyond writing code for an application and identifying small repetitive tasks that can be automated with existing tools.",
    lessons:
      "Not every useful software solution needs to be a large application. A small automation can remove a surprisingly frustrating task.",
    buildNotes:
      "For Day 1, I started with automation and explored how Google Apps Script could handle an email task that would otherwise require repetitive manual work.",
    whoIsItFor:
      "People and teams with repetitive email workflows that can be automated.",
    inspiration:
      "The idea that building software should not always mean building a large product from scratch.",
    createdAt: "2026-09-29T09:00:00Z",
    updatedAt: "2026-09-29T18:00:00Z",
    publishedAt: "2026-09-29T18:00:00Z",
  },
];
