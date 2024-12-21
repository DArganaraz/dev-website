import React from "react";
import "./Project.css";
import Logo, { LogoProps } from "./Logo";

interface ProjectPreviewProps {
  title: string;
  description: string;
  imageUrl: string;
  icons: LogoProps[];
  isExpanded: boolean;
  onClick: () => void;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  title,
  description,
  imageUrl,
  icons,
  isExpanded,
  onClick,
}) => {
  return (
    <div
      className={`project-preview ${isExpanded ? "expanded" : ""}`}
      onClick={isExpanded ? () => null : onClick}
    >
      <div className="image-container">
        <img src={imageUrl} alt={title} />
      </div>
      {isExpanded && (
        <div className="text-container">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="icon-row">
            {icons.map((logo) => (
              <Logo key={logo.alt} {...logo} />
            ))}
          </div>
          <button className="close-button" onClick={onClick}>
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectPreview;
