import styled from "styled-components";

export const InfoContainer = styled.div`
  background: #3f3d56;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 680px;
  width: 100%;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const TextWrapper = styled.div`
  text-align: center;
  max-width: 800px;
  padding-top: 0;
  padding-bottom: 0;
`;

export const Heading = styled.h2`
  margin-bottom: 24px;
  font-size: 32px;
  line-height: 1.1;
  font-weight: 600;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
`;

export const Row2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const ImgWrap = styled.div`
  max-width: 500px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
`;
