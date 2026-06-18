import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import {
  AboutPage,
  ContactPage,
  HomePage,
  ProjectDetailPage,
  ProjectsPage,
  StackPage,
} from "./pages/PortfolioPages";

function App() {
  return (
    <div className="site-shell">
      <Header />

      <main className="page-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/proyectos" element={<ProjectsPage />} />
          <Route path="/proyectos/:slug" element={<ProjectDetailPage />} />
          <Route path="/stack" element={<StackPage />} />
          <Route path="/sobre-mi" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
