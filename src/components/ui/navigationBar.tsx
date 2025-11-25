import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logoImage from "../../assets/LogoZuPortfolioV2.svg?url";
import { Button } from "./button";
import { SendHorizontal, Menu, X } from "lucide-react";
const headerContent = {
  getInTouch: "Get in touch",
};

const content = {
  home: "Home",
  projects: "Projects",
  processes: "Processes",
  about: "About",
};

export function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Determine active view based on current pathname
  const getActiveView = () => {
    const path = location.pathname;
    if (path === "/") return "home";
    if (path.startsWith("/projects")) return "projects";
    if (path === "/processes") return "processes";
    if (path === "/about") return "about";
    return "home";
  };

  const activeView = getActiveView();

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
              onClick={() => navigate("/")}
            />
          </div>

          {/* Desktop nav */}
          <div className="flex-1 items-center ">
            <nav className="hidden md:flex justify-center gap-8 lg:gap-10">
              {/* HOME */}
              <button
                type="button"
                onClick={() => navigate("/")}
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
              </button>

              {/* PROJECTS */}
              <button
                type="button"
                onClick={() => navigate("/projects")}
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
              </button>

              {/* PROCESSES */}
              <button
                type="button"
                onClick={() => navigate("/processes")}
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
              </button>

              {/* ABOUT */}
              <button
                type="button"
                onClick={() => navigate("/about")}
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
              </button>
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
                  navigate("/");
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
                  navigate("/projects");
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
                  navigate("/processes");
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
                  navigate("/about");
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
