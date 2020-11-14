import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
  height: 100vh;
  background: linear-gradient(108deg, #40e0d0 0%, #33948a 100%);

  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const HeroWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 660px) {
    align-items: center;
  }
`;

export const HeroRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
  }
`;

export const Column1 = styled.div`
  margin-bottom: 10px;
  padding: 0 10px;
  grid-area: "col1";
`;

export const ImgWrap = styled.div`
  max-width: 650px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 10px 0 0;
  padding-right: 0;
`;

export const Column2 = styled.div`
  margin-bottom: 10px;
  padding: -10px;
  grid-area: "col2";
`;

export const TextWrapper = styled.div`
  max-width: 550px;
  padding-top: 0;
  padding-bottom: 60px;
  margin-left: 24px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Button = styled(Link)`
  border-radius: 4px;
  background: #fff;
  white-space: nowrap;
  padding: 14px 48px;
  color: #40e0d0;
  font-size: 20px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-weight: bolder;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #3f3d56;
    color: #fff;
  }
`;
