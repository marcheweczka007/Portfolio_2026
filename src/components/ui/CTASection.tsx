import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./button";
import { Mail, ArrowRight } from "lucide-react";
import homeContent from "../pages/HomePage/homeData";

export function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="container mx-auto px-6 py-20 mb-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-white">
        {/* Soft glow blobs */}
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -top-10 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-10 right-1/4 w-72 h-72 bg-white rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl mx-auto px-6 py-12 md:px-10 md:py-16 text-center space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/80">
            Let's collaborate
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Interested in working together?
          </h2>
          <p className="text-base md:text-lg text-white/85">
            Tell me about your product, team, or idea and we'll explore how
            design and thoughtful UX can move it forward.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="default" className="gap-2" asChild>
              <a href="mailto:zuzanna.marchewka1@gmail.com?subject=Let's work together">
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white"
              onClick={() => navigate("/projects")}
            >
              View More Projects <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
