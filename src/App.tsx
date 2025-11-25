import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ProjectsPage from "./components/pages/ProjectsPage";
import AboutPage from "./components/pages/AboutPage";
import ProcessesPage from "./components/pages/ProcessesPage";
import React from "react";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/processes" element={<ProcessesPage />} />
    </Routes>
  );
}
