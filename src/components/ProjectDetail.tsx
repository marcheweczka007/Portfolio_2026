import React from "react";
import { Button } from "./ui/button";
import { Footer } from "./ui/Footer";
import {
  ArrowLeft,
  Calendar,
  User,
  Target,
  Search,
  Lightbulb,
  Palette,
  Rocket,
  Mail,
  ArrowRight,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

export interface Project {
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
  // Optional fields for custom content
  extraImage?: string;
  extraImages?: string[];
  extraText?: string;
  extraSection?: {
    title: string;
    content: string;
  };
  customSections?: Array<{
    title: string;
    content: string;
    image?: string;
  }>;
  comingSoon?: boolean;
}

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  fromProjectsPage?: boolean;
  onNavigateToProjects?: () => void;
  onNavigateToProcesses?: () => void;
  onNavigateToAbout?: () => void;
}

const projectTranslations = {
  backToHome: "Back to Home",
  backToProjects: "Back to Projects",
  projects: "Projects",
  pageTitle: "Projects",
  pageDescription:
    "A collection of my work across different platforms and industries",
  grandBank: {
    title: "Grand Bank",
    tags: ["Mobile app", "Banking", "SaaS"],
  },
  productCard: {
    title: "Product card",
    tags: ["Re-design", "Loan application", "SaaS"],
  },
  oneView: {
    title: "One view",
    tags: ["Dashboard", "SaaS"],
  },
  promoEbook: {
    title: "Promo E-Book",
    tags: ["FinOps", "Marketing", "Freelance"],
  },
  kiosk: {
    title: "Kiosk",
    tags: ["SaaS", "Large screen"],
  },
  funProjects: {
    title: "Fun projects",
    tags: ["UI experimentations", "Personal project"],
  },
};

export const projects: Project[] = [
  {
    id: "mobile-banking",
    title: "Grand Bank - Mobile Banking",
    description:
      "Designed an alternative application flow for declined credit card applicants to apply for Grand Bank loans with customizable add-ons, e-sign their application, and track status via mobile app.",
    imageUrl: "/src/assets/GrandBank/GrandBankHero.png",
    tags: ["Mobile", "Online Banking", "Loan Application"],
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
    images: [],
  },
  {
    id: "One view dashboard",
    title: "One view dashboard",
    description:
      "A story about joining a team with an existing design system and discovering the challenges of maintaining alignment between designers and developers. Through this experience, I learned that true consistency comes from collaboration, communication, and shared ownership.",
    imageUrl: "/src/assets/OneView/OneView.png",
    tags: ["SaaS", "Dashboard", "UI/UX"],
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
    images: [],
  },
  {
    id: "Product Card Redesign",
    title: "Product Card Redesign",
    description:
      "Improve the UX and design of the product card interface for loan applications.",
    imageUrl: "/src/assets/ApplicationCards/ApplicationCards.png",
    tags: ["SaaS", "Loan Application", "Re-design"],
    year: "2025",
    role: "Product Designer",
    client: "Ascent Platform",
    duration: "2 months",
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
    images: [],
  },
  {
    id: "E-book and business card design",
    title: "E-book and business card design",
    description:
      "Comprehensive mobile banking solution with seamless user experience and advanced security features.",
    imageUrl: "/src/assets/E-BookProject/EBookHero.png",
    tags: ["E-book", "Branding", "Graphic Design"],
    year: "2024",
    role: "Graphic Designer (Freelance)",
    client: "Infracost",
    duration: "1 month",
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
    images: [],
  },
  {
    id: "Coding Poject 1",
    title: "Coding Project 01 (Coming soon)",
    description: "Design engineering project.",
    comingSoon: true,
    imageUrl: "/src/assets/Other/ComingSoon.png",
    tags: [],
    year: "",
    role: "Design Engineer",
    client: "Personal Projects",
    duration: "1 months",
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
    images: [],
  },
  {
    id: "Coding Poject 2",
    title: "Coding Project 02 (Coming soon)",
    description: "Design engineering project.",
    imageUrl: "src/assets/Other/ComingSoon.png",
    tags: [],
    year: "",
    role: "Design Engineer",
    client: "Personal Projects",
    duration: "3 months",
    overview:
      "Coding projects that improved my coding skills and knowledge. I have been taking this opportunity to learn new technologies and improve my coding skills.",
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
    images: [],
  },
];

export function ProjectDetail({
  project,
  onBack,
  fromProjectsPage,
  onNavigateToProjects,
  onNavigateToProcesses,
  onNavigateToAbout,
}: ProjectDetailProps) {
  const t = projectTranslations;
  const phases = [
    {
      icon: Search,
      title: "Discovery",
      description: project.discovery,
      color: "from-blue-500/10 to-blue-500/5",
    },
    {
      icon: Lightbulb,
      title: "Exploration",
      description: project.exploration,
      color: "from-amber-500/10 to-amber-500/5",
    },
    {
      icon: Palette,
      title: "Design",
      description: project.design,
      color: "from-purple-500/10 to-purple-500/5",
    },
    {
      icon: Rocket,
      title: "Shipping",
      description: project.shipping,
      color: "from-green-500/10 to-green-500/5",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-24">
      {/* Breadcrumb and Back Button */}
      <div className="container mx-auto max-w-6xl px-6 mb-8">
        {fromProjectsPage && onNavigateToProjects && (
          <Breadcrumb className="mb-4">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  onClick={onNavigateToProjects}
                  className="cursor-pointer"
                >
                  {t.projects}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{project.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        )}
        <Button variant="ghost" onClick={onBack} className="gap-2 -ml-4">
          <ArrowLeft className="w-4 h-4" />
          {fromProjectsPage ? t.backToProjects : t.backToHome}
        </Button>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto max-w-6xl px-6 mb-20">
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 bg-accent border border-border rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-6xl mb-6 max-w-3xl leading-tight">
          {project.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-12">
          {project.description}
        </p>

        {/* Project Meta */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div>
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">Year</span>
            </div>
            <p>{project.year}</p>
          </div>
          <div>
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <User className="w-4 h-4" />
              <span className="text-sm">Role</span>
            </div>
            <p>{project.role}</p>
          </div>
          {project.client && (
            <div>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Target className="w-4 h-4" />
                <span className="text-sm">Client</span>
              </div>
              <p>{project.client}</p>
            </div>
          )}
          {project.duration && (
            <div>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <Target className="w-4 h-4" />
                <span className="text-sm">Duration</span>
              </div>
              <p>{project.duration}</p>
            </div>
          )}
        </div>

        {/* Hero Image */}
        <div className="rounded-2xl overflow-hidden bg-muted aspect-video">
          <ImageWithFallback
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Project Content */}
      <section className="container mx-auto max-w-6xl px-6 mb-20">
        {/* Overview */}
        <div className="mb-20">
          <h2 className="text-3xl mb-6">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Challenge */}
        <div className="mb-20 p-8 rounded-2xl bg-accent/30 border-l-4 border-primary">
          <h2 className="text-3xl mb-6">The Challenge</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.challenge}
          </p>
        </div>

        {/* Solution */}
        <div className="mb-20">
          <h2 className="text-3xl mb-6">The Solution</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.solution}
          </p>
        </div>

        {/* Extra Text Section - Conditionally rendered */}
        {project.extraText && (
          <div className="mb-20">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.extraText}
            </p>
          </div>
        )}

        {/* Extra Section - Conditionally rendered */}
        {project.extraSection && (
          <div className="mb-20">
            <h2 className="text-3xl mb-6">{project.extraSection.title}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.extraSection.content}
            </p>
          </div>
        )}
      </section>

      {/* Process Phases */}
      <section className="container mx-auto max-w-6xl px-6 mb-20">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
            Process
          </p>
          <h2 className="text-4xl mb-4">How We Got There</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A structured approach to solving complex design challenges through
            research, ideation, refinement, and delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.title}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${phase.color} border border-border hover:border-border/60 transition-all duration-300`}
              >
                <div className="absolute top-6 right-6 text-6xl font-mono opacity-[0.05] select-none">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl">{phase.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Project Images */}
      {project.images.length > 0 && (
        <section className="container mx-auto max-w-6xl px-6 mb-20">
          <h2 className="text-3xl mb-8">Visual Showcase</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden bg-muted aspect-[4/3]"
              >
                <ImageWithFallback
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Extra Single Image - Conditionally rendered */}
      {project.extraImage && (
        <section className="container mx-auto max-w-6xl px-6 mb-20">
          <div className="rounded-xl overflow-hidden bg-muted aspect-video">
            <ImageWithFallback
              src={project.extraImage}
              alt={`${project.title} - Extra image`}
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      )}

      {/* Extra Images - Conditionally rendered */}
      {project.extraImages && project.extraImages.length > 0 && (
        <section className="container mx-auto max-w-6xl px-6 mb-20">
          <h2 className="text-3xl mb-8">Additional Images</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.extraImages.map((image, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden bg-muted aspect-[4/3]"
              >
                <ImageWithFallback
                  src={image}
                  alt={`${project.title} - Extra image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Custom Sections - Conditionally rendered */}
      {project.customSections && project.customSections.length > 0 && (
        <section className="container mx-auto max-w-6xl px-6 mb-20">
          {project.customSections.map((section, index) => (
            <div key={index} className="mb-20">
              <h2 className="text-3xl mb-6">{section.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {section.content}
              </p>
              {section.image && (
                <div className="rounded-xl overflow-hidden bg-muted aspect-video">
                  <ImageWithFallback
                    src={section.image}
                    alt={`${project.title} - ${section.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </section>
      )}

      {/* Results */}
      <section className="container mx-auto max-w-6xl px-6 mb-20">
        <h2 className="text-3xl mb-8">Results & Impact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {project.results.map((result, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-accent/30 border border-border"
            >
              <div className="text-4xl mb-3">{index + 1}</div>
              <p className="text-muted-foreground leading-relaxed">{result}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto max-w-6xl px-6 py-20 mb-20">
        <div className="relative p-12 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 text-center">
            <h2 className="text-4xl mb-4 text-primary-foreground">
              Interested in working together?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Let's discuss your project and how I can help bring your vision to
              life.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2">
                <Mail className="w-5 h-5" />
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                View More Projects <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <Footer
          onHomeClick={onBack}
          onProjectsClick={onNavigateToProjects}
          onProcessesClick={onNavigateToProcesses}
          onAboutClick={onNavigateToAbout}
        />
      </section>
    </div>
  );
}
