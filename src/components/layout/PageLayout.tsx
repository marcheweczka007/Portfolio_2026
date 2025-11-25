import { Footer } from "../ui/Footer";
import { NavigationBar } from "../ui/navigationBar";
import React from "react";

const PageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-background pt-24">
      <NavigationBar />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
