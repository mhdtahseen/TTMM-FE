import React, { useState } from "react";
import { NavLink } from "react-router-dom";

interface DesktopLayoutProps {
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

const DesktopLayout: React.FC<DesktopLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="hidden lg:flex min-h-screen bg-gradient-to-br from-sand to-background flex-col">
      {/* Top Bar */}
      <header className="w-full h-16 flex items-center justify-between px-8 bg-surface border-b border-taupe/40 shadow-sm z-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg className="w-9 h-9 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2.5" fill="#F6D776" />
            <text x="16" y="21" textAnchor="middle" fontSize="13" fill="#7B2E2E" fontWeight="bold">TTMM</text>
          </svg>
          <span className="text-2xl font-bold text-primary tracking-tight">TTMM</span>
        </div>
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg shadow-md">
          <span>T</span>
        </div>
      </header>
      <div className="flex flex-1 min-h-0">
        {/* Side Nav */}
        <aside className={`bg-surface border-r border-taupe/40 shadow-md pt-4 transition-all duration-300 relative ${collapsed ? 'w-20' : 'w-56'} flex flex-col min-h-0`}>
          {/* Collapse Toggle - peeking out on the edge */}
          <button
            className="absolute -right-3 top-2 z-10 w-6 h-6 flex items-center justify-center rounded-full bg-surface border-r border-taupe/40 hover:bg-surface/70 transition"
            onClick={() => setCollapsed((c) => !c)}
            aria-label="Toggle sidebar"

          >
            <svg
              className={`w-4 h-4 text-taupe transition-transform duration-200 ${collapsed ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 12H5" stroke="currentColor" strokeWidth="2" />
              <path d="M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          <nav className="flex-1 flex flex-col gap-2 mt-2">
            {navItems.map((item) => (
              <div key={item.to} className="relative group">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-base mx-2 ${
                      isActive
                        ? 'bg-accent/10 text-accent'
                        : 'text-taupe hover:bg-sand hover:text-accent'
                    }`
                  }
                >
                  <span className="flex-shrink-0">{item.icon}</span>
                  {!collapsed && <span>{item.label}</span>}
                </NavLink>
                {/* Tooltip for collapsed state */}
                {collapsed && (
                  <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-1 rounded bg-taupe text-background text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-20">
                    {item.label}
                  </span>
                )}
              </div>
            ))}
          </nav>
        </aside>
        {/* Main Content */}
        <main className="flex-1 min-h-0 p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default DesktopLayout;
