import React from "react";
import Hero from "../components/Hero";
import ScrollStack from "../components/common/ScrollStack";
import SEO from "../components/SEO";

const HomePage = ({ setActiveSection }) => {
  return (
    <div>
      <SEO
        title="Vrushabh Joshi - Software Developer"
        description="Welcome to my portfolio website. I'm a Software Developer specializing in modern web technologies."
        path="/"
      />
      <Hero />
      <ScrollStack onSectionChange={setActiveSection} />
    </div>
  );
};

export default HomePage;
