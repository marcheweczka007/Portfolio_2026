import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./button";
import { SendHorizontal, Download } from "lucide-react";
import homeContent from "../pages/HomePage/homeData";

export function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6 mb-20">
      <div className="container mx-auto max-w-6xl flex justify-center">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-rose-500 text-white w-full">
          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto px-6 py-12 md:px-10 md:py-16 text-center space-y-6">
            <h2 className="text-4xl md:text-4xl">
              Interested in working together?
            </h2>
            <p className="text-base md:text-lg text-white/85">
              Tell me about your product, team, or idea and we’ll explore how
              design and thoughtful UX can move it forward.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="default" className="gap-2" asChild>
                <a href="mailto:zuzanna.marchewka1@gmail.com?subject=Let's work together">
                  Let's chat
                  <SendHorizontal className="w-5 h-5" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white"
                asChild
              >
                <a
                  href="/src/assets/Other/CV_Zuza-ProdDes.pdf"
                  download="Zuza-CV.pdf"
                >
                  Download resume <Download className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
