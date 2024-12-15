const DownloadButton = () => {
  const pdfUrl = "/src/assets/Devon Arganaraz Resume.pdf";

  return (
    <a href={pdfUrl} download="Devon Arganaraz Resume.pdf">
      <button>Download CV</button>
    </a>
  );
};

function About() {
  return (
    <>
      <div id="about" className="about-row">
        <div className="image-right">
          <img src="/src/assets/images/devon.jpg" alt="Devon Argnaraz" />
        </div>
        <div className="text-left">
          <p>
            My name is Devon Arganaraz, a Melbourne based developer with a
            background in Telecom and Progamming.
          </p>
          <p>
            I've had experience using a wide range of programming languages, and
            love to learn whats needed for any challenge
          </p>
          <br />
          <DownloadButton />
          <br />

          <a href="mailto:devon.arganaraz@gmail.com">
            <img
              src="/src/assets/icons/gmail.svg"
              alt="Mail"
              className="logo logo--large"
            />
          </a>
          <a href="https://github.com/DArganaraz/">
            <img
              src="/src/assets/icons/github.svg"
              alt="Github"
              className="logo logo--large"
            />
          </a>
          <a href="https://www.linkedin.com/in/devon-arganaraz/">
            <img
              src="/src/assets/icons/linkedin.svg"
              alt="LinkedIn"
              className="logo logo--large"
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
