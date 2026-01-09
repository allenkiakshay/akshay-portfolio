"use client";
import { useState, useEffect } from "react";

const Fotter = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 group"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6 group-hover:-translate-y-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}

      {/* Footer Wave */}
      <div className="relative w-full mt-12">
        <svg
          className="w-full h-auto text-gray-100 dark:text-gray-800"
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>

      {/* Main Footer */}
      <footer className="relative bg-gray-100 dark:bg-gray-800 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Top Section - Brand & Description */}
          <div className="flex flex-col items-center text-center mb-8 pb-6 border-b border-gray-300 dark:border-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Allenki Akshay
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
              Full Stack Developer passionate about creating elegant solutions to complex problems.
              Let's build something amazing together.
            </p>
            
            {/* Social Icons - Larger */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/allenkiakshay"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/allenki-akshay/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/AkshayAllenki"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/allenki_akshay/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="mailto:allenkiakshay8322@gmail.com"
                className="group p-3 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom Section - Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 inline-flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-3 transition-all duration-300"></span>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 inline-flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-3 transition-all duration-300"></span>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/experience" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 inline-flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-3 transition-all duration-300"></span>
                    Experience
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 inline-flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-3 transition-all duration-300"></span>
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/Allenki Akshay.pdf" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 inline-flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-purple-600 dark:bg-purple-400 group-hover:w-3 transition-all duration-300"></span>
                    Resume
                  </a>
                </li>
                <li>
                  <a href="https://github.com/allenkiakshay" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 inline-flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-purple-600 dark:bg-purple-400 group-hover:w-3 transition-all duration-300"></span>
                    GitHub Profile
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/allenki-akshay/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 inline-flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-purple-600 dark:bg-purple-400 group-hover:w-3 transition-all duration-300"></span>
                    LinkedIn Profile
                  </a>
                </li>
              </ul>
            </div>

            {/* Get in Touch */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in Touch
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:allenkiakshay8322@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300 break-all text-sm">
                    allenkiakshay8322@gmail.com
                  </a>
                </li>
                <li className="pt-2">
                  <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed">
                    Open to freelance projects, collaborations, and full-time opportunities.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="pt-8 border-t border-gray-300 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Allenki Akshay. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center gap-2">
                <span>Built with</span>
                <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span>using Next.js & Tailwind CSS</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Fotter;
