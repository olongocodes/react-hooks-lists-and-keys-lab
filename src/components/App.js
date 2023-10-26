import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";

function App() {

  const aboutData = {
    bio: "Some information about you goes here.",
    links: {
      github: "https://github.com/liza",
      linkedin: "https://www.linkedin.com/in/liza/",
    }
  };
  
  const projects = [
    {
      id: 1,
      name: "Reciplease",
      about: "A recipe tracking app",
      technologies: ["Rails", "Bootstrap CSS"],
    },
    {
      id: 2,
      name: "Kibbles N Bitz",
      about: "Tender for dogs",
      technologies: ["React", "Redux"],
    },
    {
      id: 3,
      name: "Alienwares",
      about: "Etsy for aliens",
      technologies: ["Vue", "CSS", "Javascript"],
    }
    // Add more projects here
  ];

  return (
    <div>
      <NavBar links={["home", "about", "projects"]} />
      <Home />
      <About {...aboutData} /> {/* Pass the aboutData object as props */}
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
