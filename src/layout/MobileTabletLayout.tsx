import React from "react";

interface MobileTabletLayoutProps {
  children: React.ReactNode;
}

// This layout is shown on mobile and tablet (sm, md, below lg)
const MobileTabletLayout: React.FC<MobileTabletLayoutProps> = ({ children }) => {
  return (
    <div className="block lg:hidden min-h-screen bg-gradient-to-br from-mint-light to-blue-light">
      {children}
    </div>
  );
};

export default MobileTabletLayout;
