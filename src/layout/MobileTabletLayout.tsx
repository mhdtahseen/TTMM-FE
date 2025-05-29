import React from "react";
import { NavLink } from "react-router-dom";

interface MobileTabletLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  {
    to: "/",
    label: "Home",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 12l9-9 9 9" stroke="currentColor" strokeWidth="2" />
        <path d="M9 21V9h6v12" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    to: "/groups",
    label: "Groups",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M17 20h5v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" />
        <path d="M9 20H4v-2a4 4 0 0 1 3-3.87" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    to: "/settlements",
    label: "Settlements",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
        <path d="M5 6h14" stroke="currentColor" strokeWidth="2" />
        <path d="M7 14h10" stroke="currentColor" strokeWidth="2" />
        <path d="M9 18h6" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    to: "/profile",
    label: "Profile",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M6 20v-2a6 6 0 0 1 12 0v2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

const MobileTabletLayout: React.FC<MobileTabletLayoutProps> = ({ children }) => {
  return (
    <div className="block lg:hidden min-h-screen bg-gradient-to-br from-sand to-background flex flex-col">
      <div className="flex-1 pb-16">{children}</div>
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-surface border-t border-taupe flex justify-around items-center h-16 shadow-t px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center text-xs font-medium transition-colors duration-200 px-2 pt-1 ${
                isActive
                  ? "text-accent"
                  : "text-taupe hover:text-accent"
              }`
            }
          >
            {item.icon}
            <span className="mt-1">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default MobileTabletLayout;
