import React from "react";
import logoImage from "../assets/LogoZuPortfolioV2.svg?url";
import { Language, translations } from "../translations";
import { Button } from "./ui/button";
import { SendHorizontal } from "lucide-react";

interface HeaderProps {
  onHomeClick?: () => void;
  onProjectsClick?: () => void;
  onProcessesClick?: () => void;
  onAboutClick?: () => void;
  language: Language;
  currentView?: "home" | "projects" | "project" | "processes" | "about";
}

export function Header({
  onHomeClick,
  onProjectsClick,
  onProcessesClick,
  onAboutClick,
  language,
  currentView = "home",
}: HeaderProps) {
  const t = translations[language].nav;

  // For project detail pages, consider "projects" as active
  const activeView = currentView === "project" ? "projects" : currentView;

  return (
    <header className="fixed left-1/2 -translate-x-1/2 top-4 container max-w-6xl z-50">
      <div className="backdrop-blur-xl border border-orange-200/15 shadow-lg px-4 py-2 rounded-full flex items-center gap-8 w-full">
        <div className="flex items-center flex-shrink-0">
          <img
            src={logoImage}
            alt="Logo"
            className="h-8 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={onHomeClick}
          />
        </div>
        <div className="flex items-center gap-10">
          <nav className="flex-1 flex items-center justify-center gap-10">
            <a
              href="#home"
              onClick={onHomeClick}
              className={`text-sm transition-colors relative group cursor-pointer ${
                activeView === "home"
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {t.home}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-orange-600 transition-all ${
                  activeView === "home" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
            <a
              onClick={onProjectsClick}
              className={`text-sm transition-colors relative group cursor-pointer ${
                activeView === "projects"
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {t.projects}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-orange-600 transition-all ${
                  activeView === "projects"
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </a>
            <a
              onClick={onProcessesClick}
              className={`text-sm transition-colors relative group cursor-pointer ${
                activeView === "processes"
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {t.processes}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-orange-600 transition-all ${
                  activeView === "processes"
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </a>
            <a
              onClick={onAboutClick}
              className={`text-sm transition-colors relative group cursor-pointer ${
                activeView === "about"
                  ? "text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {t.about}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-orange-600 transition-all ${
                  activeView === "about" ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </a>
            <Button size="lg" asChild>
              <a href="mailto:zuzanna.marchewka1@gmail.com?subject=Let's work together">
                {translations[language].home.getInTouch}{" "}
                <SendHorizontal className="w-4 h-4" />
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
