import React from "react";
import Arrow from "./Arrow";

function ExternalLink({ href, children, variant = "secondary" }) {
  const isPlaceholder = href === "#";
  const isExternal = href.startsWith("http");

  return (
    <a
      className={`button button-${variant} ${isPlaceholder ? "button-disabled" : ""}`}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-disabled={isPlaceholder ? "true" : undefined}
      onClick={(event) => {
        if (isPlaceholder) event.preventDefault();
      }}
    >
      {children}
      {!isPlaceholder && <Arrow />}
    </a>
  );
}

export default ExternalLink;
