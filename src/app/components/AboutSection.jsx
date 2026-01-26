import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="about-main">
        <div className="primary-about-grid">
          <div className="pic-frame">
            <Image
              src="/images/my-pic.png"
              alt="my pic"
              className="my-pic"
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className="secondary-about-grid">
          <div>
            <h2 className="about-head">About Me</h2>
            <p className="about-body">
              Hello, my name is Jazz. What started as curiosity turned into a
              passion for web development. Through self-learning, I began
              building clean, responsive, and user-friendly websites. I have a
              growing interested in UI/UX design and enjoy exploring how design
              and code come together to create meaningful user experiences. I'm
              eager to continue learning and gaining real-world experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
