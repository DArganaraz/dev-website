import gmailLogo from "/src/assets/icons/gmail.svg";
import githubLogo from "/src/assets/icons/github.svg";
import linkedinLogo from "/src/assets/icons/linkedin.svg";
import devPhoto from "/src/assets/images/dev_head.jpg";

const DownloadButton = () => {
  const pdfUrl = "/src/assets/Devon Arganaraz Resume.pdf";

  return (
    <a href={pdfUrl} download="Devon Arganaraz Resume.pdf">
      <button>Download CV</button>
    </a>
  );
};

const ActionButton: React.FC<{ href: string; src: string; alt: string }> = ({
  href,
  src,
  alt,
}) => (
  <a href={href}>
    <img src={src} alt={alt} className="logo logo--large" />
  </a>
);

function About() {
  return (
    <>
      <div id="about" className="about-row">
        <div className="text-left">
          <p>
            I'm a Melbourne-based developer with a knack for turning complex
            ideas into efficient code. I have experience across a diverse range
            of telecom projects, enabling me to break down challenges and
            provide innovative solutions.
          </p>
          <p>
            I've honed my skills across a wide range of programming languages -
            especially proficient with Python, Javascript and many of their
            popular frameworks. My experience and education equips me to learn
            quickly and deliver outstanding results, no matter the project.
          </p>
          <p>
            <b>
              I'm currently open to full-time working opportunities as well as
              freelance web projects,
              <br /> so <span>lets build something great together!</span>
            </b>
          </p>

          <br />
          <DownloadButton />
          <br />

          <ActionButton
            href="mailto:devon.arganaraz@gmail.com"
            src={gmailLogo}
            alt="Mail"
          />

          <ActionButton
            href="https://github.com/DArganaraz/"
            src={githubLogo}
            alt="Github"
          />

          <ActionButton
            href="https://www.linkedin.com/in/devon-arganaraz/"
            src={linkedinLogo}
            alt="LinkedIn"
          />
        </div>

        <div className="image-right">
          <img src={devPhoto} alt="Devon Argnaraz" />
        </div>
      </div>
    </>
  );
}

export default About;
