import { Button } from './ui/button';
import { ArrowLeft, Zap, Search, Box, Sparkles, Layers, Code2 } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { translations, Language } from '../translations';
import { Footer } from './Footer';

interface AboutPageProps {
  onBack: () => void;
  language: Language;
  onProjectsClick?: () => void;
  onProcessesClick?: () => void;
  onAboutClick?: () => void;
}

export function AboutPage({ onBack, language, onProjectsClick, onProcessesClick, onAboutClick }: AboutPageProps) {
  const t = translations[language].about;
  
  return (
    <div className="min-h-screen bg-background pt-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 blob-purple opacity-20 -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/3 left-0 w-64 h-64 blob-purple opacity-20 -z-10 animate-pulse-glow" style={{ animationDelay: '3s' }} />
      
      {/* Back Button */}
      <div className="container mx-auto max-w-6xl px-6 mb-8">
        <Button variant="ghost" onClick={onBack} className="gap-2 -ml-4">
          <ArrowLeft className="w-4 h-4" />
          {t.backToHome}
        </Button>
      </div>

      {/* Profile Section */}
      <section className="container mx-auto max-w-4xl px-6 mb-20">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-2/5">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden gradient-purple flex items-center justify-center relative group">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
              </div>
              <div className="text-center relative z-10">
                <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 border-2 border-white/30">
                  <span className="text-6xl">👋</span>
                </div>
                <p className="text-sm text-white/80">Zuza Marchewka</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <h1 className="mb-6">{t.pageTitle}</h1>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {t.bioP1}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t.bioP2}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t.bioP3}
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mt-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-xs text-primary">{t.bioP4}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Sections */}
      <section className="container mx-auto max-w-4xl px-6 mb-20">
        <h2 className="mb-8">{t.expertiseTitle}</h2>
        
        <Accordion type="multiple" className="space-y-4">
          <AccordionItem value="lean-ux" className="border border-primary/20 rounded-2xl px-6 bg-primary/5 hover:bg-primary/10 transition-colors">
            <AccordionTrigger className="hover:no-underline py-6 [&>svg]:shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl">{t.leanUx}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-[52px]">
              <p className="mb-4">
                {t.leanUxContent1}
              </p>
              <p className="mb-4">
                {t.leanUxContent2}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t.leanUxPoint1}</li>
                <li>{t.leanUxPoint2}</li>
                <li>{t.leanUxPoint3}</li>
                <li>{t.leanUxPoint4}</li>
                <li>{t.leanUxPoint5}</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="research" className="border border-primary/20 rounded-2xl px-6 bg-primary/5 hover:bg-primary/10 transition-colors">
            <AccordionTrigger className="hover:no-underline py-6 [&>svg]:shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Search className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl">{t.research}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-[52px]">
              <p className="mb-4">
                {t.researchContent1}
              </p>
              <p className="mb-4">
                {t.researchContent2}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t.researchPoint1}</li>
                <li>{t.researchPoint2}</li>
                <li>{t.researchPoint3}</li>
                <li>{t.researchPoint4}</li>
                <li>{t.researchPoint5}</li>
                <li>{t.researchPoint6}</li>
                <li>{t.researchPoint7}</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ooux" className="border border-primary/20 rounded-2xl px-6 bg-primary/5 hover:bg-primary/10 transition-colors">
            <AccordionTrigger className="hover:no-underline py-6 [&>svg]:shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Box className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl">{t.ooux}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-[52px]">
              <p className="mb-4">
                {t.oouxContent1}
              </p>
              <p className="mb-4">
                {t.oouxContent2}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t.oouxPoint1}</li>
                <li>{t.oouxPoint2}</li>
                <li>{t.oouxPoint3}</li>
                <li>{t.oouxPoint4}</li>
                <li>{t.oouxPoint5}</li>
                <li>{t.oouxPoint6}</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ai-prototyping" className="border border-primary/20 rounded-2xl px-6 bg-primary/5 hover:bg-primary/10 transition-colors">
            <AccordionTrigger className="hover:no-underline py-6 [&>svg]:shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl">{t.aiPrototyping}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-[52px]">
              <p className="mb-4">
                {t.aiPrototypingContent1}
              </p>
              <p className="mb-4">
                {t.aiPrototypingContent2}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t.aiPrototypingPoint1}</li>
                <li>{t.aiPrototypingPoint2}</li>
                <li>{t.aiPrototypingPoint3}</li>
                <li>{t.aiPrototypingPoint4}</li>
                <li>{t.aiPrototypingPoint5}</li>
                <li>{t.aiPrototypingPoint6}</li>
                <li>{t.aiPrototypingPoint7}</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="design-system" className="border border-primary/20 rounded-2xl px-6 bg-primary/5 hover:bg-primary/10 transition-colors">
            <AccordionTrigger className="hover:no-underline py-6 [&>svg]:shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl">{t.designSystem}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-[52px]">
              <p className="mb-4">
                {t.designSystemContent1}
              </p>
              <p className="mb-4">
                {t.designSystemContent2}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t.designSystemPoint1}</li>
                <li>{t.designSystemPoint2}</li>
                <li>{t.designSystemPoint3}</li>
                <li>{t.designSystemPoint4}</li>
                <li>{t.designSystemPoint5}</li>
                <li>{t.designSystemPoint6}</li>
                <li>{t.designSystemPoint7}</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="coding" className="border border-primary/20 rounded-2xl px-6 bg-primary/5 hover:bg-primary/10 transition-colors">
            <AccordionTrigger className="hover:no-underline py-6 [&>svg]:shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Code2 className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl">{t.coding}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-[52px]">
              <p className="mb-4">
                {t.codingContent1}
              </p>
              <p className="mb-4">
                {t.codingContent2}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t.codingPoint1}</li>
                <li>{t.codingPoint2}</li>
                <li>{t.codingPoint3}</li>
                <li>{t.codingPoint4}</li>
                <li>{t.codingPoint5}</li>
                <li>{t.codingPoint6}</li>
                <li>{t.codingPoint7}</li>
                <li>{t.codingPoint8}</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <Footer 
        language={language}
        onHomeClick={onBack}
        onProjectsClick={onProjectsClick}
        onProcessesClick={onProcessesClick}
        onAboutClick={onAboutClick}
      />
    </div>
  );
}
