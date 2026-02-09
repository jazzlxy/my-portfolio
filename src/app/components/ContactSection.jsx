"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "./ThemeContext";

const ContactSection = () => {
  // Track form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Track sending status
  const [submitting, setSubmitting] = useState(false); // false = button clickable, user not doing anything so no = false. true = button disabled, submitting.
  const [status, setStatus] = useState(""); //empty string as user haven't submit so (no "success", "loading", "submitted"). use string as it can hold many diff states.

  // Update when user type
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Stops page from refreshing when submit
    setSubmitting(true); // Disable button
    setStatus(""); // Clear status message after submitting

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        console.log("Server say no");
      }
    } catch (err) {
      setStatus("error");
      console.error("Error:", err);
    } finally {
      setSubmitting(false); // Enable clicking of button
    }
  };

  const { darkMode } = useTheme();

  return (
    <section className="contact-main" id="contact">
      <div className="primary-contact-grid">
        <h2 className="contact-head">Contact Me</h2>
        <p className="contact-text">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <Image
          src="/images/contact-avatar.png"
          alt="contact avatar"
          className="contact-avatar"
          width={300}
          height={300}
        />
        <div className="socials">
          <a
            href="https://github.com/jazzlxy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={
                darkMode
                  ? "/images/dark-github.png"
                  : "/images/light-github.png"
              }
              alt="GithubIcon"
              className="social-icon-dark"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jazzlxy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={
                darkMode
                  ? "/images/dark-linkedin.png"
                  : "/images/light-linkedin.png"
              }
              alt="LinkedinIcon"
              className="social-icon-dark"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
      <div className="secondary-contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-info">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="contact-input"
              onChange={handleChange}
              value={formData.name}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="contact-input"
              onChange={handleChange}
              value={formData.email}
              required
            />
            <textarea
              name="message"
              rows={6}
              placeholder="Enter your message"
              className="contact-input"
              onChange={handleChange}
              value={formData.message}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            {submitting ? "Sending message" : "Submit now"}
          </button>

          {status === "success" && (
            <p className="status-msg">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="status-msg">Error! Please try again later.</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
