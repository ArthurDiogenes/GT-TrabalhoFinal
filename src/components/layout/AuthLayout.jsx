import React from 'react';
import Footer from './Footer';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-4 px-6 bg-white">
        <div className="container mx-auto">
          <a href="/" className="text-pink-600 font-bold text-xl flex items-center">
            <img src="/src/assets/logos/logo-header.svg" alt="Digital Store" className="h-6 mr-2" />
          </a>
        </div>
      </header>
      
      <main className="flex-grow bg-purple-200 flex items-center justify-center px-4 py-8">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default AuthLayout;