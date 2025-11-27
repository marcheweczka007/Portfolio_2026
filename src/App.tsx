import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import ProjectsPage from "./components/pages/ProjectsPage";
import AboutPage from "./components/pages/AboutPage/index";
import ProcessesPage from "./components/pages/ProcessesPage";
import ProjectDetailPage from "./components/pages/ProjectDetailPage";
import React from "react";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:id" element={<ProjectDetailPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/processes" element={<ProcessesPage />} />
    </Routes>
  );
}
