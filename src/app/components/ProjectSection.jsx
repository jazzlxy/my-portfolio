import React from "react";
import ProjectCard from "./ProjectCard";

/* Project array */
const projectData = [
  {
    id: 1,
    title: "Weather Tracker Website",
    description:
      "Using Vite + React and Express.js to build a simple weather tracker app",
    image: "/images/projects/p1.png",
  },
  {
    id: 2,
    title: "My Portfolio Website",
    description: "Using Next.js to build my personal portfolio",
    image: "/images/projects/p2.png",
  },
];

const ProjectSection = () => {
  return (
    <section className="project-main" id="projects">
      <h2 className="project-head">My Projects</h2>
      <div className="project-content">
        {projectData.map((projectItem) => (
          <ProjectCard
            key={projectItem.id}
            title={projectItem.title}
            description={projectItem.description}
            imgURL={projectItem.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
