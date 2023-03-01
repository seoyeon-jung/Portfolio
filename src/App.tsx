import React from "react";
import "./App.css";
// @ts-ignore
import { SectionsContainer, Section } from "react-fullpage";
import { Landing } from "./components/Landing";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";

function App() {
  let options = {
    anchors: ["sectionOne", "sectionTwo", "sectionThree", "sectionFour"],
  };
  return (
    <SectionsContainer {...options}>
      <Section>
        <Landing />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <Skills />
      </Section>
      <Section>
        <Projects />
      </Section>
    </SectionsContainer>
  );
}

export default App;
