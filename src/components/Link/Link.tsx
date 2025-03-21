import React from "react";

interface LinkProps {
  href: string;
  className?: string;
  ariaLabel: string;
  imageSrc?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({
  href,
  className,
  ariaLabel,
  imageSrc,
  imageAlt,
  children,
}) => {
  return (
    <a href={href} className={className} aria-label={ariaLabel}>
      {imageSrc ? <img src={imageSrc} alt={imageAlt} /> : children}
    </a>
  );
};
