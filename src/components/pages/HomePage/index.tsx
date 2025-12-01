import React from "react";
import { ProjectCard } from "../../ui/ProjectCard";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { ArrowRight, Lightbulb, Target, Mail } from "lucide-react";
import { SendHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "../ProjectsPage/projects/projects.ts";
import homeContent from "./homeData.ts";
import PageLayout from "../../pageUtilities/PageLayout.tsx";
import { CTASection } from "../../ui/CTASection.tsx";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <PageLayout>
      {/* Hero Section */}
      <section id="home" className="relative pt-14 pb-20 px-6 overflow-hidden">
        {/* Decorative gradient blobs */}
        <div className="absolute top-32 right-0 w-[800px] h-[600px] blob-purple animate-pulse-glow -z-10" />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] blob-purple animate-pulse-glow -z-10"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full gradient-mesh -z-20" />

        <div className="pt-12 container mx-auto max-w-12xl">
          <div className="flex flex-col items-center text-center relative">
            <h1 className="text-3xl md:text-4xl lg:text-5xl  leading-tight mb-8 tracking-tight font-medium max-w-4xl">
              Hey, I'm Zuza 👋 <br /> A SaaS{" "}
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-orange-100 border border-orange-200/60 text-orange-600 text-2xl md:text-3xl lg:text-4xl  font-medium mx-1">
                Product designer
              </span>{" "}
              learning to{" "}
              <span
                className="relative inline-block underline decoration-2 decoration-[#DE5516] underline-offset-4"
                style={{
                  textDecorationLine: "underline",
                  textDecorationColor: "#059669",
                  textDecorationThickness: "2px",
                  textDecorationStyle: "wavy",
                }}
              >
                build in code
              </span>{" "}
              and collaborate more closely with engineering.
            </h1>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <a href="mailto:zuzanna.marchewka1@gmail.com?subject=Let's work together">
                  {homeContent.getInTouch}{" "}
                  <SendHorizontal className="w-4 h-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                onClick={() => navigate("/projects")}
              >
                {homeContent.viewProjects} <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Processes & Projects Grid */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Processes */}
            <Card
              id="processes"
              className="group relative bg-gradient-to-br from-orange-100/50 to-orange-300/50 rounded-3xl border-orange-200/20 hover:border-orange-300/40 hover:shadow-lg hover:shadow-orange-400/10 transition-all duration-300 cursor-pointer overflow-hidden p-0"
              onClick={() => navigate("/processes")}
            >
              <div className="absolute top-0 right-0 w-32 h-32 blob-purple opacity-50 -z-10" />
              <div className="absolute top-8 right-8 text-[120px] leading-none opacity-[0.03] select-none">
                01
              </div>
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h2>{homeContent.processesTitle}</h2>
                </div>
                <p className="text-md text-gray-600 mb-8 leading-relaxed">
                  {homeContent.processesDescription}
                </p>
                <div className="space-y-1">
                  {[
                    { label: homeContent.processStep1 },
                    { label: homeContent.processStep2 },
                    { label: homeContent.processStep3 },
                    { label: homeContent.processStep4 },
                  ].map((item) => (
                    <div
                      className="flex items-center justify-between py-4 border-b border-orange/30 last:border-0 group/item"
                      key={item.label}
                    >
                      <span className="text-md text-gray-900">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Projects Overview */}
            <Card
              className="group relative bg-gradient-to-br from-orange-500 to-orange-300 text-white rounded-3xl border-0 overflow-hidden hover:shadow-2xl hover:shadow-orange-600/30 transition-all duration-300 cursor-pointer animate-gradient p-0"
              onClick={() => navigate("/projects")}
            >
              <div className="absolute top-8 right-8 text-[120px] leading-none opacity-[0.08] select-none">
                02
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6 text-orange-600" />
                  </div>
                  <h2>{homeContent.projectsTitle}</h2>
                </div>
                <p className="text-md text-white/90 mb-8 leading-relaxed">
                  {homeContent.projectsDescription}
                </p>
                <div className="space-y-1">
                  {[
                    { label: homeContent.projectStat1 },
                    { label: homeContent.projectStat2 },
                    { label: homeContent.projectStat3 },
                    { label: homeContent.projectStat4 },
                  ].map((item, index) => (
                    <div
                      key={`stat-${index}`}
                      className="flex items-center justify-between py-4 border-b border-white/20 last:border-0 group/item"
                    >
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24 px-6 bg-orange-50/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                {homeContent.featuredWorkLabel}
              </p>
              <h2 className="text-5xl">{homeContent.featuredWorkTitle}</h2>
              <p className="text-gray-500 mt-3">
                {homeContent.featuredWorkDescription}
              </p>
            </div>
            <Button
              variant="ghost"
              className="gap-2 group"
              onClick={() => navigate("/projects")}
            >
              {homeContent.viewAll}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const isDisabled =
                project.id === "Coding Poject 1" ||
                project.id === "Coding Poject 2";
              return (
                <div
                  key={project.id}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                >
                  <ProjectCard
                    {...project}
                    onClick={() => {
                      if (!isDisabled) {
                        navigate(`/projects/${project.id}`);
                      }
                    }}
                    disabled={isDisabled}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </PageLayout>
  );
}
