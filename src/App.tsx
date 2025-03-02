import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './layouts/header';
import ArticlePage from './pages/ArticlePages';
import HomePages from './pages/HomePages';
import Footer from './layouts/footer';




const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header /> {/* Remplace le header statique */}
      <main>
        <Routes>
          <Route path="/" element={<HomePages />} />
          <Route path="/pages/articlePages" element={<ArticlePage />} />
        </Routes>
      </main>
     <Footer/>
    </div>
  );
};

export default App;