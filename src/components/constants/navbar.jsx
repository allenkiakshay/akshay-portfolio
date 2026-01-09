"use client";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => pathname === path;

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
      <div className="relative flex justify-center items-center w-[100vw] h-auto p-2 sm:p-4 md:p-6 lg:p-8">
        <div className="relative flex justify-between items-center lg:w-[50%] md:w-[60%] sm:w-[70%] w-[90%] h-[40px] md:h-[50px] lg:h-[60px] md:p-2 md:px-16">
          <div
            className="relative flex justify-center items-center w-fit h-auto p-2 border border-gray-300 dark:border-gray-700 rounded-full px-[10px] shadow-md cursor-pointer hover:shadow-lg hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-brightness-high text-yellow-400 transition-transform duration-300 hover:rotate-180"
                viewBox="0 0 16 16"
              >
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-moon-fill text-slate-700 transition-transform duration-300 hover:rotate-12"
                viewBox="0 0 16 16"
              >
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
              </svg>
            )}
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex relative items-center justify-between gap-6 lg:gap-8 font-medium">
            <a 
              className={`text-lg transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 relative group ${
                isActive('/') ? 'text-blue-600 dark:text-blue-400' : ''
              }`} 
              href="/"
            >
              Home
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform origin-left transition-transform duration-300 ${
                isActive('/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </a>
            <a 
              className={`text-lg transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 relative group ${
                isActive('/blog') ? 'text-blue-600 dark:text-blue-400' : ''
              }`}
              href="/blog"
            >
              Blog
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform origin-left transition-transform duration-300 ${
                isActive('/blog') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </a>
            <a 
              className={`text-lg transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 relative group ${
                isActive('/projects') ? 'text-blue-600 dark:text-blue-400' : ''
              }`} 
              href="/projects"
            >
              Projects
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform origin-left transition-transform duration-300 ${
                isActive('/projects') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`}></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg animate-fadeIn">
          <div className="flex flex-col p-4 gap-4">
            <a
              className={`text-lg transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 ${
                isActive('/') ? 'text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-800' : ''
              }`}
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              className={`text-lg transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 ${
                isActive('/blog') ? 'text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-800' : ''
              }`}
              href="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </a>
            <a
              className={`text-lg transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 ${
                isActive('/projects') ? 'text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-800' : ''
              }`}
              href="/projects"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
