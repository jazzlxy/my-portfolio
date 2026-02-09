"use client";
import React from "react";

{
  /* Skills Array */
}
const skillsData = [
  {
    id: 1,
    category: "Languages",
    skills: [
      { id: 101, name: "HTML", level: "60" },
      { id: 102, name: "CSS", level: "60" },
      { id: 103, name: "JavaScript", level: "50" },
    ],
  },
  {
    id: 2,
    category: "Frameworks",
    skills: [
      { id: 201, name: "React", level: "50" },
      { id: 202, name: "Express.js", level: "50" },
      { id: 203, name: "Next.js", level: "50" },
    ],
  },
  {
    id: 3,
    category: "Tools",
    skills: [{ id: 301, name: "Github", level: "50" }],
  },
  {
    id: 4,
    category: "Design",
    skills: [
      { id: 401, name: "Figma", level: "60" },
      { id: 402, name: "Adobe PS", level: "60" },
    ],
  },
];

console.log("skillsData", skillsData);

const SkillSection = () => {
  return (
    <section id="skills" className="skills-main">
      <div>
        {/* Skills Header */}
        <h2 className="skills-head">My Skills</h2>

        {/* Skills scrollable container */}
        <div className="skills-scroll">
          {skillsData.map((categoryItem) => (
            <div key={categoryItem.id} className="skills-card">
              {/* Category Name */}
              <h3 className="skills-category">{categoryItem.category}</h3>
              {/* Skills List */}
              <div>
                {categoryItem.skills.map((skillItem) => (
                  <div key={skillItem.id} className="skills-name">
                    {/* Skills Name */}
                    <span>{skillItem.name}</span>
                    {/* Progress bar */}
                    <div className="skills-bar-bg">
                      <div
                        className="skills-bar-fill"
                        style={{ width: `${skillItem.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
