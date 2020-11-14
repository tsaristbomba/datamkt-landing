import React from "react";
import PropTypes from "prop-types";
import { FaBars, FaDatabase } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./Navbar.style";

const Navbar = ({ toggleHome, handleMenu }) => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/" onClick={toggleHome}>
          <FaDatabase style={{ marginRight: "5px" }} /> DATAMKT
        </NavLogo>
        <MobileIcon onClick={handleMenu}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLink
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              to="about"
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              to="functionality"
            >
              Functionality
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
              to="testimonial"
            >
              Testimonials
            </NavLink>
          </NavItem>
          <NavItem>
            <NavBtn>
              <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
            </NavBtn>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

Navbar.propTypes = {
  toggleHome: PropTypes.func,
};

export default Navbar;
