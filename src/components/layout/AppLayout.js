import React from 'react';
import MainNavbar from '../navbars/MainNavbar';

function AppLayout({ children }) {
  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      <main className="flex-grow-1">
        {children}
      </main>
      <footer className="bg-secondary text-white py-3 mt-auto">
        <div className="container text-center">
          <p className="mb-0">© 2024 Mawhiba AI. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="text-white me-3">Privacy Policy</a>
            <a href="#" className="text-white me-3">Terms of Service</a>
            <a href="#" className="text-white">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AppLayout;
