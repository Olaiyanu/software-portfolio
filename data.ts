import { Project } from './types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Shopora – Modern E-Commerce Mini Store',
    role: 'Frontend Developer',
    period: '2025',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
    summary: 'A modern e-commerce mini store with product browsing, filtering, cart, user accounts, and responsive design using React and TypeScript.',
    problem: 'Many small businesses struggle with lightweight e-commerce solutions that are fast, user-friendly, and visually professional. Existing platforms are often bloated, slow, or lack customization for modern UI/UX standards.',
    architecture: 'Built a component-driven frontend architecture using React and TypeScript, emphasizing reusability, scalability, and clean state management. Implemented a modular layout system with shared UI components, custom hooks for business logic, and a centralized state layer for cart and user sessions.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'React Router', 'REST API'],
    challenges: 'Managing global cart state across pages, ensuring type safety across components, optimizing performance for product filtering, and maintaining consistent UI behavior across different screen sizes.',
    outcomes: 'Delivered a fast, responsive, and visually polished shopping experience with seamless cart interactions, improved UI consistency, and scalable frontend architecture suitable for real-world e-commerce expansion.',
    githubUrl: 'https://github.com/Olaiyanu/shopora'
  },
  {
    id: '2',
    title: 'Temperature & Humidity Monitoring System',
    role: 'Embedded System Engineer Intern',
    period: 'October 2025',
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=1200&auto=format&fit=crop',
    summary: 'Built a temperature and humidity monitoring system with sensors, a Flask-based website, and a mobile app for real-time monitoring.',
    problem: 'Manual environmental monitoring was inefficient and error-prone. Existing solutions lacked real-time updates and cross-platform access for users.',
    architecture: 'Collected sensor data via microcontroller, sent it to a Flask backend exposing REST APIs. Built a web application to display live readings and a mobile app fetching data from the API for seamless monitoring.',
    techStack: ['Arduino/ESP32', 'C/C++', 'Python', 'Flask', 'MIT App Inventor', 'REST API', 'SQLite/PostgreSQL'],
    challenges: 'Ensuring reliable real-time data transmission from sensors to Flask API, maintaining API performance under multiple concurrent mobile app requests, and synchronizing data visualization across platforms.',
    outcomes: 'Delivered an end-to-end monitoring solution with accurate sensor data, live web visualization, and a mobile app for seamless real-time monitoring.',
    githubUrl: 'https://github.com/Olaiyanu/ESP32_Dashboard'
  },
  {
    id: '3',
    title: 'TypeFlow – Desktop Typing Tutor',
    role: 'Frontend & Electron Developer',
    period: '2024',
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=1200&auto=format&fit=crop',
    summary: 'A desktop typing tutor application built with React and Electron to help users improve typing speed and accuracy through challenges, streak tracking, and gamified learning.',
    problem: 'Many typing tutor apps lack interactivity, real-time feedback, and a personalized progress tracking system, making learning inefficient and less engaging.',
    architecture: 'Built using React with functional components, hooks, and Context API for state management. Electron enables cross-platform desktop deployment. Local storage (localStorage/IndexedDB) saves user progress and streaks. Dashboard visualizes typing stats with charts and animations for real-time feedback.',
    techStack: ['React', 'Electron', 'TypeScript', 'Chart.js / Recharts', 'localStorage / IndexedDB / SQLite', 'CSS / Tailwind'],
    challenges: 'Ensuring accurate real-time WPM and accuracy calculation, implementing streak tracking logic, designing responsive UI for multiple screen sizes, and creating smooth animations and feedback for keypresses.',
    outcomes: 'Delivered an engaging, interactive typing tutor that tracks user progress, provides real-time performance insights, gamifies learning with streaks and achievements, and is easily packaged as a cross-platform desktop application.',
    githubUrl: 'https://github.com'
  },
  {
    id: '4',
    title: 'Bulk Email Sender',
    role: 'Full Stack Developer',
    period: '2025',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    summary: 'A responsive, full-stack web application for automated bulk email sending with attachments. Designed to streamline communication campaigns with personalization and real-time tracking.',
    problem: 'Managing personalized bulk email campaigns manually is inefficient, while existing tools can be overly complex or expensive for simple needs.',
    architecture: 'Backend built with Python (Flask) and SQLite for managing templates and logs. Frontend utilizes Vanilla JavaScript and CSS for a responsive, dark-mode capable UI. Features CSV import for recipients and SMTP integration.',
    techStack: ['Python', 'Flask', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    challenges: 'Implementing real-time tracking of sending status, handling file attachments securely, and ensuring the application is responsive and user-friendly across devices.',
    outcomes: 'Delivered a streamlined tool for automated email campaigns with support for rich HTML templates and personalization, improving communication efficiency.',
    githubUrl: 'https://github.com/Olaiyanu/bulk-email-sender'
  },
  {
    id: '5',
    title: 'Netra Protocol',
    role: 'Frontend Web3 Developer',
    period: '2024',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop',
    summary: 'A professional, high-performance Web3 landing page designed to showcase a ZK-Rollup native blockchain ecosystem. Features a dark-themed aesthetic and glassmorphism effects.',
    problem: 'Creating a compelling and informative landing page for a ZK-Rollup blockchain ecosystem that balances technical depth with an immersive, modern user experience.',
    architecture: 'Built using React 18 and TypeScript. Utilized Tailwind CSS for styling and Framer Motion for smooth, scroll-triggered animations. Implemented dynamic pie charts for tokenomics using Recharts and a status-aware roadmap timeline.',
    techStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lucide React', 'Recharts'],
    challenges: 'Designing a sleek, dark-mode interface with glassmorphism effects while ensuring performance. Implementing interactive data visualizations and a responsive wallet connection modal.',
    outcomes: 'Delivered a high-performance, visually striking landing page. Improved user engagement through immersive UI/UX and clear data visualization of tokenomics and roadmap.',
    githubUrl: 'https://github.com/Olaiyanu/netra-protocol'
  },
  {
    id: '6',
    title: 'Real-Time Logistics Dashboard',
    role: 'Senior Frontend Engineer',
    period: '2025',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    summary: 'A high-performance dashboard for logistics companies to track fleet movements, fuel usage, and deliveries in real time with AI-powered insights.',
    problem: 'Logistics operators lacked a centralized, real-time dashboard to track fleet performance, vehicle telemetry, and delivery efficiency, resulting in delayed decision-making and suboptimal routing.',
    architecture: 'Built a component-driven React frontend with Tailwind CSS, D3.js, and Recharts for real-time visualizations. Centralized fleet data via Context API and custom hooks with simulated WebSocket streams. Implemented modular UI components for map, stats, and driver/asset management. Gemini Logic powers AI heuristics for predictive alerts and optimization suggestions.',
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'D3.js', 'Recharts', 'Lucide React', 'Custom Hooks / Context API', 'Gemini Logic'],
    challenges: 'Managing real-time data streams for hundreds of vehicles, ensuring performant updates of interactive visualizations, maintaining accessibility (WCAG), and creating a responsive, enterprise-grade UI across devices.',
    outcomes: 'Delivered a scalable, interactive dashboard enabling real-time fleet monitoring, predictive alerts, and actionable insights. Improved operational visibility and decision-making efficiency for logistics operators.',
    githubUrl: 'https://github.com/Olaiyanu/FleetStream'
  }
];