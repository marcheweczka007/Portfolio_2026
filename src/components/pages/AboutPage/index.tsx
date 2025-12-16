import React from "react";
import Timeline from "../../ui/CustomUI/Timeline";
import ascentLogo from "../../../assets/experience/ascentplatformLogo.jpg";
import grafterrLogo from "../../../assets/experience/grafterrLogo.png";
import infracostLogo from "../../../assets/experience/infracostLogo.png";
import aboutContent from "./aboutData.ts";
import { Button } from "../../ui/button.tsx";
import { ScrollToTop } from "../../ui/scrollToTop.tsx";

import { Zap, Search, Box, Sparkles, Layers, Code2 } from "lucide-react";
import portraitImage from "../../../assets/zuza_portfolio.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import PageLayout from "../../pageUtilities/PageLayout.tsx";
import BackButton from "../../pageUtilities/BackButton.tsx";

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="relative overflow-hidden">
        <BackButton text={aboutContent.backToHome} />

        {/* Profile Section */}
        <section className="container mx-auto max-w-6xl px-6 mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-2/5">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative group">
                <img
                  src={portraitImage}
                  alt="Zuza Marchewka"
                  className="w-full h-full object-cover rounded-8xl"
                />
              </div>
            </div>

            <div className="md:w-3/5">
              <h1 className="mb-6">{aboutContent.pageTitle}</h1>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{aboutContent.bioP1}</p>
                <p>{aboutContent.bioP2}</p>
                <p>{aboutContent.bioP3}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200/20 mt-2">
                  <Sparkles className="w-4 h-4 text-orange-600" />
                  <span className="text-xs text-orange-600">
                    {aboutContent.bioP4}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise Sections */}
        <section className="container mx-auto max-w-6xl px-6 mb-20">
          <h2 className="mb-8 text-2xl font-bold">
            {aboutContent.expertiseTitle}
          </h2>

          <Accordion type="multiple" className="space-y-4">
            <AccordionItem value="lean-ux">
              <AccordionTrigger icon={Zap} title={aboutContent.leanUx} />
              <AccordionContent>
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

            <AccordionItem value="research">
              <AccordionTrigger icon={Search} title={aboutContent.research} />
              <AccordionContent>
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

            <AccordionItem value="ooux">
              <AccordionTrigger icon={Box} title={aboutContent.ooux} />
              <AccordionContent>
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

            <AccordionItem value="ai-prototyping">
              <AccordionTrigger
                icon={Sparkles}
                title={aboutContent.aiPrototyping}
              />
              <AccordionContent>
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

            <AccordionItem value="design-system">
              <AccordionTrigger
                icon={Layers}
                title={aboutContent.designSystem}
              />
              <AccordionContent>
                <p className="mb-4">{aboutContent.designSystemContent1}</p>
                <p className="mb-4">{aboutContent.designSystemContent2}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{aboutContent.designSystemPoint1}</li>
                  <li>{aboutContent.designSystemPoint2}</li>
                  <li>{aboutContent.designSystemPoint3}</li>
                  <li>{aboutContent.designSystemPoint4}</li>
                  <li>{aboutContent.designSystemPoint5}</li>
                  <li>{aboutContent.designSystemPoint6}</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="coding">
              <AccordionTrigger icon={Code2} title={aboutContent.coding} />
              <AccordionContent>
                <p className="mb-4">{aboutContent.codingContent1}</p>
                <p className="mb-4">{aboutContent.codingContent2}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{aboutContent.codingPoint1}</li>
                  <li>{aboutContent.codingPoint2}</li>
                  <li>{aboutContent.codingPoint3}</li>
                  <li>{aboutContent.codingPoint4}</li>
                  <li>{aboutContent.codingPoint5}</li>
                  <li>{aboutContent.codingPoint6}</li>
                  {/* <li>{aboutContent.codingPoint7}</li>
                  <li>{aboutContent.codingPoint8}</li> */}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className=" mb-8 text-2xl font-bold container mx-auto max-w-6xl px-6 mb-10">
          Work Experience
        </section>
        {/* Experience Timeline */}
        <section className="container mx-auto max-w-6xl px-6 mb-20">
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
                year: "2022-2023",
              },
            ]}
          />
        </section>
        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </PageLayout>
  );
}
