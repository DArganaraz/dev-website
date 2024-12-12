import ProjectPreview from "../components/ProjectPreview";

import reactLogo from "/src/assets/icons/react.svg";
import viteLogo from "/src/assets/icons/vite.svg";
import jsLogo from "/src/assets/icons/javascript.svg";

import todoImage from "/src/assets/images/Vite + React + TS.png";
import dashImage from "/src/assets/images/JS_dashboard.png";

function Projects() {
  return (
    <>
      <h1>Projects</h1>

      <ProjectPreview
        title="To-do List"
        description="Simple To-do list app using React, Vite and AWS Amplify Gen 2"
        imageUrl={todoImage}
        icons={[
          { src: reactLogo, alt: "React", className: "logo react" },
          { src: viteLogo, alt: "Vite", className: "logo vite" },
        ]}
      />
      <br />
      <br />

      <ProjectPreview
        title="Network Data Dashboard"
        description="A web app that uses Javascript, React, jQuery, Highcharts, custom CSS and MySQL database. This was supported by an automated Python data-fetching pipeline to store the network data in the DB.
The app was used frequently by my team and saved countless man hours of fetching data and visualising manually."
        imageUrl={dashImage}
        icons={[{ src: jsLogo, alt: "Javascript", className: "logo" }]}
      />
    </>
  );
}

export default Projects;
