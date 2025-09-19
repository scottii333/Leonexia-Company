"use client";

import React from "react";

interface AnchorLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string; // must be an id like "#case-study"
}

const AnchorLink: React.FC<AnchorLinkProps> = ({
  href,
  children,
  className,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};

export default AnchorLink;
