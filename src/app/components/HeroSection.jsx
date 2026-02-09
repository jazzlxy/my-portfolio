"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section id="home" className="scroll-mt-30">
      <div className="hero-grid">
        <div className="primary-grid">
          <h1 className="hero-head">
            <span className="hero-header">Hello, I'm {""} </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Jazz Ling",
                3000, // wait 3s
                "",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="hero-body">
            I'm aspiring to be a frontend web developer who transitioned from a
            biomedical science background.
          </p>
          <div>
            <Link
              href="/jazz-resume-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-resume"
            >
              my resume
            </Link>
          </div>
        </div>
        <div className="secondary-grid">
          <div className="avatar-frame">
            <Image
              src="/images/hero-avatar.png"
              alt="hero-avatar"
              className="hero-avatar"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
