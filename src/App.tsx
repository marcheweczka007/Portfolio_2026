import React, { useState } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { ProjectDetail } from "./components/ProjectDetail";
import { ProcessesPage } from "./components/ProcessesPage";
import { AboutPage } from "./components/AboutPage";
import { ProjectsPage } from "./components/ProjectsPage";
import { Language } from "./translations";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  year: string;
  role: string;
  client?: string;
  duration?: string;
  overview: string;
  challenge: string;
  solution: string;
  discovery: string;
  exploration: string;
  design: string;
  shipping: string;
  results: string[];
  images: string[];
}

export default function App() {
  const [currentView, setCurrentView] = useState<
    "home" | "projects" | "project" | "processes" | "about"
  >("home");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );
  const language: Language = "en";
  const [previousView, setPreviousView] = useState<"home" | "projects">("home");

  // ============================================
  // ADD YOUR PROJECT IMAGES HERE
  // ============================================
  // To add images for your projects:
  // 1. Place your images in the src/assets/ folder
  // 2. Import them at the top of this file like:
  //    import mobileBankingThumbnail from './assets/mobile-banking-thumbnail.jpg';
  //    import mobileBanking1 from './assets/mobile-banking-1.jpg';
  // 3. Use the imported variables in the imageUrl and images arrays below
  //
  // Example:
  // imageUrl: mobileBankingThumbnail,
  // images: [mobileBanking1, mobileBanking2, mobileBanking3],
  // ============================================

  const projects: Project[] = [
    {
      id: "mobile-banking",
      title: "Mobile Banking Loan Application",
      description:
        "Designed an alternative application flow for declined credit card applicants to apply for Grand Bank loans with customizable add-ons, e-sign their application, and track status via mobile app.",
      // TODO: Add your project thumbnail image
      // Example: imageUrl: mobileBankingThumbnail,
      // Or use a path: imageUrl: '/src/assets/mobile-banking-thumbnail.jpg',
      imageUrl: "",
      tags: ["Mobile", "Online Banking"],
      year: "2025",
      role: "Product Designer",
      client: "Grand Bank",
      duration: "2 months",
      overview:
        "The project began with alignment sessions between our client, Grand Bank, and our VP of Design. As designers, we joined the process once the problem was defined and the client's needs were outlined to us. From there, we created mobile-first wireframes and iterated based on feedback, going through several rounds of refinement over a few weeks until the client was confident in the feature we designed and delivered.",
      challenge:
        "Due to time constraints, the client requested high-fidelity wireframes early on, wanting to see the product vision in a near-final state. Personally, I prefer to start with low-fidelity sketches to ensure no key elements or actions are missed, which helps reduce rework later. However, in this case we delivered high-fidelity screens quickly, as required by our manager. As we iterated, I noticed that some communication misalignments could have been avoided if we had invested more time in low-fidelity exploration first. In total, the client requested three to four rounds of changes.",
      solution: "Placeholder",
      discovery: "Placeholder",
      exploration: "Placeholder",
      design: "Placeholder",
      shipping:
        "I worked closely with the developers to ship the project. We would check on frequently to make sure the project is on the right track. ",
      results: ["Placeholder", "Placeholder", "Placeholder", "Placeholder"],
      // TODO: Add your project detail images (shown in project detail page)
      // Example: images: [mobileBanking1, mobileBanking2, mobileBanking3, mobileBanking4],
      images: [],
    },
    {
      id: "Component Library",
      title: "Evolving the Component Library",
      description:
        "A story about joining a team with an existing design system and discovering the challenges of maintaining alignment between designers and developers. Through this experience, I learned that true consistency comes from collaboration, communication, and shared ownership.",
      // TODO: Add your project thumbnail image
      // Example: imageUrl: componentLibraryThumbnail,
      imageUrl: "",
      tags: ["Design Library", "SaaS", "White Labelling"],
      year: "2024-2025",
      role: "Product Designer",
      client: "Internal Project",
      duration: "4 months",
      overview:
        "When I joined Ascent, I was introduced to our existing component library - which already included a wide range of components. However, many were inconsistent, outdated, or 'broken'. I was advised to create new components if I designed improved versions, rather than editing the existing ones. This approach made sense to me, especially after coming from my previous company, where no official design system existed. In that role, I noticed major inconsistencies across projects and took the initiative to create reusable components to bridge that gap. I aimed to bring visual and functional consistency to the product, even without formal guidance or a structured system.",
      challenge:
        "A few months later, a large bank client requested a custom loan application flow. The project became a turning point — it led to the decision to develop white-labelling capabilities so that the same flow could be adapted for multiple clients.Working closely with a developer, I conducted a page-by-page audit to align design and code. During this process, I discovered a critical issue:Our Figma components and the developers' code library were based on different versions of Material UI.This mismatch explained the frequent misalignments we had been seeing in design reviews and build outputs. At the same time, our internal design review process was overly rigid and pixel-perfect–focused. Instead of collaborative UI reviews to ensure usability and alignment, the reviews became detailed inspections of spacing, layer naming, and colour application. This slowed down progress and discouraged iteration.",
      solution:
        "I designed a modular dashboard system with pre-built templates and drag-and-drop functionality. The new interface features intelligent defaults, contextual help, and a progressive learning curve that reveals advanced features as users become more comfortable. We introduced data storytelling capabilities and collaborative features that transformed how teams work with data.",
      discovery:
        "Through contextual inquiry sessions with 20 users across different skill levels, I observed how they interacted with data visualization tools. I analyzed support tickets and conducted stakeholder interviews to identify the most critical pain points. The research phase included a comprehensive audit of the existing platform and competitive benchmarking.",
      exploration:
        "I facilitated design thinking workshops to generate ideas for simplifying complex workflows. We explored different approaches to progressive disclosure, template systems, and collaborative features. I created multiple concept sketches and tested them with users to validate assumptions before investing in high-fidelity designs.",
      design:
        "The design phase focused on creating a flexible component library that could support both simple and complex use cases. I designed an intelligent template system that learns from user behavior, a contextual toolbar that adapts based on the selected element, and a robust theming system. Every interaction was carefully crafted to feel responsive and predictable.",
      shipping:
        "I partnered with engineering to implement the design in sprints, prioritizing the template system and core visualization components first. We ran a closed beta with 50 power users who provided valuable feedback that shaped the final release. I created comprehensive documentation and tutorial videos to support the launch.",
      results: [
        "New user activation increased by 156% within first week",
        "Time to create first dashboard reduced from 45 minutes to 8 minutes",
        "Customer churn rate decreased by 42%",
        "Average session duration increased by 89%",
      ],
      // TODO: Add your project detail images
      // Example: images: [componentLibrary1, componentLibrary2, componentLibrary3, componentLibrary4],
      images: [],
    },
    {
      id: "ecommerce-platform",
      title: "E-commerce Platform",
      description:
        "Building a modern shopping experience with focus on conversion and user delight.",
      // TODO: Add your project thumbnail image
      // Example: imageUrl: ecommerceThumbnail,
      imageUrl: "",
      tags: ["Web", "E-commerce", "Mobile"],
      year: "2023",
      role: "Senior Product Designer",
      client: "StyleHub",
      duration: "5 months",
      overview:
        "StyleHub, a fashion e-commerce startup, needed to differentiate themselves in a crowded market. They wanted to create a shopping experience that felt personal, engaging, and trustworthy while optimizing for conversions across all devices.",
      challenge:
        "The fashion e-commerce space is highly competitive, with users having high expectations for visual quality and seamless checkout experiences. StyleHub's conversion rate was below industry average at 1.2%, and cart abandonment was at 78%. Mobile shopping experience was particularly problematic, with most users switching to desktop to complete purchases.",
      solution:
        "I designed a mobile-first experience with rich product imagery, AR try-on features, and a streamlined checkout process. The new design includes personalized recommendations, social proof elements, and a persistent mini-cart that keeps users informed without interrupting their browsing. We also implemented a one-click checkout option and guest checkout to reduce friction.",
      discovery:
        "I conducted extensive user research including shopping behavior analysis, cart abandonment surveys, and heatmap studies. We interviewed 30 target customers to understand their fashion shopping habits and pain points. The research revealed that trust, visual presentation, and mobile experience were the three critical factors affecting conversion.",
      exploration:
        "I explored various approaches to product presentation, including grid vs. masonry layouts, different filtering systems, and innovative checkout flows. We tested AR try-on features, virtual styling assistants, and social shopping features. I created clickable prototypes for each major concept and conducted A/B testing with real users to validate design decisions.",
      design:
        "The final design emphasized visual storytelling with large, high-quality product imagery and immersive full-screen views. I designed a smart filtering system that learns from user preferences, a streamlined checkout that works seamlessly on mobile, and integrated social proof elements throughout the shopping journey. The design system was built mobile-first with careful attention to touch targets and gesture interactions.",
      shipping:
        "We launched the redesign using a phased rollout strategy, starting with 10% of traffic and gradually increasing based on performance metrics. I worked with the development team to ensure pixel-perfect implementation and smooth animations. Post-launch, we ran continuous optimization experiments based on user behavior analytics and feedback.",
      results: [
        "Overall conversion rate increased from 1.2% to 3.8%",
        "Mobile conversion rate increased by 215%",
        "Cart abandonment reduced from 78% to 52%",
        "Average order value increased by 34%",
      ],
      // TODO: Add your project detail images
      // Example: images: [ecommerce1, ecommerce2, ecommerce3, ecommerce4],
      images: [],
    },
    {
      id: "grand-bank",
      title: "Grand Bank",
      description:
        "Comprehensive mobile banking solution with seamless user experience and advanced security features.",
      // TODO: Add your project thumbnail image
      // Example: imageUrl: grandBankThumbnail,
      imageUrl: "",
      tags: ["Mobile app", "Banking", "SaaS"],
      year: "2024",
      role: "Product Designer",
      client: "Grand Bank",
      duration: "8 months",
      overview:
        "Grand Bank approached us to create a next-generation mobile banking app that would set new standards for user experience in the financial sector. The goal was to make complex banking operations feel simple and accessible while maintaining the highest security standards.",
      challenge:
        "Traditional banking apps are often cluttered and intimidating. Our research showed that 72% of users felt overwhelmed by too many features and struggled to complete basic transactions. The challenge was to simplify without sacrificing functionality, and to build trust in a digital-first banking experience.",
      solution:
        "I designed a clean, intuitive interface that prioritizes the most common user tasks while keeping advanced features easily accessible. The app features biometric authentication, real-time transaction notifications, and a smart assistant that helps users manage their finances. We implemented a card-first design that makes account management visual and engaging.",
      discovery:
        "I conducted 25 user interviews with existing bank customers and analyzed app usage data from their legacy system. We identified key pain points around navigation complexity, lack of spending insights, and concerns about security. I created detailed user personas and journey maps to guide the design process.",
      exploration:
        "Through design sprints with stakeholders, we explored multiple interface concepts ranging from minimalist to feature-rich. I tested various navigation patterns including bottom tabs, hamburger menus, and gesture-based controls. User testing revealed that a hybrid approach worked best, combining persistent navigation with contextual actions.",
      design:
        "The final design features a dashboard that adapts to user behavior, showing personalized insights and quick actions. I created a comprehensive design system with reusable components and clear interaction patterns. The visual design emphasizes clarity and trust through careful use of white space, consistent iconography, and subtle animations.",
      shipping:
        "We launched the app through a phased rollout, starting with a beta program of 1,000 users. I worked closely with the engineering team to ensure smooth implementation and conducted weekly design reviews. Post-launch, we iterated based on user feedback and analytics, making continuous improvements to the experience.",
      results: [
        "User satisfaction score increased from 3.2 to 4.8 stars",
        "Transaction completion rate improved by 94%",
        "Customer support calls reduced by 56%",
        "Active user engagement increased by 178%",
      ],
      // TODO: Add your project detail images
      // Example: images: [grandBank1, grandBank2, grandBank3, grandBank4],
      images: [],
    },
    {
      id: "product-card",
      title: "Product Card Redesign",
      description:
        "Streamlining the loan application process with a redesigned product card interface.",
      // TODO: Add your project thumbnail image
      // Example: imageUrl: productCardThumbnail,
      imageUrl: "",
      tags: ["Re-design", "Loan application", "SaaS"],
      year: "2023",
      role: "Lead UX Designer",
      client: "LendingTree",
      duration: "3 months",
      overview:
        "LendingTree needed to redesign their product card interface for loan applications. The existing design had high drop-off rates and users found the information overwhelming and difficult to compare between different loan products.",
      challenge:
        "The main challenge was presenting complex financial information in a way that was both comprehensive and digestible. Users needed to understand interest rates, terms, fees, and eligibility requirements without feeling overwhelmed. The application process itself was taking an average of 15 minutes, leading to 68% abandonment rate.",
      solution:
        "I redesigned the product cards with a layered information architecture that progressively discloses details. The new design features clear visual hierarchy, comparison tools, and a streamlined application flow that guides users step-by-step. We added smart defaults and pre-filled information to reduce cognitive load.",
      discovery:
        "Through heatmap analysis and user testing sessions with 18 participants, I identified the specific points where users were getting confused or frustrated. I analyzed competitor products and conducted card sorting exercises to understand how users expected information to be organized.",
      exploration:
        "I created multiple layout variations, testing different ways to present APR, monthly payments, and loan terms. We explored card-based designs, list views, and comparison tables. Rapid prototyping and A/B testing helped us identify which patterns were most effective at driving conversions while maintaining transparency.",
      design:
        "The final design uses a card-based layout with expandable sections, allowing users to quickly scan key information or dive deeper into details. I designed an intelligent comparison tool that highlights differences between products and a progress indicator that shows users exactly where they are in the application process.",
      shipping:
        "We implemented the redesign using a gradual rollout strategy, monitoring key metrics at each stage. I created detailed documentation for the development team and conducted design QA throughout implementation. We launched with comprehensive analytics tracking to measure the impact on conversion and user satisfaction.",
      results: [
        "Application completion rate increased by 142%",
        "Time to complete application reduced from 15 to 6 minutes",
        "User confusion incidents decreased by 81%",
        "Conversion rate improved by 67%",
      ],
      // TODO: Add your project detail images
      // Example: images: [productCard1, productCard2, productCard3, productCard4],
      images: [],
    },
    {
      id: "one-view",
      title: "One View Dashboard",
      description:
        "Unified dashboard solution providing a comprehensive view of all key business metrics and operations.",
      // TODO: Add your project thumbnail image
      // Example: imageUrl: oneViewThumbnail,
      imageUrl: "",
      tags: ["Dashboard", "SaaS"],
      year: "2024",
      role: "Senior Product Designer",
      client: "MetricsHub",
      duration: "5 months",
      overview:
        "MetricsHub, a B2B SaaS company, needed to consolidate multiple dashboards into one unified view. Their users were switching between 5 different tools to get a complete picture of their business, leading to inefficiency and data silos.",
      challenge:
        "The challenge was to create a single dashboard that could surface the most important information from multiple data sources without overwhelming users. Different user roles needed different views, and the system had to be flexible enough to accommodate varying business needs while maintaining consistency.",
      solution:
        "I designed a modular dashboard system with customizable widgets and role-based default views. The interface features smart filtering, real-time updates, and drill-down capabilities that let users go from high-level overview to detailed analysis. We implemented an AI-powered insight engine that surfaces anomalies and trends automatically.",
      discovery:
        "I conducted contextual inquiries with 20 users across different roles (executives, managers, analysts) to understand their daily workflows. Through diary studies and data analysis, I mapped out how users currently navigate between tools and what information they need at different times of the day.",
      exploration:
        "I explored various dashboard layouts, from traditional grid systems to more innovative radial and timeline-based designs. We prototyped different widget types, tested various data visualization approaches, and experimented with AI-generated insights. User feedback sessions helped us refine the information hierarchy.",
      design:
        "The final design features a flexible grid layout with drag-and-drop customization. I created a library of widget templates for common metrics and designed a robust filtering system that works consistently across all data types. The visual design emphasizes data clarity with a clean, professional aesthetic and color-coded status indicators.",
      shipping:
        "We launched the unified dashboard in phases, starting with read-only views before enabling customization features. I partnered with the engineering team to optimize performance for real-time data updates and conducted extensive testing across different data volumes and user scenarios.",
      results: [
        "Time spent switching between tools reduced by 78%",
        "Decision-making speed improved by 45%",
        "User productivity increased by 62%",
        "Data accuracy issues decreased by 89%",
      ],
      // TODO: Add your project detail images
      // Example: images: [oneView1, oneView2, oneView3, oneView4],
      images: [],
    },
  ];

  const handleProjectClick = (projectId: string) => {
    setPreviousView(currentView as "home" | "projects");
    setSelectedProjectId(projectId);
    setCurrentView("project");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    setSelectedProjectId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackFromProject = () => {
    setCurrentView(previousView);
    setSelectedProjectId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewProcesses = () => {
    setCurrentView("processes");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewAbout = () => {
    setCurrentView("about");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleViewProjects = () => {
    setCurrentView("projects");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectedProject = projects.find((p) => p.id === selectedProjectId);

  return (
    <div className="min-h-screen bg-background">
      <Header
        onHomeClick={handleBackToHome}
        onProjectsClick={handleViewProjects}
        onProcessesClick={handleViewProcesses}
        onAboutClick={handleViewAbout}
        language={language}
        currentView={currentView}
      />

      {currentView === "home" && (
        <HomePage
          projects={projects}
          onProjectClick={handleProjectClick}
          language={language}
          onViewProjects={handleViewProjects}
          onViewProcesses={handleViewProcesses}
          onViewAbout={handleViewAbout}
        />
      )}

      {currentView === "projects" && (
        <ProjectsPage
          onBack={handleBackToHome}
          language={language}
          onProjectClick={handleProjectClick}
          projects={projects}
          onProjectsClick={handleViewProjects}
          onProcessesClick={handleViewProcesses}
          onAboutClick={handleViewAbout}
        />
      )}

      {currentView === "project" && selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onBack={handleBackFromProject}
          language={language}
          fromProjectsPage={previousView === "projects"}
          onNavigateToProjects={handleViewProjects}
        />
      )}

      {currentView === "processes" && (
        <ProcessesPage
          onBack={handleBackToHome}
          language={language}
          onProjectsClick={handleViewProjects}
          onProcessesClick={handleViewProcesses}
          onAboutClick={handleViewAbout}
        />
      )}

      {currentView === "about" && (
        <AboutPage
          onBack={handleBackToHome}
          language={language}
          onProjectsClick={handleViewProjects}
          onProcessesClick={handleViewProcesses}
          onAboutClick={handleViewAbout}
        />
      )}
    </div>
  );
}
