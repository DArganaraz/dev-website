import ProjectPreview from "../components/ProjectPreview";

import reactLogo from "/src/assets/icons/react.svg";
import viteLogo from "/src/assets/icons/vite.svg";
import jsLogo from "/src/assets/icons/javascript.svg";
import tsLogo from "/src/assets/icons/typescript.svg";
import mysqlLogo from "/src/assets/icons/mysql.svg";
import pyLogo from "/src/assets/icons/python.svg";
import djLogo from "/src/assets/icons/django.svg";
import ampLogo from "/src/assets/icons/Amplify.svg";
import dotnetLogo from "/src/assets/icons/dot-net-core.svg";
import csharpLogo from "/src/assets/icons/csh.svg";

import todoImage from "/src/assets/images/todo-list.png";
import dashImage from "/src/assets/images/JS_dashboard.png";
import hcImage from "/src/assets/images/txhc_sum.png";
import persImage from "/src/assets/images/personal-site.png";
import randbImage from "/src/assets/images/RANdb.png";
import { useState } from "react";

const projectData = [
  {
    id: 1,
    title: "Network Data Dashboard",
    description:
      "A web app that uses Javascript, React, jQuery, Highcharts, custom CSS and MySQL database. This was supported by an automated Python data-fetching pipeline to store the network data in the DB. The app was used frequently by my team and saved countless man hours of fetching data and visualising manually.",
    imageUrl: dashImage,
    icons: [
      { src: jsLogo, alt: "Javascript", className: "logo" },
      { src: reactLogo, alt: "React", className: "logo react" },
      { src: mysqlLogo, alt: "MySQL", className: "logo" },
    ],
  },
  {
    id: 2,
    title: "Health Check Reporting System",
    description:
      "A web portal for generating health checks based on uploaded data. Uses Django with Python backend scripts to analyse the data and display summary data for each site.",
    imageUrl: hcImage,
    icons: [
      { src: pyLogo, alt: "Python", className: "logo" },
      { src: djLogo, alt: "Django", className: "logo" },
    ],
  },
  {
    id: 3,
    title: "Network Database Portal",
    description:
      "A web portal for viewing current radio site status and design details. Also generates network-linked Google Earth KML files. Built with C# using the Microsoft ASP.NET Core framework and MySQL database.",
    imageUrl: randbImage,
    icons: [
      { src: dotnetLogo, alt: ".NET Core", className: "logo" },
      { src: csharpLogo, alt: "C#", className: "logo" },
      { src: mysqlLogo, alt: "MySQL", className: "logo" },
    ],
  },
  {
    id: 4,
    title: "To-do List",
    description:
      "A simple To-do list featuring user authentication and persistent DynamoDB storage. Uses React, Vite and AWS Amplify Gen 2",
    imageUrl: todoImage,
    icons: [
      { src: reactLogo, alt: "React", className: "logo react" },
      { src: viteLogo, alt: "Vite", className: "logo vite" },
      { src: ampLogo, alt: "AWS Amplify Gen 2", className: "logo" },
    ],
  },
  {
    id: 5,
    title: "Personal Website",
    description:
      "This site is built using Typescript, React and Vite, using the AWS Amplify Gen 2 hosting platform",
    imageUrl: persImage,
    icons: [
      { src: tsLogo, alt: "Typescript", className: "logo" },
      { src: reactLogo, alt: "React", className: "logo react" },
      { src: viteLogo, alt: "Vite", className: "logo vite" },
      { src: ampLogo, alt: "AWS Amplify Gen 2", className: "logo" },
    ],
  },
];

function Projects() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const handleProjectClick = (title: string) => {
    setExpandedProject(title === expandedProject ? null : title);
  };

  const sortedProjects = [...projectData]; // Create a copy to avoid mutating original data
  if (expandedProject) {
    const expandedIndex = sortedProjects.findIndex(
      (p) => p.title === expandedProject,
    );
    if (expandedIndex !== -1) {
      const [expandedItem] = sortedProjects.splice(expandedIndex, 1);
      sortedProjects.unshift(expandedItem);
    }
  }

  return (
    <>
      <div id="projects">
        <h1>
          <span>&lt;</span>Projects<span>&gt;</span>
        </h1>
        <div className="project-grid">
          {sortedProjects.map((project) => (
            <ProjectPreview
              key={project.title}
              {...project}
              isExpanded={project.title === expandedProject}
              onClick={() => handleProjectClick(project.title)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
