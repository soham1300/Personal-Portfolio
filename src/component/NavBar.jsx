import { useState } from "react";
import styled from "styled-components";
import Resume from "../assets/Soham_Resume_Fullstack.pdf";
import IsMobile from "./IsMobile";
import { RiMenu5Fill } from "react-icons/ri";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = IsMobile();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (isMobile) {
      setMenuOpen(false); // Close the mobile menu after clicking
    }
  };

  return (
    <NavBarDiv>
      <Name>Soham Bhogale</Name>
      {isMobile ? (
        <>
          <MenuIcon onClick={toggleMenu}>
            <RiMenu5Fill size={30} />
          </MenuIcon>
          {menuOpen && (
            <MobileMenu>
              <MenuItem
                isMobile={isMobile}
                onClick={() => scrollToSection("about")}
              >
                About
              </MenuItem>
              <MenuItem
                isMobile={isMobile}
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </MenuItem>
              <MenuItem isMobile={isMobile} href="https://dev.to/soham1300">
                Articles
              </MenuItem>
              <MenuItem
                isMobile={isMobile}
                onClick={() => scrollToSection("contacts")}
              >
                Contacts
              </MenuItem>
              <DownloadCVBtn
                href={Resume}
                download="Soham Resume Fullstack"
                target="_blank"
              >
                Download Resume
              </DownloadCVBtn>
            </MobileMenu>
          )}
        </>
      ) : (
        <>
          <MidNav>
            <MenuItem
              isMobile={isMobile}
              onClick={() => scrollToSection("about")}
            >
              About
            </MenuItem>
            <MenuItem
              isMobile={isMobile}
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </MenuItem>
            <MenuItem
              isMobile={isMobile}
              href="https://dev.to/soham1300"
              target="_blank"
            >
              Articles
            </MenuItem>
            <MenuItem
              isMobile={isMobile}
              onClick={() => scrollToSection("contacts")}
            >
              Contacts
            </MenuItem>
          </MidNav>
          <DownloadCVBtn
            href={Resume}
            download="Soham Resume Fullstack"
            target="_blank"
          >
            Download Resume
          </DownloadCVBtn>
        </>
      )}
    </NavBarDiv>
  );
}

export default NavBar;

const NavBarDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 5rem;
  gap: 1rem;
  overflow-x: hidden;
`;

const Name = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const MidNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  font-size: 1.2rem;
`;

const DownloadCVBtn = styled.a`
  background-color: #f5f5f5;
  color: #121212;
  border-radius: 10px;
  padding: 10px;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
`;

const MenuIcon = styled.div`
  cursor: pointer;
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 5rem;
  right: 1rem;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 1rem;
  z-index: 1000;
  color: #121212;
`;

const MenuItem = styled.a`
  padding: 10px 0;
  cursor: pointer;
  text-decoration: none;
  /* color: #f5f5f5; */
  color: ${(props) => (props.isMobile ? "#121212" : "#f5f5f5")};
`;
