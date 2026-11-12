import { Project } from "@/types";

export const sampleProjects: Project[] = [
  {
    id: "24",
    dayNumber: 24,
    title: "SIWES Company Finder",
    slug: "siwes-company-finder",
    date: "2026-11-11",
    shortDescription:
      "A searchable company directory that helps Nigerian students discover organisations by discipline, location, and other available company information.",
    problem:
      "Finding a suitable organisation for the Student Industrial Work Experience Scheme (SIWES) can be challenging for Nigerian students. Students may not know which companies to explore, where those organisations are located, or which ones are relevant to their academic disciplines. Discovering potential organisations often requires searching across multiple websites and directories, while the information available may be incomplete, outdated, or difficult to verify.",
    solution:
      "A searchable company directory initially conceived to help Nigerian students discover potential SIWES placement organisations. The project evolved into a broader company directory that groups organisations by academic and professional disciplines and provides available company information to support discovery. Its data pipeline uses Python-based web scraping, aggregation, and automated validation, with AI-assisted classification where available. The project also incorporates data-quality checks to flag potential inconsistencies for review.",
    features: [
      "Browse a directory of organisations collected from multiple public sources",
      "Search for companies by name",
      "Explore organisations grouped by discipline",
      "Filter company listings using available discipline information",
      "Explore company information, including location and website where available",
      "Aggregate company names from ITF-related SIWES employer records",
      "Discover additional company website candidates from public sources",
      "Extract and organise company information using Python-based web scraping",
      "Apply automated data-validation checks to identify potential inconsistencies",
      "Use AI-assisted classification where available",
      "Flag missing information and potential duplicate company records",
      "Identify suspicious discipline assignments and possible company–website mismatches for review",
      "Support multiple discipline data formats in the frontend",
      "Display discipline labels consistently using mapped discipline codes",
      "Communicate data limitations through an accuracy disclaimer",
    ],
    instructions: [
      {
        id: "1",
        title: "Explore the directory",
        description:
          "Open the directory to browse the available organisations and explore the information provided for each company.",
      },
      {
        id: "2",
        title: "Search for an organisation",
        description:
          "Use the available search functionality to find companies by name and narrow your search to organisations relevant to your interests.",
      },
      {
        id: "3",
        title: "Explore by discipline",
        description:
          "Browse companies grouped by discipline to discover organisations that may be relevant to your academic background or career interests.",
      },
      {
        id: "4",
        title: "Review company information",
        description:
          "Check the available company details, including location, website, and relevant disciplines, where provided.",
      },
      {
        id: "5",
        title: "Verify placement opportunities",
        description:
          "Contact organisations directly and consult your institution's SIWES coordinator or the ITF to confirm placement availability and eligibility before applying.",
      },
    ],
    technologies: [
      "Python",
      "BeautifulSoup",
      "JavaScript",
      "HTML",
      "CSS",
      "Web Scraping",
      "Data Validation",
      "AI-Assisted Classification",
      "CSV Data Processing",
    ],
    category: "Fullstack",
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1773047747721-f75d546d7290?q=80&w=1413&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    images: [
      {
        id: "1",
        url: "",
        alt: "SIWES Company Finder interface showing company listings grouped by discipline",
        isCover: true,
      },
    ],
    links: [
      {
        id: "1",
        label: "Live Demo",
        url: "https://siwes-finder.netlify.app/",
        type: "demo",
      },
    ],
    challenges:
      "One of the main challenges was building a useful directory from company information scattered across different sources. The initial ITF-related records provided company names, but additional information such as locations, websites, and relevant disciplines was not consistently available. Expanding the dataset required a web-scraping pipeline that could collect and organise information while accommodating different website structures. Data quality introduced another challenge: automated collection and classification can produce incomplete records, duplicate entries, irrelevant links, and potentially incorrect discipline assignments. I implemented automated checks to flag these issues for review rather than treating every collected record as accurate. I also had to account for inconsistencies in how discipline information was represented in the seed data so that the frontend could display both space-separated strings and arrays correctly.",
    lessons:
      "This project reinforced that building a useful data-driven application involves more than collecting records and displaying them in a searchable interface. Data acquisition, normalisation, validation, classification, and presentation are interconnected parts of the system. It also highlighted the limitations of automation: web scraping and AI-assisted classification can accelerate data processing, but they do not guarantee correctness. Reliable systems need validation mechanisms, transparent limitations, and ways to identify records that require further review.",
    buildNotes:
      "I began with the idea of helping Nigerian students discover potential SIWES placement organisations. I collected employer names from ITF-related records and expanded the dataset using publicly available sources. I then developed a Python-based pipeline for web scraping, data aggregation, and automated validation, with AI-assisted classification where available. I also implemented data-quality checks to flag missing information, possible duplicates, suspicious discipline assignments, and potential company–website mismatches. On the frontend, I updated the rendering logic to handle different discipline data formats consistently. As the project evolved, the original SIWES-specific concept became a broader company directory organised by discipline. The focus is on making company discovery easier while being transparent about the limitations of the underlying data.",
    whoIsItFor:
      "Nigerian university and polytechnic students searching for potential SIWES placement organisations, as well as students and other users looking to discover companies by academic discipline and location.",
    inspiration:
      "Finding an organisation for SIWES can be difficult when students do not know which companies to consider or where to find relevant information. I wanted to explore how a searchable directory could make that discovery process easier. As I worked on the idea, I also became interested in the engineering challenges behind the directory: collecting information from multiple sources, structuring it consistently, and identifying potential data-quality problems through automation.",
    createdAt: "2026-11-11T09:00:00Z",
    updatedAt: "2026-11-11T17:00:00Z",
    publishedAt: "2026-11-11T17:00:00Z",
  },
  {
    id: "23",
    dayNumber: 23,
    title: "Goal-to-Timetable Scheduling Engine",
    slug: "goal-to-timetable-scheduling-engine",
    date: "2026-11-09",
    shortDescription:
      "A scheduling tool that turns goals, deadlines, available hours, and recurring commitments into a structured weekly timetable.",
    problem:
      "Balancing personal goals, learning targets, deadlines, work, and recurring commitments can make weekly planning difficult. Manually deciding what to work on, when to work on it, and how much time to allocate to each task can be time-consuming. A schedule that ignores existing commitments or competing priorities may also be unrealistic from the start.",
    solution:
      "A goal-to-timetable scheduling engine that takes users' goals, weekly work targets, deadlines, available time, and fixed commitments and generates a feasible weekly timetable. The project explores different scheduling algorithms, including greedy scheduling and beam-search-based optimization, and provides a frontend through which users can enter their planning information and interact with the scheduling experience.",
    features: [
      "Define goals and the tasks associated with them",
      "Set weekly work targets for individual tasks",
      "Specify task priorities and firm deadlines",
      "Set minimum session durations and optional daily time limits",
      "Define available time across the days of the week",
      "Add recurring routines and fixed commitments",
      "Specify preferred days and times for tasks",
      "Generate schedules using a greedy scheduling algorithm",
      "Generate alternative schedules using beam-search-based optimization",
      "Compare scheduling approaches using objective scores and work coverage",
      "Account for deadlines and daily availability constraints",
      "Identify tasks that cannot be fully scheduled and explain why",
      "Present planning information through a user-facing frontend",
    ],
    instructions: [
      {
        id: "1",
        title: "Define your goals",
        description:
          "Enter the tasks you want to complete, set their weekly work targets, and specify priorities, deadlines, and any daily session limits.",
      },
      {
        id: "2",
        title: "Set your availability",
        description:
          "Specify the hours you can dedicate to your goals throughout the week, taking existing commitments and recurring routines into account.",
      },
      {
        id: "3",
        title: "Configure your preferences",
        description:
          "Define preferred days and times for tasks, along with scheduling constraints such as minimum session durations.",
      },
      {
        id: "4",
        title: "Generate a timetable",
        description:
          "Use the scheduling engine to allocate tasks to available time slots while considering deadlines, priorities, and scheduling constraints.",
      },
      {
        id: "5",
        title: "Review your schedule",
        description:
          "Review the generated timetable, examine any unallocated work, and evaluate how well the schedule meets your planning requirements.",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Greedy Scheduling",
      "Beam Search",
      "Constraint Optimization",
    ],
    category: "Frontend",
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=868&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    images: [
      {
        id: "1",
        url: "",
        alt: "Goal-to-timetable scheduling engine frontend for planning weekly goals, availability, and commitments",
        isCover: true,
      },
    ],
    links: [
      {
        id: "1",
        label: "Live Demo",
        url: "https://scheduless.netlify.app/",
        type: "demo",
      },
    ],
    challenges:
      "One of the main challenges is translating the scheduling engine's underlying concepts into an interface that users can understand and navigate. The frontend needs to collect different kinds of planning information without making the process overwhelming. The scheduling problem itself also involves competing requirements: allocating enough time to tasks, respecting firm deadlines, working within available hours, and accounting for user preferences. These considerations make it important to distinguish between a schedule that simply fills time slots and one that satisfies meaningful planning objectives.",
    lessons:
      "This stage of the project has helped me think about how algorithmic systems are presented to users. A scheduling algorithm may produce a valid timetable, but the overall experience also depends on how clearly users can define their goals and constraints and understand the resulting schedule. It has reinforced the connection between algorithm design, frontend development, and the practical usability of software.",
    buildNotes:
      "I started this project to explore how computer science concepts could help solve a practical planning problem. After modelling the scheduling domain and implementing greedy scheduling and a beam-search-based optimization approach, I began developing the frontend to make the engine accessible through a user-facing interface. My focus today was translating the scheduling workflow into an experience through which users can provide their planning information and work toward a realistic weekly timetable.",
    whoIsItFor:
      "Students, professionals, independent learners, and anyone balancing multiple goals, deadlines, routines, and commitments who wants a more structured way to plan their week.",
    inspiration:
      "Balancing personal goals, learning new skills, projects, and recurring commitments made me think about whether scheduling could be treated as a computational problem rather than relying entirely on manual planning. I wanted to explore how algorithms could allocate limited time across competing priorities and turn the result into a timetable people could use in everyday life.",
    createdAt: "2026-11-09T09:00:00Z",
    updatedAt: "2026-11-09T17:00:00Z",
    publishedAt: "2026-11-09T17:00:00Z",
  },

  {
    id: "22",
    dayNumber: 22,
    title: "Exploring Constraint Optimization",
    slug: "constraint-optimization-scheduler",
    date: "2026-11-05",
    shortDescription:
      "An exploration of two scheduling algorithms that generate weekly timetables, comparing a greedy approach with an optimizer that explores alternative schedules.",
    problem:
      "Creating a useful timetable involves more than filling available hours. Tasks have different priorities, deadlines, duration requirements, and preferred working times. Fixed commitments and daily limits further restrict what can be scheduled. A scheduling approach that makes decisions one at a time may produce a valid timetable without finding the best trade-off between these competing requirements.",
    solution:
      "I implemented a second scheduling approach using beam search and compared it with my existing greedy scheduling algorithm. The optimizer generates alternative sessions, validates the resulting schedules, evaluates their quality using an objective function, and retains a limited number of promising alternatives for further exploration. I also expanded candidate generation to consider multiple start times and changed the ranking strategy to prioritize deadline success and work coverage before the overall weighted score.",
    features: [
      "Generate weekly timetables from tasks, availability, and fixed commitments",
      "Support task priorities, deadlines, weekly targets, and daily time limits",
      "Respect scheduling constraints such as availability, non-overlapping sessions, and deadline cutoffs",
      "Generate candidate sessions at multiple start times in 30-minute increments",
      "Use a greedy algorithm as a baseline scheduling approach",
      "Explore alternative schedules using beam search",
      "Evaluate schedules using deadline success, work coverage, priority alignment, and preference satisfaction",
      "Rank candidate schedules using lexicographic ordering",
      "Deduplicate equivalent search states",
      "Limit search using configurable beam width and maximum search steps",
      "Generate task allocation summaries showing scheduled and remaining minutes",
      "Compare greedy and optimized schedules using the same test fixture",
      "Measure candidate generation, validation rejections, and state expansions",
      "Document experimental results, trade-offs, and limitations",
    ],
    instructions: [
      {
        id: "1",
        title: "Define the scheduling problem",
        description:
          "Provide tasks with weekly time targets, priorities, deadlines, duration requirements, and optional preferences. Specify weekly availability and fixed commitments.",
      },
      {
        id: "2",
        title: "Generate a baseline timetable",
        description:
          "Run the greedy scheduling algorithm to establish a baseline for comparing how much work can be scheduled and how well the timetable satisfies the scheduling objectives.",
      },
      {
        id: "3",
        title: "Explore alternative schedules",
        description:
          "Run the optimizer, which generates possible sessions, validates candidate schedules, evaluates their quality, and retains a limited set of promising alternatives for subsequent search steps.",
      },
      {
        id: "4",
        title: "Compare the results",
        description:
          "Evaluate both approaches using the same test fixture. Compare scheduled minutes, deadline success, priority alignment, preference satisfaction, and overall weighted score.",
      },
      {
        id: "5",
        title: "Inspect the search",
        description:
          "Review the search statistics to understand how many candidates were generated, how many were rejected, and how many valid state expansions occurred before deduplication.",
      },
    ],
    technologies: [
      "TypeScript",
      "Beam Search",
      "Constraint Validation",
      "Objective Functions",
      "Algorithm Testing",
      "tsx",
    ],
    category: "Algorithms",
    featured: true,
    coverImage: "",
    images: [
      {
        id: "1",
        url: "",
        alt: "Comparison of a greedy scheduling approach and an optimizer that explores alternative weekly timetables",
        isCover: true,
      },
    ],
    links: [
      {
        id: "1",
        label: "Source Code",
        url: "https://github.com/ToluwanimiO/greedy-scheduler",
        type: "github",
      },
    ],
    challenges:
      "One challenge was deciding how to compare schedules when several objectives compete. A schedule could achieve a higher weighted score while scheduling less of the requested work. To address this, I changed the search-state comparator to prioritize deadline success first, work coverage second, and the weighted score third. I also expanded candidate generation to consider multiple start times. The resulting timetable did not change after this expansion, which reinforced the importance of evaluating code changes through observed results rather than assuming that generating more candidates automatically improves the outcome.",
    lessons:
      "I learned to distinguish hard constraints, which determine whether a timetable is valid, from soft objectives, which determine whether one valid timetable is preferable to another. I also explored how beam search preserves promising alternatives while limiting the amount of search performed. Comparing the algorithms showed that both could schedule all requested work in my test fixture, while the optimizer achieved better preference satisfaction and a higher weighted score. The experiment also highlighted that success on one fixture does not prove global optimality or guarantee that the optimizer will always outperform the greedy approach.",
    buildNotes:
      "I started with a greedy scheduling algorithm and wanted to investigate whether exploring alternative scheduling decisions could produce better results. I implemented a beam-search optimizer, introduced an objective function, expanded candidate generation to consider multiple start times, and changed the ranking strategy to prioritize deadline success and work coverage. I then ran both algorithms against the same test fixture and added counters to measure the optimizer's search activity.",
    whoIsItFor:
      "Developers interested in scheduling systems, algorithm design, constraint optimization, search strategies, and the trade-offs involved in building software that must balance multiple competing objectives.",
    inspiration:
      "While building a goals-to-timetable application, I became interested in a deeper question: how can an algorithm generate a timetable that does more than fit tasks into available time? I wanted to understand how different scheduling strategies make trade-offs and whether exploring alternative solutions could improve the results.",
    technicalDive: {
      title: "Technical Deep Dive: From Greedy Scheduling to Beam Search",
      introduction:
        "This experiment investigates two approaches to weekly timetable generation. The greedy algorithm provides a baseline, while the optimizer uses bounded search to explore alternative schedules. Both are evaluated against the same test fixture.",
      sections: [
        {
          id: "1",
          title: "Formulating the scheduling problem",
          content:
            "The scheduler must satisfy hard constraints before considering schedule quality. These include availability, non-overlapping sessions, fixed commitments, weekly task targets, daily limits, minimum session durations, and firm deadline cutoffs. Soft objectives determine how to compare valid schedules based on deadline success, work coverage, priority alignment, and preference satisfaction.",
        },
        {
          id: "2",
          title: "Defining the objective function",
          content:
            "The scoreSchedule function evaluates four metrics. Deadline success measures the priority-weighted completion of tasks with deadlines. Work coverage measures scheduled minutes against requested minutes. Priority alignment measures how much scheduled time is allocated to higher-priority tasks. Preference satisfaction measures how well scheduled sessions match preferred days and times. The current weights are 0.40, 0.30, 0.20, and 0.10 respectively. These are design choices for the experiment, not proven optimal weights.",
        },
        {
          id: "3",
          title: "Implementing beam search",
          content:
            "The optimizer begins with an empty schedule. For each state in the current beam, it generates candidate sessions for each task, validates the resulting schedule, scores valid states, and deduplicates them using a state key. It then retains the best-ranked states for the next iteration. The current search uses a beam width of 80 and a maximum of 30 search steps.",
        },
        {
          id: "4",
          title: "Expanding candidate generation",
          content:
            "Candidate generation considers multiple start times within each free window, advancing in 30-minute increments. Candidate durations are limited by the remaining task target, daily allowance, available window, and deadline. Unsplittable tasks must fit as one uninterrupted session, while splittable tasks must respect their minimum session duration. Expanding the start-time options did not change the best timetable in the current fixture.",
        },
        {
          id: "5",
          title: "Introducing lexicographic ranking",
          content:
            "Instead of relying only on the weighted score, the comparator first prefers higher deadline success, then higher work coverage, and finally a higher weighted score. This ensures that the search ranking reflects the chosen hierarchy of objectives. It also affects which states survive the beam-width limit.",
        },
        {
          id: "6",
          title: "Experimental setup",
          content:
            "The test fixture contains four tasks: interview preparation (180 minutes), system design (120 minutes), DevOps (180 minutes), and project work (120 minutes). The total requested workload is 600 minutes. The fixture includes task priorities, deadlines, daily limits, preferred times, weekly availability, and fixed commitments. Both algorithms use the same input.",
        },
        {
          id: "7",
          title: "Results and comparison",
          content:
            "Both algorithms scheduled all 600 requested minutes and achieved a deadline-success metric of 1.0 and priority-alignment metric of 0.70. The greedy algorithm achieved preference satisfaction of 0.60 and a weighted score of approximately 90.0. The optimizer achieved preference satisfaction of 0.75 and a weighted score of 91.5. On this fixture, the optimizer improved preference satisfaction while preserving work coverage and deadline success.",
        },
        {
          id: "8",
          title: "Search statistics",
          content:
            "The latest optimizer run generated 7,909 candidates, rejected zero candidates during schedule validation, and produced 7,909 valid state expansions before deduplication. The final beam contained 80 states. The best schedule covered 600 minutes and achieved a weighted score of 91.5. These counters are cumulative across the search and do not represent unique complete timetables.",
        },
        {
          id: "9",
          title: "Limitations and next experiments",
          content:
            "The results come from one test fixture and do not establish global optimality. Zero validation rejections does not prove that every constraint is implemented correctly. Further work includes comparing beam widths of 40, 80, and 160, adding more challenging fixtures, measuring unique-state counts and runtime, and testing hard constraints with deliberately invalid schedules.",
        },
      ],
      objectiveWeights: {
        deadlineSuccess: 0.4,
        workCoverage: 0.3,
        priorityAlignment: 0.2,
        preferenceSatisfaction: 0.1,
      },
      searchConfiguration: {
        beamWidth: 80,
        maxSearchSteps: 30,
        candidateStartIntervalMinutes: 30,
      },
      searchStatistics: {
        candidatesGenerated: 7909,
        candidatesRejected: 0,
        validStateExpansionsBeforeDeduplication: 7909,
        finalBeamSize: 80,
        bestScheduledMinutes: 600,
        bestWeightedScore: 91.5,
      },
      comparison: [
        {
          metric: "Scheduled minutes",
          greedy: "600",
          optimizer: "600",
        },
        {
          metric: "Deadline success",
          greedy: "1.0",
          optimizer: "1.0",
        },
        {
          metric: "Work coverage",
          greedy: "1.0",
          optimizer: "1.0",
        },
        {
          metric: "Priority alignment",
          greedy: "0.70",
          optimizer: "0.70",
        },
        {
          metric: "Preference satisfaction",
          greedy: "0.60",
          optimizer: "0.75",
        },
        {
          metric: "Weighted score",
          greedy: "~90.0",
          optimizer: "91.5",
        },
      ],
      codeReferences: [
        {
          label: "Optimizer implementation",
          path: "src/scheduler/optimizerScheduler.ts",
        },
        {
          label: "Objective function",
          path: "src/scheduler/objective.ts",
        },
        {
          label: "Greedy baseline",
          path: "src/scheduler/greedyScheduler.ts",
        },
        {
          label: "Optimizer test fixture",
          path: "tests/fixtures/optimizer-test-input.ts",
        },
        {
          label: "Comparison runner",
          path: "src/runOptimizer.ts",
        },
      ],
      runCommand: "npx tsx src/runOptimizer.ts",
      conclusion:
        "The experiment demonstrates that beam search can find a better-scoring schedule than the greedy baseline on this fixture. It does not prove that the optimizer always outperforms greedy scheduling or finds a globally optimal timetable. The next step is to test how search width and problem complexity affect solution quality and runtime.",
    },
    createdAt: "2026-11-05T09:00:00Z",
    updatedAt: "2026-11-05T17:00:00Z",
    publishedAt: "2026-11-05T17:00:00Z",
  },
  {
    id: "21",
    dayNumber: 21,
    title: "Building a Greedy Scheduling Algorithm",
    slug: "building-a-greedy-scheduling-algorithm",
    date: "2026-11-06",
    shortDescription:
      "A TypeScript scheduling algorithm that allocates tasks to available time slots using priority-first, deadline-first, and balanced-progress strategies while enforcing scheduling constraints.",
    problem:
      "Once the scheduling problem was modelled, the next challenge was turning its rules into an algorithm that could allocate work to available time slots. Fixed commitments reduce available time, deadlines restrict when tasks can be scheduled, and minimum session durations and daily limits affect how work can be distributed. The engine also needs to explain when requested work cannot be fully accommodated.",
    solution:
      "I implemented a greedy scheduling algorithm that incrementally allocates task sessions according to a selected strategy. The engine builds free time windows by subtracting fixed commitments from availability, applies scheduling constraints, and tracks scheduled work, remaining work, and reasons tasks could not be fully scheduled. I also wrote tests to evaluate the algorithm's behaviour and investigate issues in balanced-progress allocation and firm-deadline testing.",
    features: [
      "Build free time windows by subtracting fixed commitments from availability",
      "Allocate task sessions using priority-first, deadline-first, and balanced-progress strategies",
      "Enforce minimum session durations and daily work limits",
      "Respect firm deadlines when allocating task sessions",
      "Track scheduled minutes and remaining work",
      "Record reasons tasks cannot be fully scheduled",
      "Validate generated schedules against hard constraints",
      "Test scheduling behaviour and investigate allocation edge cases",
    ],
    instructions: [],
    technologies: [
      "TypeScript",
      "Greedy Algorithms",
      "Time-Interval Modeling",
      "Constraint Validation",
      "Unit Testing",
    ],
    category: "Algorithms",
    featured: false,
    coverImage: "",
    images: [
      {
        id: "1",
        url: "",
        alt: "Greedy scheduling algorithm allocating tasks across available weekly time slots",
        isCover: true,
      },
    ],
    links: [
      {
        id: "1",
        label: "Source Code",
        url: "https://github.com/ToluwanimiO/greedy-scheduler",
        type: "github",
      },
    ],
    challenges:
      "A key challenge was translating time availability and task requirements into allocation decisions that respect all hard constraints. Testing exposed issues that needed investigation: the balanced-progress strategy was not distributing time as intended, and the firm-deadline test required more appropriate input to verify the expected behaviour. Investigating these cases reinforced the importance of distinguishing between a test setup problem and an actual implementation defect.",
    lessons:
      "I learned that meaningful tests depend on accurately modelling the behaviour being tested, including the inputs and constraints that determine the expected result.",
    buildNotes:
      "I implemented the core greedy scheduling engine, including free-window construction, task allocation, constraint enforcement, and allocation-result tracking. I added three strategies—priority-first, deadline-first, and balanced-progress—and wrote tests to evaluate the engine. I then investigated unexpected balanced-progress behaviour and refined the firm-deadline test setup. This established a baseline for comparing scheduling strategies and exploring optimization approaches.",
    whoIsItFor:
      "Developers and computer science learners interested in greedy algorithms, scheduling problems, constraint handling, and automated testing.",
    inspiration: "",
    createdAt: "2026-11-06T09:00:00Z",
    updatedAt: "2026-11-06T17:00:00Z",
    publishedAt: "2026-11-06T17:00:00Z",
  },
  {
    id: "20",
    dayNumber: 20,
    title: "Modeling a Scheduling Problem",
    slug: "modeling-a-scheduling-problem",
    date: "2026-11-05",
    shortDescription:
      "A TypeScript domain model for a goal-to-timetable scheduling engine, defining task requirements, availability, constraints, and scheduling objectives before algorithm implementation.",
    problem:
      "Turning personal goals, deadlines, and available time into a realistic weekly timetable is more complex than assigning tasks to empty time slots. Tasks have different priorities, weekly duration targets, deadlines, and session-splitting requirements, while users have availability windows and recurring commitments. Without a clear model of feasibility and schedule quality, it is difficult to implement or evaluate a scheduling algorithm reliably.",
    solution:
      "I began designing a goal-to-timetable scheduling engine by defining its domain model and the rules that determine whether a schedule is valid and how its quality should be evaluated. I distinguished hard constraints, which determine feasibility, from soft preferences, which influence the quality of a feasible timetable. I also modelled the core entities and scheduling strategies in TypeScript, establishing a foundation for implementing and comparing scheduling algorithms.",
    features: [
      "Model goals and their associated tasks",
      "Represent weekly task-duration targets and optional daily limits",
      "Define task priorities and firm deadlines",
      "Represent minimum session durations and task-splitting requirements",
      "Model weekly availability windows",
      "Represent recurring routines and fixed commitments",
      "Distinguish hard constraints from soft scheduling preferences",
      "Define scheduling strategies for priority-first, deadline-first, and balanced-progress approaches",
      "Establish rules for preventing overlapping sessions",
      "Define feasibility requirements for availability, daily limits, and deadlines",
      "Model allocation results for scheduled and unallocated work",
      "Establish evaluation criteria for comparing scheduling approaches",
    ],
    instructions: [],
    technologies: [
      "TypeScript",
      "Domain Modeling",
      "Constraint Modeling",
      "Algorithm Design",
      "Software Engineering",
    ],
    category: "Algorithms",
    featured: false,
    coverImage: "",
    images: [
      {
        id: "1",
        url: "",
        alt: "TypeScript domain model for a goal-to-timetable scheduling engine",
        isCover: true,
      },
    ],
    links: [],
    lessons:
      "This exercise reinforced the importance of modelling a problem before choosing an algorithm. Explicit domain types, constraints, and evaluation criteria provide a clearer foundation for implementation and testing. It also highlighted the distinction between finding a feasible solution and finding a high-quality one: a schedule must first respect the rules, then be evaluated according to the objectives it is intended to serve.",
    buildNotes:
      "Today, I started designing the goal-to-timetable scheduling engine. Before implementing an algorithm, I defined what a valid schedule should look like and how to evaluate its quality. I modelled tasks, weekly targets, priorities, deadlines, session requirements, availability, fixed commitments, and scheduling strategies in TypeScript. I also separated hard constraints from soft preferences to distinguish schedule feasibility from schedule quality. The next step is to implement a greedy scheduling algorithm, establish a baseline, and explore where constraint optimization could improve its decisions.",
    whoIsItFor:
      "Software engineers, computer science students, and developers interested in algorithm design, domain modeling, constraint-based scheduling, and translating real-world planning problems into computational systems.",
    inspiration:
      "Balancing personal goals, learning targets, projects, deadlines, and recurring commitments made me curious about whether weekly planning could be treated as a computational scheduling problem. Rather than immediately building an interface or writing an algorithm, I wanted to understand the problem itself, define its constraints, and establish what a useful solution should achieve.",
    createdAt: "2026-11-05T09:00:00Z",
    updatedAt: "2026-11-05T17:00:00Z",
    publishedAt: "2026-11-05T17:00:00Z",
  },
  {
    id: "19",
    dayNumber: 19,
    title: "Birthday Calendar Importer",
    slug: "birthday-calendar-importer",
    date: "2026-10-29",
    shortDescription:
      "A tool that converts birthdays stored in Excel or CSV spreadsheets into recurring calendar events that can be imported into a calendar app.",
    problem:
      "Remembering birthdays can be difficult, especially when the information is already stored in spreadsheets for teams, student associations, volunteer groups, or personal contacts. Manually creating calendar events for each person can be tedious, particularly when the list contains many people.",
    solution:
      "A birthday calendar importer that allows users to upload an Excel or CSV file, select the columns containing names and birthdays, review and correct the imported records, and download an ICS calendar file. The exported events are configured as recurring, all-day birthday events that users can import into a compatible calendar application.",
    features: [
      "Upload Excel and CSV files containing names and birthdays",
      "Select the worksheet to import when a workbook contains multiple sheets",
      "Map spreadsheet columns to names and birthdays",
      "Choose the date format for numeric dates",
      "Preview imported birthday records before exporting",
      "Edit names and correct birthday entries",
      "Validate birthday dates and flag records that need attention",
      "Identify possible duplicate entries",
      "Choose which valid birthdays to include in the export",
      "Customize the calendar name and optional event title prefix",
      "Optionally include birth years in event titles",
      "Download an ICS file containing recurring, all-day birthday events",
      "Use sample data to explore the workflow",
    ],
    instructions: [
      {
        id: "1",
        title: "Upload a spreadsheet",
        description:
          "Upload an Excel workbook or CSV file containing the names and birthdays you want to add to your calendar. You can also use sample data to explore the app.",
      },
      {
        id: "2",
        title: "Map the columns",
        description:
          "Choose the worksheet if necessary, then select the columns containing names and birthdays. Specify the date format used for numeric dates.",
      },
      {
        id: "3",
        title: "Review the birthdays",
        description:
          "Preview the imported records, correct names or dates, check validation warnings, and review possible duplicates before exporting.",
      },
      {
        id: "4",
        title: "Configure the calendar",
        description:
          "Choose a calendar name, optionally add a prefix to event titles, and decide whether to include birth years in the titles.",
      },
      {
        id: "5",
        title: "Export and import",
        description:
          "Download the ICS file containing your selected birthdays, then use your calendar application's import feature to add the events.",
      },
    ],
    technologies: [
      "React",
      "ICS Calendar File Generation",

      "TypeScript",
      "Vite",
      "Excel/CSV Parsing",
    ],
    category: "Frontend",
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1544155892-b2b6c64204fc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    images: [
      {
        id: "1",
        url: "",
        alt: "Birthday Calendar Importer interface for converting spreadsheet birthdays into calendar events",
        isCover: true,
      },
    ],
    links: [
      {
        id: "1",
        label: "Live Demo",
        url: "https://birthday-importer.netlify.app/",
        type: "demo",
      },
    ],
    challenges:
      "Handling dates consistently was an important part of the build. Spreadsheet dates can appear in different formats, and numeric dates such as 03/04/1998 can mean different days depending on the date convention being used. The importer therefore needed to let users choose the date order and review records before exporting them. Another consideration was generating calendar events that recur annually without requiring users to create each year's event manually.",
    lessons:
      "I explored the practical details of importing structured data from Excel and CSV files, validating user-provided dates, and generating calendar files that can be used outside the application. I also considered how previewing, editing, and flagging potentially problematic records can help users catch errors before exporting.",
    buildNotes:
      "The idea came from missing someone's birthday and realizing I already had a spreadsheet containing the details of people in a unit I once headed. Instead of manually creating calendar events one by one, I decided to build a tool that could turn the existing spreadsheet into an importable calendar file. I wanted the workflow to remain simple: upload, map columns, review the data, and export.",
    whoIsItFor:
      "Team leads, HR teams, student leaders, community and volunteer coordinators, and anyone who keeps birthday information in a spreadsheet and wants to transfer it into a calendar.",
    inspiration:
      "I recently missed someone's birthday and started thinking about how many other birthdays I might have forgotten. Since I already had an Excel spreadsheet containing some of those details, I wondered why I couldn't simply add them to my calendar. That small, personal problem inspired this build.",
    createdAt: "2026-10-29T09:00:00Z",
    updatedAt: "2026-10-29T17:00:00Z",
    publishedAt: "2026-10-29T17:00:00Z",
  },
  {
    id: "18",
    dayNumber: 18,
    title: "Inflation Simulator",
    slug: "inflation-simulator",
    date: "2026-10-28",
    shortDescription:
      "An interactive inflation simulator that uses IMF data to explore how inflation could affect money's purchasing power over time.",
    problem:
      "It can be difficult to understand how inflation affects the future purchasing power of money. Inflation rates are often presented as percentages, making it harder to see their cumulative effect on the value of an amount over several years.",
    solution:
      "An interactive inflation simulator that uses inflation data from the International Monetary Fund (IMF), including projections for future years, to estimate how purchasing power changes over time. Users can select a country, enter an amount, choose a target year, and adjust individual annual inflation rates to explore different scenarios.",
    features: [
      "Select a country to explore its inflation rates",
      "Enter an amount to simulate its future purchasing power",
      "Choose a target year for the projection",
      "Use initial annual inflation rates sourced from IMF data",
      "Explore the cumulative effect of inflation over multiple years",
      "Adjust individual annual inflation rates to model different scenarios",
      "Recalculate purchasing power based on updated inflation assumptions",
      "Visualise inflation and its impact over time",
      "Display IMF source metadata where available",
    ],
    instructions: [
      {
        id: "1",
        title: "Open the simulator",
        description:
          "Visit the Inflation Simulator to explore how inflation could affect the purchasing power of your money.",
      },
      {
        id: "2",
        title: "Choose a country and amount",
        description:
          "Select a country, enter the amount you want to explore, and choose a target year.",
      },
      {
        id: "3",
        title: "View the projection",
        description:
          "See how the selected country's annual inflation rates could affect the purchasing power of your money over time.",
      },
      {
        id: "4",
        title: "Adjust the inflation rates",
        description:
          "Edit individual annual inflation rates to explore how different assumptions affect the results.",
      },
      {
        id: "5",
        title: "Explore different scenarios",
        description:
          "Experiment with different rates and compare how inflation assumptions change the projected purchasing power of your money.",
      },
    ],
    technologies: [
      "React",
      "IMF DataMapper API",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Recharts",
    ],
    category: "Frontend",
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1702099630732-cdf2ba90e730?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    images: [
      {
        id: "1",
        url: "",
        alt: "Inflation Simulator showing projected purchasing power based on annual inflation rates",
        isCover: true,
      },
    ],
    links: [
      {
        id: "1",
        label: "Live Demo",
        url: "https://inflation-explorer.netlify.app/",
        type: "demo",
      },
    ],
    challenges:
      "Getting the IMF data to work reliably in the deployed app was a challenge. The API requests worked locally but returned HTTP 403 errors when the Netlify Function made them in production. Direct browser requests also ran into CORS restrictions, and adding a User-Agent header did not resolve the issue. Since the app did not need the latest data on every request, I changed my approach: I saved an IMF data response as a static JSON file so the app could use a local snapshot instead of depending on live API requests at runtime.",
    lessons:
      "I learned more about integrating external data sources, handling API access restrictions and CORS, and thinking about deployment environments when designing an application. I also explored how a static data snapshot can reduce runtime dependencies when real-time updates are unnecessary.",
    buildNotes:
      "I wanted to explore how software could make economic data easier to understand and interact with. After connecting the app to the IMF DataMapper API, I worked on making inflation projections adjustable so users could explore how different annual rates affect purchasing power. Working through the deployment issue also reminded me that getting something to work locally is only one part of building a reliable application.",
    whoIsItFor:
      "People who want to understand how inflation could affect their money's purchasing power and explore different inflation scenarios for a selected country.",
    inspiration:
      "I wanted to make economic data more interactive and easier to understand by turning inflation percentages into a practical simulation of how the purchasing power of money changes over time.",
    createdAt: "2026-10-28T09:00:00Z",
    updatedAt: "2026-10-28T10:00:00Z",
    publishedAt: "2026-10-28T10:00:00Z",
  },

  {
    id: "17",
    dayNumber: 17,
    title: "Financial Future Simulator",
    slug: "financial-future-simulator",
    date: "2026-10-27",
    shortDescription:
      "An interactive financial simulator that projects savings over time and lets users explore how changes in income and expenses affect their savings goals.",
    problem:
      "Planning towards a savings goal can be difficult when it is unclear how current savings, monthly income, expenses, and interest rates affect the time needed to reach a target. Static calculators provide an estimate but make it harder to explore how different financial scenarios could change the outcome.",
    solution:
      "An interactive financial simulator that projects savings over time based on user-defined financial inputs. It estimates how long it could take to reach a savings goal and uses an interactive chart that lets users drag income and expense points to adjust assumptions and immediately see how the projection changes.",
    features: [
      "Enter starting savings and a target savings goal",
      "Set monthly income and expenses",
      "Specify an annual interest rate",
      "Project savings balances over time",
      "Estimate the number of months needed to reach a savings goal",
      "Visualise income, expenses, and savings on an interactive chart",
      "Drag income and expense points directly on the graph to adjust financial assumptions",
      "Recalculate savings projections when assumptions change",
      "Display a savings goal reference line on the chart",
      "Handle simulations where the savings goal is not reached within the projected period",
    ],
    instructions: [
      {
        id: "1",
        title: "Open the simulator",
        description:
          "Visit the Financial Future Simulator to explore how your financial situation could affect your savings goals.",
      },
      {
        id: "2",
        title: "Enter your financial details",
        description:
          "Provide your starting savings, savings goal, monthly income, monthly expenses, and annual interest rate.",
      },
      {
        id: "3",
        title: "View your financial projection",
        description:
          "Explore the chart to see how your income, expenses, and savings balance may change over time, including your projected timeline for reaching your goal.",
      },
      {
        id: "4",
        title: "Experiment with different scenarios",
        description:
          "Drag the income and expense points on the graph to change your assumptions and observe how the savings projection responds.",
      },
      {
        id: "5",
        title: "Compare possible outcomes",
        description:
          "Try different income and expense scenarios to explore how they could affect your savings growth and the time needed to reach your target.",
      },
    ],
    technologies: [
      "React",
      "Apache ECharts",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "echarts-for-react",
    ],
    category: "Frontend",
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1767424412548-1a1ac7f4b9bc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    images: [
      {
        id: "1",
        url: "",
        alt: "Financial Future Simulator showing savings projections and interactive income and expense charts",
        isCover: true,
      },
    ],
    links: [
      {
        id: "1",
        label: "Live Demo",
        url: "https://financial-future-simulator.netlify.app/",
        type: "demo",
      },
      {
        id: "2",
        label: "GitHub Repository",
        url: "https://github.com/ToluwanimiO/financial-future-simulator",
        type: "github",
      },
    ],
    challenges:
      "Making the chart draggable was the main technical challenge. The Apache ECharts documentation demo used a different structure from mine, so directly applying its approach wasn't enough. I had to understand how the demo mapped draggable elements to chart data, identify what needed to change for my dynamically generated financial projections, and work out how to position the handles and translate drag movements into updated income and expense values. I then connected those changes to the simulation logic so each interaction would recalculate the projections. It involved more than implementing a demo; I had to understand the underlying approach and adapt it to my specific use case.",
    lessons:
      "I learnt how to visualise results with Apache ECharts. I also learned how to connect draggable chart graphics to application state so users can manipulate data visually and see the effects of their changes.",
    buildNotes:
      "I wanted to explore building something beyond interfaces that primarily display information. I explored a few ideas before settling on a Financial Future Simulator: a tool where code could represent a real-world situation, simulate how it might change, and help people explore different possibilities. I particularly enjoyed figuring out how to make the graph interactive and connect chart interactions to the simulation logic.",
    whoIsItFor:
      "People who want to explore how their current savings, income, expenses, and interest assumptions could affect their progress towards a savings goal.",
    inspiration:
      "I wanted to explore a different kind of software project: one that models a real-world situation, runs calculations, and lets users experiment with different scenarios instead of simply displaying information.",
    createdAt: "2026-10-27T09:00:00Z",
    updatedAt: "2026-10-27T10:00:00Z",
    publishedAt: "2026-10-27T10:00:00Z",
  },

  {
    id: "16",
    dayNumber: 16,
    title: "Packwell (AI-Powered)",
    slug: "packwell-ai-packing-list",
    date: "2026-10-21",
    shortDescription:
      "A packing checklist app that uses AI to suggest items to pack based on your travel plans.",
    problem:
      "Packing for a trip can be overwhelming, especially when deciding what to bring for different destinations, activities, and travel needs. Starting a packing list from scratch can also mean forgetting important items.",
    solution:
      "A packing checklist app that lets users describe their travel plans and generate a suggested packing list with AI. Users can review the suggestions, uncheck items they do not need, and add the selected items to their checklist.",
    features: [
      "Generate packing lists based on travel plans using AI",
      "Review suggested items before adding them to a checklist",
      "Select or deselect individual suggested items",
      "Create and manage trip-specific packing lists",
      "Maintain a reusable default packing list",
      "Start new trips with items from the default list",
      "Add, check off, and manage packing items",
      "Use the app as an installable Progressive Web App",
    ],
    instructions: [
      {
        id: "1",
        title: "Open Packwell",
        description:
          "Visit the Packwell app to create a packing list for your trip.",
      },
      {
        id: "2",
        title: "Create a trip",
        description:
          "Add a trip with a name to create a checklist for the items you want to pack.",
      },
      {
        id: "3",
        title: "Generate a packing list with AI",
        description:
          "Describe your travel plans and let AI suggest items you may need. You can also use your own checklist instead.",
      },
      {
        id: "4",
        title: "Review the suggestions",
        description:
          "Go through the generated items and uncheck anything you do not need before adding the selected items to your checklist.",
      },
      {
        id: "5",
        title: "Pack and track your items",
        description:
          "Use the checklist to mark items as packed and keep track of what you still need to pack.",
      },
    ],
    technologies: [
      "React",
      "Gemini API",
      "TypeScript",
      "Vite",
      "Tailwind CSS",

      "Netlify Functions",
      "Progressive Web Apps",
    ],
    category: "Frontend",
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1779364815233-84ec09c6d6d5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1553531384-411a247ccd73?w=1200&h=800&fit=crop",
        alt: "Travel bag and packing essentials representing the Packwell packing checklist app",
        isCover: true,
      },
    ],
    links: [
      {
        id: "1",
        label: "Live Demo",
        url: "https://pack-check-list.netlify.app/",
        type: "demo",
      },
    ],
    challenges:
      "Integrating AI-generated packing suggestions into an existing checklist workflow. I had to consider how to handle API requests through a serverless function, process the generated items, and let users review and select suggestions before adding them to their lists.",
    lessons:
      "I learned more about integrating AI into a web application using a serverless function and handling the interaction between the frontend, backend logic, and an external AI API. I also explored how AI-generated data can fit into an existing user workflow rather than being an isolated feature.",
    buildNotes:
      "I wanted to make packing easier by letting users describe their travel plans instead of having to think of every item themselves. I also wanted users to remain in control, so they can review AI suggestions and choose what to add to their checklist.",
    whoIsItFor:
      "Travellers who want an easier way to organise their packing, create trip-specific checklists, and avoid forgetting essential items.",
    inspiration:
      "The idea came from exploring how AI could make an everyday task like preparing for a trip easier while still allowing users to customise their packing lists.",
    createdAt: "2026-10-21T09:00:00Z",
    updatedAt: "2026-10-21T21:00:00Z",
    publishedAt: "2026-10-21T21:00:00Z",
  },
  {
    id: "15",
    dayNumber: 15,
    title: "Packwell",
    slug: "packwell-packing-checklist",
    date: "2026-10-20",
    shortDescription:
      "A packing checklist app that helps users organise trip-specific packing lists and reuse items from a default packing list.",
    problem:
      "Preparing for a trip often involves creating a packing list from scratch. Many items are needed across multiple trips, so repeatedly adding the same essentials can be tedious and make it easier to forget something important.",
    solution:
      "A packing checklist app that lets users create and manage trip-specific lists while maintaining a reusable default packing list. When creating a new trip, users can automatically populate their checklist with items from their default list and customise it for that trip.",
    features: [
      "Create trips with individual packing checklists",
      "View and open created trips",
      "Delete trips",
      "Add and manage packing items",
      "Mark items as packed",
      "Maintain a reusable default packing list",
      "Automatically populate new trips with items from the default list",
      "Customise packing items for individual trips",
      "Install and use the app as a Progressive Web App",
    ],
    instructions: [
      {
        id: "1",
        title: "Open Packwell",
        description:
          "Visit Packwell to create a trip or manage your reusable default packing list.",
      },
      {
        id: "2",
        title: "Create your default packing list",
        description:
          "Add items you commonly take on trips so you can reuse them when preparing for future journeys.",
      },
      {
        id: "3",
        title: "Create a trip",
        description:
          "Give your trip a name. If your default packing list contains items, they will be added to the new trip's checklist.",
      },
      {
        id: "4",
        title: "Customise your checklist",
        description:
          "Add any trip-specific items you need and adjust the checklist to suit your plans.",
      },
      {
        id: "5",
        title: "Track your packing",
        description:
          "Mark items as packed as you prepare for your trip, and use the checklist to keep track of what remains.",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Progressive Web Apps",
    ],
    category: "Frontend",
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1557183200-f0fec6612738?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1553531384-411a247ccd73?w=1200&h=800&fit=crop",
        alt: "Travel bag and packing essentials representing the Packwell packing checklist app",
        isCover: true,
      },
    ],
    links: [
      {
        id: "1",
        label: "Live Demo",
        url: "https://pack-check-list.netlify.app/",
        type: "demo",
      },
    ],
    challenges:
      "The technical implementation wasn't particularly difficult, but finding the energy to keep building after a long, exhausting day was the real challenge.",
    lessons: "I strengthened my understanding of React state management",
    buildNotes:
      "I wanted to reduce the effort involved in preparing for multiple trips by letting users reuse their commonly packed items instead of recreating the same checklist every time.",
    whoIsItFor:
      "Travellers who want to organise their packing, reuse common items across trips, and keep track of what they have packed.",
    inspiration:
      "The idea came from the repetitive process of preparing packing lists for different trips and the opportunity to make that process easier with reusable checklists.",
    createdAt: "2026-10-20T09:00:00Z",
    updatedAt: "2026-10-20T21:00:00Z",
    publishedAt: "2026-10-20T21:00:00Z",
  },
  {
    id: "14",
    dayNumber: 14,
    title: "TimeTrail Update",
    slug: "timetrail-floating-timer",
    date: "2026-10-16",
    shortDescription:
      "An update to TimeTrail that makes it easier to keep track of time with a floating desktop timer and mobile notifications.",
    problem:
      "When tracking time spent on an activity, it is easy to forget to pause the timer when switching tasks or leaving the app. Having to return to the main app just to check or pause a timer adds unnecessary friction.",
    solution:
      "An update to TimeTrail that lets desktop users keep an active timer visible in a floating Picture-in-Picture window and gives mobile PWA users notifications they can tap to return to their active timer.",
    features: [
      "Floating desktop timer using Picture-in-Picture",
      "Keep the timer visible while switching tabs or windows",
      "Pause an active timer from the floating window",
      "Notifications on mobile app when a timer starts",
      "Return to the active timer by tapping a notification",
      "Pause an active session from the main timer screen",
    ],
    instructions: [
      {
        id: "1",
        title: "Open TimeTrail",
        description:
          "Visit the TimeTrail app and open an activity you want to track.",
      },
      {
        id: "2",
        title: "Start a timer",
        description:
          "Start tracking your activity. On mobile, TimeTrail sends a notification to help you return to your active timer.",
      },
      {
        id: "3",
        title: "Use the floating timer on desktop",
        description:
          "Open the Picture-in-Picture timer to keep your timer visible while you switch tabs or work in other windows.",
      },
      {
        id: "4",
        title: "Pause your session",
        description:
          "On desktop, pause directly from the floating timer. On mobile, tap the notification to return to the active timer and pause your session.",
      },
    ],
    technologies: [
      "React",
      "Picture-in-Picture API",
      "TypeScript",
      "Vite",
      "vite-plugin-pwa",
      "Service Workers",
      "Notifications API",
    ],
    category: "Frontend",
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop",
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop",
        alt: "Desktop workspace representing the TimeTrail floating timer update",
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
      "Finding ways to make the active timer accessible outside the main app while working within the capabilities of web technologies. Desktop Picture-in-Picture provides a floating timer experience, while mobile PWA notifications offer a way to return to the active timer without providing the same floating-window functionality as native apps.",
    lessons:
      "This update helped me better understand the capabilities and limitations of Progressive Web Apps. I explored Picture-in-Picture for a floating desktop timer and learned more about notifications, service workers, and the differences between what web apps and native apps can do in the background.",
    buildNotes:
      "This update was inspired by feedback from someone using TimeTrail who mentioned sometimes forgetting to pause a timer after starting an activity. I wanted to make the timer easier to access without requiring users to return to the main app every time.",
    whoIsItFor:
      "TimeTrail users who want to keep track of their activities while switching between apps, browser tabs, or other tasks.",
    inspiration:
      "Feedback from a TimeTrail user prompted me to explore ways to make the timer more accessible outside the main app and reduce the friction involved in pausing a session.",
    createdAt: "2026-10-16T09:00:00Z",
    updatedAt: "2026-10-16T21:00:00Z",
    publishedAt: "2026-10-16T21:00:00Z",
  },
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
      "Supabase",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "PostgreSQL",
      "Supabase Auth",
      "Lucide React",
      "vite-plugin-pwa",
      "Google Calendar Event Links",
    ],
    category: "Fullstack",
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1758502033995-e52a218738ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
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
    id: "12",
    dayNumber: 12,
    title: "From Idea to Prototype",
    slug: "idea-to-prototype",
    date: "2026-10-16",
    shortDescription:
      "A product discovery and prototyping session focused on understanding a problem, exploring possible solutions, and thinking through the user experience before writing code.",
    problem:
      "Jumping straight into coding without fully understanding a problem or considering how people will interact with a solution can lead to unnecessary complexity and products that do not adequately address users' needs.",
    solution:
      "Dedicated time to brainstorming, exploring possible approaches, mapping out the user flow, and prototyping ideas before committing to implementation.",
    features: [
      "Brainstorming and exploring possible solutions",
      "Thinking through the problem before implementation",
      "Mapping out the intended user flow",
      "Prototyping to explore and communicate ideas",
      "Evaluating the user experience before writing code",
    ],
    instructions: [],
    technologies: [],
    category: "Product Design",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    images: [],
    links: [],
    challenges:
      "Resisting the urge to jump straight into coding and instead spending time thinking through the problem, considering different approaches, and working out how the intended experience should flow.",
    lessons:
      "Building a solution involves more than writing code. Understanding the problem, considering the people experiencing it, exploring alternatives, and thinking through the user experience are essential parts of the process. Sometimes, the most important work happens before writing a single line of code.",
    buildNotes:
      "I probably wrote fewer than 50 lines of code today. Most of my time went into brainstorming, thinking through the user flow, and prototyping. This was a reminder that progress is not always measured by how much code is written.",
    whoIsItFor:
      "Developers, designers, and anyone building digital products who wants to approach problem-solving more intentionally before implementation.",
    inspiration:
      "The realization that building a meaningful solution starts with understanding the problem and thinking through the best approach, not immediately opening a code editor.",
    createdAt: "2026-10-16T09:00:00Z",
    updatedAt: "2026-10-16T21:00:00Z",
    publishedAt: "2026-10-16T21:00:00Z",
  },
  {
    id: "11",
    dayNumber: 11,
    title: "Notification System",
    slug: "notification-system",
    date: "2026-10-13",
    shortDescription:
      "A backend notification system that allows applications to create, retrieve, and mark notifications as read, with MongoDB for persistent storage.",
    problem:
      "Curiosity about how notifications work behind the scenes and a desire to understand the backend logic that powers them.",
    solution:
      "Built a basic notification API using Node.js and Express, with MongoDB and Mongoose for persistent storage. The API supports creating notifications, retrieving notifications for a specific user, and marking notifications as read.",
    features: [
      "Create notifications with sender, recipient, type, and message",
      "Retrieve notifications belonging to a specific recipient",
      "Mark notifications as read",
      "Persist notification records in MongoDB",
      "Expose REST API endpoints for notification operations",
    ],
    instructions: [
      {
        id: "1",
        title: "Learning Journey",
        description:
          "This ended up being more of a learning project and is not intended for end-user use.",
      },
      // {
      //   id: "2",
      //   title: "Create a notification",
      //   description:
      //     "Send a POST request to /api/notifications with a senderId, recipientId, type, and message.",
      // },
      // {
      //   id: "3",
      //   title: "Retrieve notifications",
      //   description:
      //     "Send a GET request to /api/notifications?userId=user-B to retrieve notifications for the specified user.",
      // },
      // {
      //   id: "4",
      //   title: "Mark a notification as read",
      //   description:
      //     "Send a PATCH request to /api/notifications/:id/read using the notification's MongoDB document ID.",
      // },
    ],
    technologies: [
      "Node.js",
      "JavaScript",
      "Express",
      "MongoDB",
      "Mongoose",
      "REST API",
      "Postman / cURL",
    ],
    category: "Backend",
    featured: true,
    coverImage:
      "https://images.unsplash.com/photo-1643845892686-30c241c3938c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    images: [
      {
        id: "1",
        url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop",
        alt: "Server infrastructure representing the backend notification system",
        isCover: true,
      },
    ],
    links: [],
    challenges:
      "Understanding how the different layers of a backend application work together, from API routes and service logic to database operations. Debugging notification retrieval also reinforced the importance of checking query inputs, stored data, and server-side logs.",
    lessons:
      "I learned how to structure a basic backend API using routes, services, and storage logic; connect an Express application to MongoDB with Mongoose; perform asynchronous database queries; and persist notification records instead of keeping them only in memory. I also explored the broader architecture of notification systems and the roles of event triggers, queues, background workers, and delivery channels.",
    buildNotes:
      "This build started as an opportunity to learn how notification systems work. I began with in-memory storage, implemented the core notification operations, and then moved to MongoDB so records could persist across server restarts. The current version handles the core API operations; queue processing, automated event triggers, and external delivery channels remain future extensions.",
    whoIsItFor:
      "Developers who want to understand the backend foundations of notification functionality in messaging apps, productivity tools, and other applications that need to keep users informed.",
    inspiration:
      "Curiosity about how notification systems work behind the scenes, from storing notification records to retrieving them and tracking read status.",
    createdAt: "2026-10-13T09:00:00Z",
    updatedAt: "2026-10-13T21:00:00Z",
    publishedAt: "2026-10-13T21:00:00Z",
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
    coverImage:
      "https://images.unsplash.com/photo-1767277672167-18105701959b?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
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
    category: "Fullstack",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1567473030492-533b30c5494c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    images: [],
    links: [
      {
        id: "1",
        label: "Live Demo",
        url: "https://open-whenletters.netlify.app/",
        type: "demo",
      },
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
        description:
          "The website is still in development and has not been publicly deployed. It will be shared once it is ready for public access.",
      },
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Web Design"],
    category: "Frontend",
    featured: false,
    coverImage:
      "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
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
    technologies: ["Next JS", "SheetJS", "TypeScript"],
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
    technologies: ["React Native", "Android share intents", "TypeScript "],
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
