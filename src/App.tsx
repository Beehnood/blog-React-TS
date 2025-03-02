import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './layouts/header';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage'; // Corrigé pour correspondre au fichier
import Footer from './layouts/footer';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/article/:id" element={<ArticlePage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;