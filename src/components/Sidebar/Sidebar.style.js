import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: #fff;
  display: grid;
  align-items: center;
  left: 0;
  transition: 0.2s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const CloseIcon = styled(FaTimes)`
  color: #3f3d56;
`;

export const SidebarWrapper = styled.div`
  color: #3f3d56;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 100px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 80px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #3f3d56;
  cursor: pointer;
  font-weight: bold;
`;

export const SidebarBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SidebarBtnLink = styled(LinkR)`
  border: 1px solid #40e0d0;
  border-radius: 4px;
  white-space: nowrap;
  padding: 16px 64px;
  color: #3f3d56;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
`;
