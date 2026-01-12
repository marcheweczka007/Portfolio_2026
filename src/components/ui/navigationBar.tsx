import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logoImage from "../../assets/Logo/LogoZuPortfolioV2.svg?url";
import { Button } from "./button";
import { SendHorizontal, Menu, X, Download } from "lucide-react";
const headerContent = {
  getInTouch: "Let's chat",
  downloadResume: "Download resume",
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
      <div className="max-w-7xl mx-auto">
        <div
          className="backdrop-blur-xl  shadow-lg px-4 py-2 rounded-full
        flex items-center justify-between gap-4
        lg:grid lg:grid-cols-[auto,1fr,auto,auto] lg:gap-8
        w-full"
        >
          {/* Logo */}
          <div className="flex-shrink-0 lg:mr-52 ">
            <img
              src={logoImage}
              alt="Logo"
              className="h-8 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => navigate("/")}
            />
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <nav className="flex flex-1 justify-center gap-12 ">
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
          <div className="hidden lg:flex justify-end">
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

          {/* Desktop CTA - Download Resume */}
          <div className="hidden lg:flex justify-end">
            <Button size="lg" variant="outline" asChild>
              <a
                href="/assets/Other/CV_Zuza-ProdDes.pdf"
                className="flex items-center gap-2"
                download="Zuza-CV.pdf"
              >
                {headerContent.downloadResume}
                <Download className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:!hidden xl:!hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-800 hover:bg-orange-50 transition-colors"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white/10 rounded-2xl shadow-xl px-4 py-3 backdrop-blur-xl">
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
              <div className="flex gap-2 pt-4 justify-end">
                <Button size="sm" asChild>
                  <a
                    href="mailto:zuzanna.marchewka1@gmail.com?subject=Let's work together"
                    className="flex gap-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {headerContent.getInTouch}
                    <SendHorizontal className="w-4 h-4" />
                  </a>
                </Button>

                <Button size="sm" variant="outline" asChild>
                  <a
                    href="/assets/Other/CV_Zuza-ProdDes.pdf"
                    className="flex items-center gap-2"
                    download="Zuza-CV.pdf"
                  >
                    {headerContent.downloadResume}
                    <Download className="w-4 h-4" />
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
