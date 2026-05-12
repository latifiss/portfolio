import './home.css';
import { useState } from 'react';
import Header from '../components/header/header';
import DesignHero from '../components/hero/designHero/designHero';
import DevHero from '../components/hero/devHero/devHero';
import ProjectsGrid from '../components/projects/projects';
import Skills from '../components/skills/skills';
import Contact from '../components/contact/contact';
import DevProject from '../components/projects/devProjects';
import Resume from '../components/resume/resume';

function App() {
  const [activeRole, setActiveRole] = useState('designer');

  const tabs = [
    { id: 'designer', label: 'Designer', icon: '🎨' },
    { id: 'developer', label: 'Developer', icon: '💻' },
  ];

  const designerSkillsList = [
    {
      src: '/assets/tools/design/escalidraw.png',
      name: 'Escalidraw',
    },
    { src: '/assets/tools/design/figma.png', name: 'Figma' },
    { src: '/assets/tools/design/miro.png', name: 'Miro' },
    { src: '/assets/tools/design/notion.png', name: 'Notion' },
    { src: '/assets/tools/design/maze.png', name: 'Maze' },
    { src: '/assets/tools/design/typeform.png', name: 'Typeform' },
  ];

  const developerSkillsList = [
    { src: '/assets/tools/dev/vercel.png', name: 'Vercel' },
    { src: '/assets/tools/dev/cloudfare.png', name: 'Cloudflare' },
    { src: '/assets/tools/dev/cypress.png', name: 'Cypress' },
    { src: '/assets/tools/dev/d3.png', name: 'D3.js' },
    {
      src: '/assets/tools/dev/digital-ocean.png',
      name: 'Digital Ocean',
    },
    { src: '/assets/tools/dev/docker.png', name: 'Docker' },
    { src: '/assets/tools/dev/express.png', name: 'Express.js' },
    { src: '/assets/tools/dev/graphql.png', name: 'GraphQL' },
    { src: '/assets/tools/dev/javascript.png', name: 'JavaScript' },
    { src: '/assets/tools/dev/jest.png', name: 'Jest' },
    { src: '/assets/tools/dev/nextjs.png', name: 'Next.js' },
    { src: '/assets/tools/dev/nodejs.png', name: 'Node.js' },
    { src: '/assets/tools/dev/npm.png', name: 'NPM' },
    { src: '/assets/tools/dev/postgres.png', name: 'PostgreSQL' },
    { src: '/assets/tools/dev/react.png', name: 'React' },
    { src: '/assets/tools/dev/redis.png', name: 'Redis' },
    { src: '/assets/tools/dev/redux.png', name: 'Redux' },
    { src: '/assets/tools/dev/render.png', name: 'Render' },
    { src: '/assets/tools/dev/sass.png', name: 'Sass' },
    {
      src: '/assets/tools/dev/styled-components.png',
      name: 'Styled Components',
    },
    { src: '/assets/tools/dev/supabase.png', name: 'Supabase' },
    { src: '/assets/tools/dev/tailwind.png', name: 'Tailwind CSS' },
    { src: '/assets/tools/dev/typescript.png', name: 'TypeScript' },
    { src: '/assets/tools/dev/Vector-1.png', name: 'Mongo DB' },
    { src: '/assets/tools/dev/Vector.png', name: 'CSS' },
  ];

  const designerProjects = [
    {
      id: 1,
      title: 'Airbnb Case Study',
      link: '/case-study/airbnb',
      description: 'An case study on the evolution of airbnb into a super app',
      status: 'In Progress',
      tags: ['React', 'D3', 'WebSocket'],
      tools: [
        '/assets/tools/design/miro.png',
        '/assets/tools/design/figma.png',
        '/assets/tools/design/maze.png',
        '/assets/tools/design/escalidraw.png',
        '/assets/tools/design/typeform.png',
      ],
      images: [
        '/assets/sites/design/airbnb1.png',
        '/assets/sites/design/airbnb2.png',
        '/assets/sites/design/airbnb3.png',
      ],
    },
    {
      id: 2,
      title: 'Pink Finance',
      link: '/project/pink-finance',
      description:
        'Minimalist mobile app for Gen Z to send and buy stock and assets',
      status: 'Completed',
      tags: ['React Native', 'IndexedDB', 'Tailwind'],
      tools: [
        '/assets/tools/design/figma.png',
        '/assets/tools/design/miro.png',
        '/assets/tools/design/maze.png',
      ],
      images: [
        '/assets/sites/design/pink1.png',
        '/assets/sites/design/pink2.png',
        '/assets/sites/design/pink3.png',
      ],
    },
    {
      id: 3,
      title: 'Football Predictions Markets',
      description:
        'A prediction markets app with real-time stats and livescore.',
      status: 'Design Phase',
      tags: ['TensorFlow.js', 'Canvas API', 'Vite'],
      tools: [
        '/assets/tools/design/miro.png',
        '/assets/tools/design/figma.png',
        '/assets/tools/design/notion.png',
      ],
      images: [
        '/assets/sites/design/sports1.png',
        '/assets/sites/design/sports2.png',
        '/assets/sites/design/sports3.png',
      ],
    },
    {
      id: 4,
      title: 'Ride',
      description:
        'Ride-hailing applications for riders and drivers. Built with a UX focus.',
      status: 'MVP Launched',
      tags: ['Solidity', 'Web3', 'Node.js'],
      tools: [
        '/assets/tools/design/notion.png',
        '/assets/tools/design/miro.png',
        '/assets/tools/design/figma.png',
      ],
      images: [
        '/assets/sites/design/ride1.png',
        '/assets/sites/design/ride2.png',
        '/assets/sites/design/ride3.png',
      ],
    },
    {
      id: 5,
      title: 'Stream Plus',
      link: '/project/stream-plus',
      description:
        'A mobile app for streaming movies, series and watching live TV',
      status: 'MVP Launched',
      tags: ['Solidity', 'Web3', 'Node.js'],
      tools: [
        '/assets/tools/design/notion.png',
        '/assets/tools/design/miro.png',
        '/assets/tools/design/figma.png',
      ],
      images: [
        '/assets/sites/design/stream1.png',
        '/assets/sites/design/stream2.png',
        '/assets/sites/design/stream3.png',
      ],
    },
    {
      id: 6,
      title: 'ERP Design System',
      link: '/project/erp-design-system',
      description:
        'A comprehensive design system for enterprise resource planning applications.',
      status: 'MVP Launched',
      tags: ['Solidity', 'Web3', 'Node.js'],
      tools: [
        '/assets/tools/design/notion.png',
        '/assets/tools/design/miro.png',
        '/assets/tools/design/figma.png',
      ],
      images: [
        '/assets/sites/design/erp1.png',
        '/assets/sites/design/erp2.png',
        '/assets/sites/design/erp3.png',
      ],
    },
  ];

  const developerProjects = [
    {
      id: 1,
      title: '28 Markets',
      link: 'https://www.28-markets.com/',
      description:
        'A markets dashboard displaying data for forex, commodities, crypto and stocks with interactive charts.',
      status: 'In Progress',
      tags: ['Node.js', 'Express', 'Redis'],
      tools: [
        '/assets/tools/dev/react.png',
        '/assets/tools/dev/nextjs.png',
        '/assets/tools/dev/redis.png',
        '/assets/tools/dev/typescript.png',
        '/assets/tools/dev/d3.png',
        '/assets/tools/dev/redux.png',
        '/assets/tools/dev/styled-components.png',
        '/assets/tools/dev/digital-ocean.png',
      ],
      images: ['/assets/sites/dev/28-markets.png'],
    },
    {
      id: 2,
      title: 'Magic Mail',
      link: 'https://mymagicmail.app',
      description:
        'AI-powered inbox operations platform for email: unsubscribe, rollup, categorization, priority marking, and daily summaries.',
      status: 'MVP Launched',
      tags: ['React', 'Socket.io', 'D3.js'],
      tools: [
        '/assets/tools/dev/nextjs.png',
        '/assets/tools/dev/javascript.png',
        '/assets/tools/dev/postgres.png',
        '/assets/tools/dev/react.png',
        '/assets/tools/dev/supabase.png',
        '/assets/tools/dev/vercel.png',
        '/assets/tools/dev/typescript.png',
        '/assets/tools/dev/redux.png',
        '/assets/tools/dev/sass.png',
        '/assets/tools/dev/render.png',
        '/assets/tools/dev/jest.png',
        '/assets/tools/dev/nodejs.png',
      ],
      images: ['/assets/sites/dev/MagicMail.png'],
    },
    {
      id: 3,
      title: 'CountriesQL',
      link: 'https://api.countriesql.com/',
      description:
        'A comprehensive Graphql API for country data, including states and cities',
      status: 'Design Phase',
      tags: ['AWS', 'Lambda', 'DynamoDB'],
      tools: [
        '/assets/tools/dev/react.png',
        '/assets/tools/dev/graphql.png',
        '/assets/tools/dev/nextjs.png',
        '/assets/tools/dev/typescript.png',
        '/assets/tools/dev/d3.png',
        '/assets/tools/dev/redux.png',
        '/assets/tools/dev/styled-components.png',
        '/assets/tools/dev/digital-ocean.png',
        '/assets/tools/dev/Vector-1.png',
      ],
      images: ['/assets/sites/dev/countriesql.png'],
    },
    {
      id: 4,
      title: 'OddsMister',
      link: 'https://oddsmister.vercel.app/',
      description:
        'A predictions website for football matches with graphical representation of probabilties plus odds comparison and livescore.',
      status: 'Active',
      tags: ['React', 'TypeScript', 'Storybook'],
      tools: [
        '/assets/tools/dev/react.png',
        '/assets/tools/dev/cypress.png',
        '/assets/tools/dev/nextjs.png',
        '/assets/tools/dev/typescript.png',
        '/assets/tools/dev/javascript.png',
        '/assets/tools/dev/d3.png',
        '/assets/tools/dev/redis.png',
        '/assets/tools/dev/styled-components.png',
        '/assets/tools/dev/vercel.png',
      ],
      images: ['/assets/sites/dev/odds1.png'],
    },
    {
      id: 5,
      title: '28 Markets API',
      link: 'https://www.28-markets.com/docs',
      description:
        'A markets api for forex, commodities, crypto and stocks with real-time data and historical data.',
      status: 'Design Phase',
      tags: ['AWS', 'Lambda', 'DynamoDB'],
      tools: [
        '/assets/tools/dev/nextjs.png',
        '/assets/tools/dev/javascript.png',
        '/assets/tools/dev/typescript.png',
        '/assets/tools/dev/react.png',
        '/assets/tools/dev/nodejs.png',
        '/assets/tools/dev/typescript.png',
        '/assets/tools/dev/redis.png',
        '/assets/tools/dev/digital-ocean.png',
        '/assets/tools/dev/express.png',
        '/assets/tools/dev/Vector-1.png',
      ],
      images: ['/assets/sites/dev/28-markets-api.png'],
    },
    {
      id: 6,
      title: '21 Century',
      link: 'https://admin.21centurynews.com/',
      description:
        'Complete editorial dashboard for multiple news publications with content management.',
      status: 'Active',
      tags: ['React', 'TypeScript', 'Storybook'],
      tools: [
        '/assets/tools/dev/nextjs.png',
        '/assets/tools/dev/cloudfare.png',
        '/assets/tools/dev/typescript.png',
        '/assets/tools/dev/react.png',
        '/assets/tools/dev/nodejs.png',
        '/assets/tools/dev/express.png',
        '/assets/tools/dev/Vector-1.png',
        '/assets/tools/dev/redis.png',
        '/assets/tools/dev/typescript.png',
        '/assets/tools/dev/digital-ocean.png',
        '/assets/tools/dev/tailwind.png',
      ],
      images: ['/assets/sites/dev/21century.png'],
    },
  ];

  const currentProjects =
    activeRole === 'designer' ? designerProjects : developerProjects;

  const currentSkillsList =
    activeRole === 'designer' ? designerSkillsList : developerSkillsList;

  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id="paper-filter" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.04"
            numOctaves="5"
            stitchTiles="stitch"
            result="NOISE"
          />
          <feDiffuseLighting
            lightingColor="white"
            surfaceScale="4"
            in="NOISE"
            result="DIFFUSE"
          >
            <feDistantLight azimuth="45" elevation="60" />
          </feDiffuseLighting>
          <feComposite
            operator="in"
            in="DIFFUSE"
            in2="SourceGraphic"
            result="COMPOSITE"
          />
        </filter>
      </svg>

      <div id="notebook-paper">
        <div className="texture-overlay"></div>
        <div className="vertical-line"></div>
        <div className="horizontal-lines"></div>

        <div className="holes">
          <div className="hole"></div>
          <div className="hole"></div>
          <div className="hole"></div>
        </div>

        <Header
          tabs={tabs}
          activeTab={activeRole}
          onTabChange={setActiveRole}
        />

        {activeRole === 'designer' ? <DesignHero /> : <DevHero />}

        <Skills skills={currentSkillsList} />

        {activeRole === 'designer' ? (
          <Resume
            role="designer"
            resumeLink="https://drive.google.com/file/d/1b0llK6qjwydN-xVJ4-qtW23TMRT6RbPD/preview"
            summary="Product designer with 5+ years of experience creating user-centered digital products. Passionate about design systems, accessibility, and creating seamless user experiences across web and mobile platforms."
          />
        ) : (
          <Resume
            role="developer"
            resumeLink="https://drive.google.com/file/d/1b0llK6qjwydN-xVJ4-qtW23TMRT6RbPD/preview"
            summary="Fullstack developer with 5+ years of experience creating user-centered digital products. Passionate about design systems, accessibility, and creating seamless user experiences across web and mobile platforms."
          />
        )}
        <header>
          <h1>Project Workbook</h1>
          <div className="date">April 2026</div>
        </header>

        <div id="content">
          <div className="table-title-wrapper">
            <h2 className="handwritten-title">
              {activeRole === 'designer' ? 'My Projects' : 'My Projects'}
            </h2>
            <div className="underlines">
              <svg className="underline-svg" viewBox="0 0 200 12">
                <path
                  d="M5,8 Q50,14 100,8 Q150,2 195,9"
                  stroke="#db4034"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M8,9.5 Q55,15.5 102,9.5 Q148,4 192,10.5"
                  stroke="#db4034"
                  strokeWidth="0.9"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </div>
          </div>

          {activeRole === 'designer' ? (
            <ProjectsGrid projects={currentProjects} />
          ) : (
            <DevProject projects={currentProjects} />
          )}

          <Contact />

          <div className="notebook-footer">
            <svg className="footer-squiggle" viewBox="0 0 300 20">
              <path
                d="M10,10 Q50,16 100,10 Q150,4 200,10 Q250,16 290,10"
                stroke="#00b0d7"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M12,11.5 Q52,17.5 102,11.5 Q148,5.5 198,11.5 Q248,17.5 288,11.5"
                stroke="#00b0d7"
                strokeWidth="0.6"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
            <p className="footer-text">
              Latif Issaka | UI/UX Designer & Fullstack Developer
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
