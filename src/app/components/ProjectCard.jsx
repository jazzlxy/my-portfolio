import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgURL, title, description }) => {
  return (
    <div className="project-card">
      <div
        className="project-image group"
        style={{ background: `url(${imgURL})`, backgroundSize: "cover" }}
      >
        {/* Overlay inside the image div */}
        <div className="project-overlay">
          <Link href="/">
            <CodeBracketIcon className="codebraket-icon" />
          </Link>
          <Link href="/">
            <EyeIcon className="eye-icon" />
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
