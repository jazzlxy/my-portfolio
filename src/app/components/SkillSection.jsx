"use client";
import React from "react";

{
  /* Skills Array */
}
const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "HTML", level: "60" },
      { name: "CSS", level: "60" },
      { name: "JavaScript", level: "50" },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "React", level: "50" },
      { name: "Express.js", level: "50" },
      { name: "Next.js", level: "50" },
    ],
  },
  {
    category: "Tools",
    skills: [{ name: "Github", level: "50" }],
  },
  {
    category: "Design",
    skills: [
      { name: "Figma", level: "60" },
      { name: "Adobe PS", level: "60" },
    ],
  },
];

console.log("skillsData", skillsData);

const SkillSection = () => {
  return (
    <section id="skills">
      <div className="skills-main">
        {/* Skills Header */}
        <h2 className="skills-head">My Skills</h2>

        {/* Skills scrollable container */}
        <div className="skills-scroll">
          {skillsData.map((categoryItem, indexPosition) => (
            <div key={indexPosition} className="skills-card">
              {/* Category Name */}
              <h3 className="skills-category">{categoryItem.category}</h3>
              {/* Skills List */}
              <div>
                {categoryItem.skills.map((skillItem, indexPosition) => (
                  <div key={indexPosition} className="skills-name">
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
