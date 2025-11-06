import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import ScrollToTop from './components/ScrollToTop';
import { LanguageProvider } from './i18n/LanguageProvider';
import AiEducation from './pages/AiEducation';
import IntelligentAutomation from './pages/IntelligentAutomation';
import DataAnalysis from './pages/DataAnalysis';
import AiConsulting from './pages/AiConsulting';
import CustomDevelopment from './pages/CustomDevelopment';
import TechnicalSupport from './pages/TechnicalSupport';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/service/ai-education" element={<AiEducation />} />
          <Route path="/service/intelligent-automation" element={<IntelligentAutomation />} />
          <Route path="/service/data-analysis" element={<DataAnalysis />} />
          <Route path="/service/ai-consulting" element={<AiConsulting />} />
          <Route path="/service/custom-development" element={<CustomDevelopment />} />
          <Route path="/service/technical-support" element={<TechnicalSupport />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App
