import React from "react";
import "./Project.scss";
import Logo, { LogoProps } from "./Logo";

const LeftChevron = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-left"
    >
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  );
};

const RightChevron = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-right"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
};

interface ProjectPreviewProps {
  title: string;
  description: string;
  imageUrl: string;
  icons: LogoProps[];
  isExpanded: boolean;
  onClick: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  title,
  description,
  imageUrl,
  icons,
  isExpanded,
  onClick,
  onNext,
  onPrev,
}) => {
  return (
    <div
      className={`project-preview ${isExpanded ? "expanded" : ""}`}
      onClick={isExpanded ? () => null : onClick}
    >
      {isExpanded && (
        <div className="chevron-container left" onClick={onPrev}>
          <LeftChevron />
        </div>
      )}
      <div className="image-container">
        <img className="proj-image" src={imageUrl} alt={title} />
        <div className="overlay">
          <h2>{title}</h2>
          <div className="icon-row">
            {icons.map((logo) => (
              <Logo key={logo.alt} {...logo} />
            ))}
          </div>
        </div>
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
      {isExpanded && (
        <div className="chevron-container right" onClick={onNext}>
          <RightChevron />
        </div>
      )}
    </div>
  );
};

export default ProjectPreview;
