import React from "react";

export interface LogoProps {
  src: string;
  alt: string;
  className?: string;
}
const Logo: React.FC<LogoProps> = ({ src, alt, className }) => {
  return (
    <div className="icon-box">
      <img src={src} className={className} alt={alt} title={alt} />
    </div>
  );
};

export default Logo;
