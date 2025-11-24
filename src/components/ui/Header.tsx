import React, { useState } from "react";
import logoImage from "../../assets/LogoZuPortfolioV2.svg?url";
import { Button } from "./button";
import { SendHorizontal, Menu, X } from "lucide-react";
const headerContent = {
  getInTouch: "Get in touch",
};

interface HeaderProps {
  onHomeClick?: () => void;
  onProjectsClick?: () => void;
  onProcessesClick?: () => void;
  onAboutClick?: () => void;
  currentView?: "home" | "projects" | "project" | "processes" | "about";
}

const content = {
  home: "Home",
  projects: "Projects",
  processes: "Processes",
  about: "About",
};

export function Header({
  onHomeClick,
  onProjectsClick,
  onProcessesClick,
  onAboutClick,

  currentView = "home",
}: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // For project detail pages, consider "projects" as active
  const activeView = currentView === "project" ? "projects" : currentView;

  return (
    <header className="fixed left-1/2 -translate-x-1/2 top-4 w-full z-50 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-xl border border-orange-200/15 shadow-lg px-4 py-2 rounded-full flex md:grid md:grid-cols-[auto,1fr,auto] items-center gap-4 md:gap-8 w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logoImage}
              alt="Logo"
              className="h-8 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={onHomeClick}
            />
          </div>

          {/* Desktop nav */}
          <div className="flex-1 items-center ">
            <nav className="hidden md:flex justify-center gap-8 lg:gap-10">
              {/* HOME */}
              <a
                href="#home"
                onClick={onHomeClick}
                className={`text-sm transition-colors relative group cursor-pointer ${
                  activeView === "home"
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {content.home}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-orange-600 transition-all ${
                    activeView === "home" ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>

              {/* PROJECTS */}
              <a
                onClick={onProjectsClick}
                className={`text-sm transition-colors relative group cursor-pointer ${
                  activeView === "projects"
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {content.projects}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-orange-600 transition-all ${
                    activeView === "projects"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>

              {/* PROCESSES */}
              <a
                onClick={onProcessesClick}
                className={`text-sm transition-colors relative group cursor-pointer ${
                  activeView === "processes"
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {content.processes}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-orange-600 transition-all ${
                    activeView === "processes"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>

              {/* ABOUT */}
              <a
                onClick={onAboutClick}
                className={`text-sm transition-colors relative group cursor-pointer ${
                  activeView === "about"
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {content.about}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-orange-600 transition-all ${
                    activeView === "about" ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </nav>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex justify-end">
            <Button size="lg" asChild>
              <a
                href="mailto:zuzanna.marchewka1@gmail.com?subject=Let's work together"
                className="flex items-center gap-2"
              >
                {headerContent.getInTouch}
                <SendHorizontal className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          {/* <button
            type="button"
            className="inline-flex md:hidden items-center justify-center ml-auto p-2 rounded-full text-gray-800 hover:bg-orange-50 transition-colors"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button> */}
        </div>

        {/* Mobile menu panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden lg mt-2 bg-white border border-orange-200/40 rounded-2xl shadow-lg px-4 py-3">
            <nav className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  onHomeClick?.();
                  setIsMobileMenuOpen(false);
                }}
                className={`text-sm text-left ${
                  activeView === "home"
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {content.home}
              </button>

              <button
                type="button"
                onClick={() => {
                  onProjectsClick?.();
                  setIsMobileMenuOpen(false);
                }}
                className={`text-sm text-left ${
                  activeView === "projects"
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {content.projects}
              </button>

              <button
                type="button"
                onClick={() => {
                  onProcessesClick?.();
                  setIsMobileMenuOpen(false);
                }}
                className={`text-sm text-left ${
                  activeView === "processes"
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {content.processes}
              </button>

              <button
                type="button"
                onClick={() => {
                  onAboutClick?.();
                  setIsMobileMenuOpen(false);
                }}
                className={`text-sm text-left ${
                  activeView === "about"
                    ? "text-gray-900"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {content.about}
              </button>

              <div className="pt-2">
                <Button size="lg" asChild className="w-full justify-between">
                  <a
                    href="mailto:zuzanna.marchewka1@gmail.com?subject=Let's work together"
                    className="flex items-center justify-center gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {headerContent.getInTouch}
                    <SendHorizontal className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
