import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Frederico",
  lastName: "Luz",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "AI Agent Designer",
  avatar: "/images/avatar.jpg",
  location: "Europe/Lisbon", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [] // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to My Newsletter</>,
  description: (
    <>
      I occasionally write about technology and it's impact on society. Penny for my thoughts?
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/fredluz",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/fredericoluzai/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:fredericorodrigues2000@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Designing AI to be useful in the real world</>,
  subline: (
<>
      I'm Fred, an AI Agent Designer who makes using AI intuitive, easy and fast.  <br />
    My work focuses on implementing AI Agents in professional and personal workflows, making them fit into existing systems and interfaces. 
     <br/> {''}
         My core design philosophy is that AI should enhance workflows within our daily routines, instead of forcing users to waste time with chatbots.
          </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/fredluz/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm turning the power of Large Language Models into intelligent software.
        AI shouldn't just talk, it should *work*. <br />
        My work focuses on building effective AI agents (TypeScript/React/GCP) and integrating LLMs seamlessly into intuitive interfaces, moving beyond toy chatbots to solve real-world problems.<br/>
        I'm always interested in learning about new workflows in new industries, and coming up with ways for AI to enhance them. Talk to me if you're curious about how we can use AI to automate the worst part about your job. <br />
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Project Highlights",
    experiences: [
        {
        company: "TeacherZero: Classroom Prep Made Easy",
        role: "Worksheets Without The Work",
        achievements: [
          <>
            Streamlines worksheet creation for teachers. Uses AI to generate relevant questions and exercises from source material.
          </>,
          <>
            Guarantees quality by keeping the teacher in the driver's seat. TeacherZero doesn't just generate quizzes, it turbo-charges perfecting them. Experience the Enhancement Engine.
          </>,
           <>
            Designed for ease of use, requiring no prompt engineering skills from teachers. Directly embeds AI into the workflow.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/questiontype.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/teacherzero_demo.mp4",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
         
        ],
      },
      
      {
        company: "Narrative: Know Thyself",
        role: "The Future of Journaling",
        achievements: [
           <>
            An intelligent digital journal that uses an AI Agent to analyze entries, detect patterns and themes, and extract actionable tasks automatically.
           </>,
          <>
            By keeping track of everything in a relational database, RAG allows the AI Agent to get the info it needs to understand where your life's at.
          </>,
          <>
            Every life's just a story: time to write your own. The power of AI storytelling allows us to move beyond Gamification, and unlock Narrativization.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/narrative/kanban and tasklist.png",
            alt: "Once UI Project",
            width: 10,
            height: 16,
          },
          {
            src: "/images/projects/narrative/checkups.png",
            alt: "Once UI Project",
            width: 12,
            height: 16,

          },
          {
            src: "/images/projects/narrative/chat taskgen.mp4",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    
       {
        company: "(Coming Soon) Cascade: Beyond Tickets ",
        role: "Intelligent Team Orchestration",
        achievements: [
          <>
            Cascade leverages AI agents to transform team productivity. It provides a streamlined interface for task management while working intelligently behind the scenes.
          </>,
          <>
             AI analyzes progress, identifies potential roadblocks, automates reporting, and provides leaders with concise, actionable insights – without manual data-digging or daily standups. 
          </>,

        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "AI Agent & LLM Integration",
        description: <>Designing and implementing autonomous agents, leveraging RAG techniques, and integrating major LLM APIs (OpenAI, etc.) to build truly intelligent applications.</>,
        // optional: leave the array empty if you don't want to display images
         images: [
        ],
      },
      {
        title: "TypeScript & React",
        description: <>Crafting robust, scalable frontends and business logic. Building the intuitive interfaces where AI does its work.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
      {
        title: "Google Cloud Platform",
        description: <>Deploying and managing AI agents in the cloud.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
