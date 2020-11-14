import React from "react";
import PropTypes from "prop-types";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  Heading,
  Subtitle,
  Column2,
  ImgWrap,
  Img,
  Quoter,
} from "./Info.style";

const Info = ({
  id,
  imgStart,
  lineThrough,
  heading,
  description,
  description2,
  description3,
  img,
  alt,
  BgColor,
  darkColor,
}) => {
  return (
    <InfoContainer BgColor={BgColor} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart} lineThrough={lineThrough}>
          <Column1>
            <TextWrapper>
              <Heading darkColor={darkColor}>{heading}</Heading>
              <Subtitle darkColor={darkColor}>{description}</Subtitle>
              <Subtitle darkColor={darkColor}>{description2}</Subtitle>
              <Quoter darkColor={darkColor}>{description3}</Quoter>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

Info.propTypes = {
  description: PropTypes.string,
  description2: PropTypes.string,
  heading: PropTypes.string,
  imgStart: PropTypes.bool,
  lineThrough: PropTypes.bool,
  img: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.string,
};

export default Info;
