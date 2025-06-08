// src/HeroSection.js
import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hello, I'm Megha</h1>
        <h2 className="animated-text">
          Aspiring Data Scientist | AI Engineer | ML Enthusiast
        </h2>
        <a href="#projects" className="scroll-btn">↓ View My Work</a>
      </div>
    </section>
  );
}
