import React from "react";
import { useNavigate } from "react-router-dom";
const footerContent = {
  copyright: "© 2026 Zuza Marchewka. All rights reserved.",
};

export function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="max-w-6xl mx-auto py-6 px-6 border-t border-border">
      <div className="container mx-auto max-w-8xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <nav className="flex gap-8">
            <button
              onClick={() => navigate("/")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => navigate("/projects")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => navigate("/processes")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Processes
            </button>
            <button
              onClick={() => navigate("/about")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              About
            </button>
          </nav>
          <p className="text-sm text-muted-foreground">
            {footerContent.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
