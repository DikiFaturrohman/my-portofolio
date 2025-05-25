import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header({ pathname = "/" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <a
                href="/"
                className="text-xl font-bold text-primary-light dark:text-primary-dark"
              >
                Dixxie Portfolio
              </a>
            </div>
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? "border-primary-light dark:border-primary-dark text-gray-900 dark:text-white"
                      : "border-transparent hover:border-gray-300 dark:hover:border-gray-700 text-gray-500 dark:text-gray-300"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center">
            <ThemeToggle />

            <div className="sm:hidden ml-3">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
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
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  pathname === link.href
                    ? "border-primary-light dark:border-primary-dark text-gray-900 dark:text-white"
                    : "border-transparent hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-300"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
