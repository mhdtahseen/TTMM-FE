import React, { useEffect, useState } from "react";
import DesktopLayout from "./DesktopLayout";
import MobileTabletLayout from "./MobileTabletLayout";

// Tailwind's default 'lg' breakpoint is 1024px
const LG_BREAKPOINT = 1024;

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => typeof window !== 'undefined' && window.innerWidth >= LG_BREAKPOINT);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= LG_BREAKPOINT);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isDesktop;
}

const ResponsiveLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isDesktop = useIsDesktop();
  return isDesktop ? (
    <DesktopLayout>{children}</DesktopLayout>
  ) : (
    <MobileTabletLayout>{children}</MobileTabletLayout>
  );
};

export default ResponsiveLayout;
