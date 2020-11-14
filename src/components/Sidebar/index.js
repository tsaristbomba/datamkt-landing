import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtn,
  SidebarBtnLink,
} from "./Sidebar.style";

const Sidebar = ({ isOpen, handleMenu }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={handleMenu}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={handleMenu} to="about">
            About
          </SidebarLink>
          <SidebarLink onClick={handleMenu} to="functionality">
            Functionality
          </SidebarLink>
          <SidebarLink onClick={handleMenu} to="testimonial">
            Testimonials
          </SidebarLink>
          <SidebarBtn>
            <SidebarBtnLink onClick={handleMenu} to="/sign-in">
              Sign In
            </SidebarBtnLink>
          </SidebarBtn>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
