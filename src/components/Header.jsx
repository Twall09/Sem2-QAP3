import { FaShieldDog } from "react-icons/fa6";
import { TbDogBowl } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/", { replace: true });
    window.location.reload();
  };
  return (
    <div className="header">
      <h1>
        <FaShieldDog /> Dog Image Gallery <TbDogBowl />
      </h1>
      <div className="home-container">
        <button onClick={handleHomeClick} className="home-link">
          Home
        </button>
      </div>
      <div className="about-container">
        <button>
          <a
            href="https://www.google.com/search?q=why+dogs+are+awesome&sca_esv=c0f137e23ef54b4f&sca_upv=1&rlz=1C5CHFA_enCA765CA765&ei=DnqiZtiHOI_Y5NoPleGv2A4&ved=0ahUKEwjYxtiXy8KHAxUPLFkFHZXwC-sQ4dUDCA8&uact=5&oq=why+dogs+are+awesome&gs_lp=Egxnd3Mtd2l6LXNlcnAiFHdoeSBkb2dzIGFyZSBhd2Vzb21lMgUQABiABDIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkikLVChB1i7LHAFeAGQAQGYAb0DoAHQKKoBCzEuMTEuMTEuMS4xuAEDyAEA-AEBmAIdoALxKKgCFMICChAAGLADGNYEGEfCAg0QABiwAxjWBBhHGMkDwgIOEAAYgAQYsAMYkgMYigXCAg0QABiABBiwAxhDGIoFwgIOEAAYsAMY5AIY1gTYAQHCAhMQLhiABBiwAxhDGMgDGIoF2AECwgITEAAYgAQYQxi0AhiKBRjqAtgBA8ICExAuGIAEGEMYtAIYigUY6gLYAQPCAhYQLhiABBhDGNQCGLQCGIoFGOoC2AEDwgIWEC4YAxi0AhjlAhjqAhiMAxiPAdgBBMICFhAAGAMYtAIY5QIY6gIYjAMYjwHYAQTCAhAQABiABBixAxhDGIMBGIoFwgIWEC4YgAQYsQMY0QMYQxiDARjHARiKBcICCxAAGIAEGLEDGIMBwgIREC4YgAQYsQMY0QMYgwEYxwHCAg4QABiABBixAxiDARiKBcICChAAGIAEGEMYigXCAggQABiABBixA8ICEBAuGIAEGEMY1AIYyQMYigXCAg0QABiABBhDGMkDGIoFwgILEC4YgAQYsQMYgwHCAg0QABiABBixAxhDGIoFwgIHEAAYgAQYDcICChAAGAgYDRgeGA_CAgsQABiABBiGAxiKBcICCBAAGIAEGKIEwgIIEAAYCBgNGB7CAggQABgWGAoYHsICCBAAGKIEGIkFwgIIEAAYFhgeGA-YAw-IBgGQBhG6BgYIARABGAm6BgYIAhABGAi6BgQIAxgHugYGCAQQARgKkgcKNS45LjEzLjEuMaAH5ZwB&sclient=gws-wiz-serp"
            target="_blank"
            rel="noopener no referrer"
          >
            About
          </a>
        </button>
      </div>
    </div>
  );
};

export default Header;
