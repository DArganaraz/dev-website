import BinaryBackground from "../components/BinaryBackground";
import ScrollDownButton from "../components/ScrollButton";

function Header() {
  return (
    <>
      <div className="binary-background-container">
        <BinaryBackground />
        <div className="header-content">
          <h1>
            <span>&lt;</span>Dev<span>on</span>Web<span>/&gt;</span>
          </h1>
          <h5>
            I'm <span>Devon</span>, a full-stack web dev with a passion for
            making life better using code.
          </h5>
          <ScrollDownButton />
        </div>
      </div>
    </>
  );
}

export default Header;
