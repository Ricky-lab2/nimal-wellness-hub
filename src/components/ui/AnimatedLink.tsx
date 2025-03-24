
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface AnimatedLinkProps {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
}

const AnimatedLink = ({
  to,
  children,
  isActive = false,
  className,
}: AnimatedLinkProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "relative px-2 py-1 transition-all duration-300 text-sm font-medium",
        isActive
          ? "text-nimal-700 after:w-full"
          : "text-gray-600 hover:text-nimal-700",
        className
      )}
    >
      {children}
      <span
        className={cn(
          "absolute bottom-0 left-0 h-0.5 bg-nimal-600 transition-all duration-300",
          isActive ? "w-full" : "w-0"
        )}
        style={{
          transformOrigin: "left",
        }}
      />
    </Link>
  );
};

export default AnimatedLink;
