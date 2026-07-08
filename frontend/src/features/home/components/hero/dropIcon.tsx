import React from "react";

/** Icon giọt cà phê nhỏ dùng làm bullet / marker */
const DropIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2C9 7 5 11.5 5 15.5A7 7 0 0019 15.5C19 11.5 15 7 12 2Z" />
  </svg>
);

export default DropIcon;
