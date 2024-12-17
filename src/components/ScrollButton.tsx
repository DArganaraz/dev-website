const ScrollDownButton = () => {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="scroll-down-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-chevron-down"
        onClick={handleScrollDown} // Click handler on the SVG
        style={{ cursor: "pointer" }} // Cursor style on the SVG
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </div>
  );
};

export default ScrollDownButton;
