import { ProjectCard } from './ProjectCard';
import { Button } from './ui/button';
import { ArrowRight, Lightbulb, Users, Target, Mail, Sparkles } from 'lucide-react';
import { Language, translations } from '../translations';
import { Footer } from './Footer';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  year: string;
  role: string;
}

interface HomePageProps {
  onProjectClick: (projectId: string) => void;
  projects: Project[];
  language: Language;
  onViewProjects: () => void;
  onViewProcesses: () => void;
  onViewAbout: () => void;
}

export function HomePage({ onProjectClick, projects, language, onViewProjects, onViewProcesses, onViewAbout }: HomePageProps) {
  const t = translations[language].home;
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Decorative gradient blobs */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] blob-purple animate-pulse-glow -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] blob-purple animate-pulse-glow -z-10" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full gradient-mesh -z-20" />
        
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs text-primary">{t.availability}</span>
            </div>
            <h1 className="text-[4rem] leading-[0.95] mb-6 tracking-tight max-w-4xl">
              {t.heroTitle1} <span className="italic font-light">{t.heroTitle2}</span>
              <br />
              <span className="text-muted-foreground">{t.heroTitle3}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-4">{t.name}</p>
            <p className="text-base text-muted-foreground max-w-xl mb-12">
              {t.heroDescription}
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="gap-2" onClick={onViewProjects}>
                {t.viewProjects} <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
              >
                <a href="mailto:your.email@example.com?subject=Let's work together">
                  {t.getInTouch}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Processes & Projects Grid */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Processes */}
            <div 
              id="processes" 
              className="group relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-12 border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={onViewProcesses}
            >
              <div className="absolute top-0 right-0 w-32 h-32 blob-purple opacity-50 -z-10" />
              <div className="absolute top-8 right-8 text-[120px] leading-none opacity-[0.03] select-none">01</div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-6 h-6 text-primary-foreground" />
                </div>
                <h2>{t.processesTitle}</h2>
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {t.processesDescription}
              </p>
              <div className="space-y-1">
                {[
                  { num: "01", label: t.processStep1 },
                  { num: "02", label: t.processStep2 },
                  { num: "03", label: t.processStep3 },
                  { num: "04", label: t.processStep4 }
                ].map((item) => (
                  <div key={item.num} className="flex items-center py-4 gap-4 group/item">
                    <span className="text-xs text-muted-foreground/50 font-mono">{item.num}</span>
                    <div className="flex-1 h-px bg-border" />
                    <span className="text-sm text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects Overview */}
            <div 
              className="group relative gradient-purple text-primary-foreground rounded-3xl p-12 overflow-hidden hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 cursor-pointer animate-gradient"
              onClick={onViewProjects}
            >
              <div className="absolute top-8 right-8 text-[120px] leading-none opacity-[0.08] select-none">02</div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2>{t.projectsTitle}</h2>
              </div>
              <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                {t.projectsDescription}
              </p>
              <div className="space-y-1">
                {[
                  { label: t.projectStat1 },
                  { label: t.projectStat2 },
                  { label: t.projectStat3 },
                  { label: t.projectStat4 },
                ].map((item, index) => (
                  <div key={`stat-${index}`} className="flex items-center justify-between py-4 border-b border-primary-foreground/10 last:border-0 group/item">
                    <span className="group-hover/item:translate-x-1 transition-transform">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24 px-6 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">{t.featuredWorkLabel}</p>
              <h2 className="text-5xl">{t.featuredWorkTitle}</h2>
              <p className="text-muted-foreground mt-3">{t.featuredWorkDescription}</p>
            </div>
            <Button variant="ghost" className="gap-2 group" onClick={onViewProjects}>
              {t.viewAll}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.id} style={{ animationDelay: `${index * 100}ms` }} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <ProjectCard {...project} onClick={() => onProjectClick(project.id)} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Philosophy */}
      <section id="about" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/50 mb-6">
              <Users className="w-10 h-10 text-foreground" />
            </div>
            <h2 className="text-5xl mb-6">{t.philosophyTitle}</h2>
          </div>
          <div className="space-y-6 text-center">
            <p className="text-xl text-foreground leading-relaxed">
              {t.philosophyQuote}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.philosophyDescription}
            </p>
          </div>
         
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <h2 className="text-5xl mb-4 text-primary-foreground">{t.ctaTitle}</h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            {t.ctaDescription}
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="gap-2"
              asChild
            >
              <a href="mailto:your.email@example.com?subject=Let's work together">
                <Mail className="w-5 h-5" />
                {t.getInTouch}
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 bg-transparent text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10 hover:text-primary-foreground"
              onClick={onViewProjects}
            >
              {t.viewProjects} <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer 
        language={language}
        onHomeClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onProjectsClick={onViewProjects}
        onProcessesClick={onViewProcesses}
        onAboutClick={onViewAbout}
      />
    </>
  );
}