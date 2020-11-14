import React from "react";
import PropTypes from "prop-types";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Row1,
  TextWrapper,
  Heading,
  Subtitle,
  Row2,
  ImgWrap,
  Img,
} from "./InfoCustom.style";

const InfoCustom = ({ id, heading, description, img, alt }) => {
  return (
    <InfoContainer id={id}>
      <InfoWrapper>
        <InfoRow>
          <Row1>
            <TextWrapper>
              <Heading>{heading}</Heading>
              <Subtitle>{description}</Subtitle>
            </TextWrapper>
          </Row1>
          <Row2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Row2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

InfoCustom.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  id: PropTypes.string,
};

export default InfoCustom;
