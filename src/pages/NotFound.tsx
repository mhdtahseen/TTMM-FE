import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sand to-background px-4">
      <div className="bg-surface/80 rounded-3xl shadow-2xl p-10 flex flex-col items-center animate-fade-in">
        <svg className="w-24 h-24 text-accent mb-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="30" fill="#F6D776" stroke="#B9B4A8" strokeWidth="3" />
          <ellipse cx="32" cy="40" rx="13" ry="7" fill="#FFF3C7" />
          <circle cx="24" cy="28" r="3" fill="#7B2E2E" />
          <circle cx="40" cy="28" r="3" fill="#7B2E2E" />
          <path d="M27 46c2 2 8 2 10 0" stroke="#A45D5D" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <h1 className="text-6xl font-extrabold text-primary mb-2">404</h1>
        <h2 className="text-2xl font-semibold text-accent mb-4">Page Not Found</h2>
        <p className="text-taupe mb-8 text-center max-w-md">
          Oops! The page you are looking for doesn’t exist or has been moved.<br />
          Try going back to the homepage.
        </p>
        <Link
          to="/"
          className="px-6 py-2 rounded-lg bg-accent hover:bg-hover text-white font-bold shadow transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
