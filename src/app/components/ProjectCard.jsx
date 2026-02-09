import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgURL, title, description, gitURL, previewURL }) => {
  return (
    <div className="project-card">
      <div
        className="project-image group"
        style={{ background: `url(${imgURL})`, backgroundSize: "cover" }}
      >
        {/* Overlay inside the image div */}
        <div className="project-overlay">
          <Link href={gitURL} className="icon-border group/link">
            <CodeBracketIcon className="overlay-icon" />
          </Link>
          <Link href={previewURL} className="icon-border group/link">
            <EyeIcon className="overlay-icon" />
          </Link>
        </div>
      </div>
      <div className="project-text">
        <h5 className="project-title">{title}</h5>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
