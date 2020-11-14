import React from "react";
import PropTypes from "prop-types";
import {
  HeroContainer,
  HeroWrapper,
  HeroRow,
  Column1,
  ImgWrap,
  Img,
  Column2,
  TextWrapper,
  Heading,
  Subtitle,
  BtnWrap,
  Button,
} from "./Hero.style";

const Hero = ({ img, heading, description, alt }) => {
  return (
    <HeroContainer id="home">
      <HeroWrapper>
        <HeroRow>
          <Column1>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column1>

          <Column2>
            <TextWrapper>
              <Heading>{heading}</Heading>
              <Subtitle>{description}</Subtitle>
              <BtnWrap>
                <Button to="/sign-up">SIGN UP</Button>
              </BtnWrap>
            </TextWrapper>
          </Column2>
        </HeroRow>
      </HeroWrapper>
    </HeroContainer>
  );
};

Hero.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
};

export default Hero;
