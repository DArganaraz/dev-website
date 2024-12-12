import React, { useState } from "react";
import "./Project.css";
import Logo, { LogoProps } from "./Logo";

interface ProjectPreviewProps {
  title: string;
  description: string;
  imageUrl: string;
  icons: LogoProps[];
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  title,
  description,
  imageUrl,
  icons,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleImageClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`project-preview ${isExpanded ? "expanded" : ""}`}>
      <div className="image-container">
        <img src={imageUrl} alt={title} onClick={handleImageClick} />
        {isExpanded && (
          <button className="close-button" onClick={handleImageClick}>
            x
          </button>
        )}
      </div>
      <div className="text-container">
        <h2>{title}</h2>
        <p>{description}</p>
        {icons.length > 0 && (
          <div className="icon-row">
            {icons.map((logo) => (
              <Logo key={logo.alt} {...logo} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectPreview;
