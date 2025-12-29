import React from "react";

interface TagProps {
  children: React.ReactNode;
  size?: "xs" | "sm";
  className?: string;
}

export const Tag = ({ children, size = "sm", className }: TagProps) => {
  const sizeClass = size === "xs" ? "text-xs" : "text-sm";

  return (
    <span
      className={`px-3 py-1 bg-orange-600/10 rounded-full text-orange-600 ${sizeClass} ${
        className || ""
      }`}
    >
      {children}
    </span>
  );
};
