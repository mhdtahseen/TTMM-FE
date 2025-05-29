import React from "react";

interface DesktopLayoutProps {
  children: React.ReactNode;
}

// This layout is shown on laptop and desktop (lg and above)
const DesktopLayout: React.FC<DesktopLayoutProps> = ({ children }) => {
  return (
    <div className="hidden lg:flex min-h-screen bg-gradient-to-br from-blue-light to-mint-light items-center justify-center">
      <div className="w-full max-w-4xl mx-auto bg-white/80 rounded-3xl shadow-2xl p-12 flex flex-row gap-8 items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default DesktopLayout;
