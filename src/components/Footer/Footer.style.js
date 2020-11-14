import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaDatabase } from "react-icons/fa";

export const FooterContainer = styled.div`
  background-color: #2d2d2d;
`;
export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinkContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinkWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  text-align: left;
  width: 160px;
  /* box-sizing: border-box; */

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #fff;
`;

export const FooterLink = styled(LinkR)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #40e0d0;
    transition: all 0.2s ease-in-out;
  }
`;

export const SocialMedia = styled.div`
  max-width: 100%;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SocialLogo = styled(LinkR)`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const SocialLogoIcon = styled(FaDatabase)`
  margin-right: 5px;
  color: #fff;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 1rem;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
