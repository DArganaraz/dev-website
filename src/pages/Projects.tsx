import ProjectPreview from "../components/ProjectPreview";

import reactLogo from "/src/assets/icons/react.svg";
import viteLogo from "/src/assets/icons/vite.svg";
import jsLogo from "/src/assets/icons/javascript.svg";
import mysqlLogo from "/src/assets/icons/mysql.svg";
import pyLogo from "/src/assets/icons/python.svg";
import djLogo from "/src/assets/icons/django.svg";
import ampLogo from "/src/assets/icons/Amplify.svg";

import todoImage from "/src/assets/images/Vite + React + TS.png";
import dashImage from "/src/assets/images/JS_dashboard.png";
import hcImage from "/src/assets/images/txhc_sum.png";

function Projects() {
  return (
    <>
      <div id="projects">
        <h1>
          <span>&lt;</span>Projects<span>&gt;</span>
        </h1>

        <ProjectPreview
          title="To-do List"
          description="Simple To-do list app using React, Vite and AWS Amplify Gen 2"
          imageUrl={todoImage}
          icons={[
            { src: reactLogo, alt: "React", className: "logo react" },
            { src: viteLogo, alt: "Vite", className: "logo vite" },
            { src: ampLogo, alt: "AWS Amplify Gen 2", className: "logo" },
          ]}
        />

        <ProjectPreview
          title="Network Data Dashboard"
          description="A web app that uses Javascript, React, jQuery, Highcharts, custom CSS and MySQL database. 
        This was supported by an automated Python data-fetching pipeline to store the network data in the DB. 
        The app was used frequently by my team and saved countless man hours of fetching data and visualising manually."
          imageUrl={dashImage}
          icons={[
            { src: jsLogo, alt: "Javascript", className: "logo" },
            { src: reactLogo, alt: "React", className: "logo react" },
            { src: mysqlLogo, alt: "MySQL", className: "logo" },
          ]}
        />

        <ProjectPreview
          title="Health Check Reporting System"
          description="A web portal for generating health checks based on uploaded data. 
        Uses Django with Python backend scripts to analyse the data and display summary data for each site."
          imageUrl={hcImage}
          icons={[
            { src: pyLogo, alt: "Python", className: "logo" },
            { src: djLogo, alt: "Django", className: "logo" },
          ]}
        />
      </div>
    </>
  );
}

export default Projects;
