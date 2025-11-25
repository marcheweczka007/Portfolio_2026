import React from "react";
import Timeline from "../../ui/timeline";
import ascentLogo from "../../../assets/experience/ascentplatformLogo.jpg";
import grafterrLogo from "../../../assets/experience/grafterrLogo.png";
import infracostLogo from "../../../assets/experience/infracostLogo.png";
import aboutContent from "./aboutData.ts";

import { Zap, Search, Box, Sparkles, Layers, Code2 } from "lucide-react";
import portraitImage from "../../../assets/zuza_portfolio.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import PageLayout from "../../pageUtilities/PageLayout.tsx";
import BackButton from "../../pageUtilities/BackButton.tsx";

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="relative overflow-hidden">
        <BackButton text={aboutContent.backToHome} />

        {/* Profile Section */}
        <section className="container mx-auto max-w-4xl px-6 mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-2/5">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative group">
                <ImageWithFallback
                  src={portraitImage}
                  alt="Zuza Marchewka"
                  className="w-full h-full object-cover rounded-8xl"
                />
              </div>
            </div>

            <div className="md:w-3/5">
              <h1 className="mb-6">{aboutContent.pageTitle}</h1>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {aboutContent.bioP1}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {aboutContent.bioP2}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {aboutContent.bioP3}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mt-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-xs text-primary">
                    {aboutContent.bioP4}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Sections */}
        <section className="container mx-auto max-w-4xl px-6 mb-20">
          <h2 className="mb-8">{aboutContent.expertiseTitle}</h2>

          <Accordion type="multiple" className="space-y-4">
            <AccordionItem
              value="lean-ux"
              className="border border-primary/20 rounded-2xl px-6 bg-primary/5 hover:bg-primary/10 transition-colors"
            >
              <AccordionTrigger className="hover:no-underline py-6 [&>svg]:shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xl">{aboutContent.leanUx}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-[52px]">
                <p className="mb-4">{aboutContent.leanUxContent1}</p>
                <p className="mb-4">{aboutContent.leanUxContent2}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{aboutContent.leanUxPoint1}</li>
                  <li>{aboutContent.leanUxPoint2}</li>
                  <li>{aboutContent.leanUxPoint3}</li>
                  <li>{aboutContent.leanUxPoint4}</li>
                  <li>{aboutContent.leanUxPoint5}</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="research"
              className="border border-primary/20 rounded-2xl px-6 bg-primary/5 hover:bg-primary/10 transition-colors"
            >
              <AccordionTrigger className="hover:no-underline py-6 [&>svg]:shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Search className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xl">{aboutContent.research}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-[52px]">
                <p className="mb-4">{aboutContent.researchContent1}</p>
                <p className="mb-4">{aboutContent.researchContent2}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{aboutContent.researchPoint1}</li>
                  <li>{aboutContent.researchPoint2}</li>
                  <li>{aboutContent.researchPoint3}</li>
                  <li>{aboutContent.researchPoint4}</li>
                  <li>{aboutContent.researchPoint5}</li>
                  <li>{aboutContent.researchPoint6}</li>
                  <li>{aboutContent.researchPoint7}</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="ooux"
              className="border border-primary/20 rounded-2xl px-6 bg-primary/5 hover:bg-primary/10 transition-colors"
            >
              <AccordionTrigger className="hover:no-underline py-6 [&>svg]:shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Box className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xl">{aboutContent.ooux}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-[52px]">
                <p className="mb-4">{aboutContent.oouxContent1}</p>
                <p className="mb-4">{aboutContent.oouxContent2}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{aboutContent.oouxPoint1}</li>
                  <li>{aboutContent.oouxPoint2}</li>
                  <li>{aboutContent.oouxPoint3}</li>
                  <li>{aboutContent.oouxPoint4}</li>
                  <li>{aboutContent.oouxPoint5}</li>
                  <li>{aboutContent.oouxPoint6}</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="ai-prototyping"
              className="border border-primary/20 rounded-2xl px-6 bg-primary/5 hover:bg-primary/10 transition-colors"
            >
              <AccordionTrigger className="hover:no-underline py-6 [&>svg]:shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xl">{aboutContent.aiPrototyping}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-[52px]">
                <p className="mb-4">{aboutContent.aiPrototypingContent1}</p>
                <p className="mb-4">{aboutContent.aiPrototypingContent2}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{aboutContent.aiPrototypingPoint1}</li>
                  <li>{aboutContent.aiPrototypingPoint2}</li>
                  <li>{aboutContent.aiPrototypingPoint3}</li>
                  <li>{aboutContent.aiPrototypingPoint4}</li>
                  <li>{aboutContent.aiPrototypingPoint5}</li>
                  <li>{aboutContent.aiPrototypingPoint6}</li>
                  <li>{aboutContent.aiPrototypingPoint7}</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="design-system"
              className="border border-primary/20 rounded-2xl px-6 bg-primary/5 hover:bg-primary/10 transition-colors"
            >
              <AccordionTrigger className="hover:no-underline py-6 [&>svg]:shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Layers className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xl">{aboutContent.designSystem}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-[52px]">
                <p className="mb-4">{aboutContent.designSystemContent1}</p>
                <p className="mb-4">{aboutContent.designSystemContent2}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{aboutContent.designSystemPoint1}</li>
                  <li>{aboutContent.designSystemPoint2}</li>
                  <li>{aboutContent.designSystemPoint3}</li>
                  <li>{aboutContent.designSystemPoint4}</li>
                  <li>{aboutContent.designSystemPoint5}</li>
                  <li>{aboutContent.designSystemPoint6}</li>
                  <li>{aboutContent.designSystemPoint7}</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="coding"
              className="border border-primary/20 rounded-2xl px-6 bg-primary/5 hover:bg-primary/10 transition-colors"
            >
              <AccordionTrigger className="hover:no-underline py-6 [&>svg]:shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xl">{aboutContent.coding}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-[52px]">
                <p className="mb-4">{aboutContent.codingContent1}</p>
                <p className="mb-4">{aboutContent.codingContent2}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{aboutContent.codingPoint1}</li>
                  <li>{aboutContent.codingPoint2}</li>
                  <li>{aboutContent.codingPoint3}</li>
                  <li>{aboutContent.codingPoint4}</li>
                  <li>{aboutContent.codingPoint5}</li>
                  <li>{aboutContent.codingPoint6}</li>
                  <li>{aboutContent.codingPoint7}</li>
                  <li>{aboutContent.codingPoint8}</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
        <section className="container mx-auto max-w-4xl px-6 mb-10">
          Work Experience
        </section>
        {/* Experience Timeline */}
        <section className="container mx-auto max-w-4xl px-6 mb-20">
          <Timeline
            items={[
              {
                icon: ascentLogo,
                company: "Ascent Platform",
                role: "Product Designer",
                year: "2024–2025",
              },
              {
                icon: infracostLogo,
                company: "Infracost ",
                role: " (Freelance) Graphic Designer",
                year: "2024",
              },
              {
                icon: grafterrLogo,
                company: "Grafterr",
                role: "Junior UX Designer",
                year: "2023",
              },
            ]}
          />
        </section>
      </div>
    </PageLayout>
  );
}
