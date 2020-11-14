import styled from "styled-components";
import newsletterBg from "../../images/newsletter-bg.jpg";

export const NewsletterContainer = styled.div`
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(${newsletterBg});
  min-height: 300px;
  height: 40vh;
  background-size: cover;
  background-position: center;
`;

export const NewsletterContent = styled.div`
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const NewsletterItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
  max-height: 100%;
  padding: 0 2rem;
  line-height: 1;
`;

export const NewsletterH2 = styled.h2`
  font-size: 32px;
  margin-bottom: 1rem;
  letter-spacing: 1px;
  color: #3f3d56;

  @media screen and (max-width: 660px) {
    font-size: 22px;
    text-align: center;
  }
`;

export const NewsletterP = styled.p`
  font-weight: 600;
  margin-bottom: 1rem;
  color: #3f3d56;
  @media screen and (max-width: 660px) {
    font-weight: 100;
  }
`;

export const Form = styled.form`
  display: inline-flex;
  border: 1px solid #3f3d56;
  border-radius: 4px;
  padding: 2px;
  background-color: #fff;

  @media screen and (max-width: 660px) {
    width: 100%;
  }
`;

export const NewsletterInput = styled.input`
  height: 2.5rem;
  padding: 1rem;
  border: none;
  width: 250px;

  @media screen and (max-width: 660px) {
    width: 100%;
  }
`;

export const NewsletterButton = styled.button`
  padding: 0.8rem 2.5rem;
  border: 0;
  font-weight: bold;
  background: #fff;
  color: #3f3d56;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid #40e0d0;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #40e0d0;
    color: #fff;
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 660px) {
    padding: 0.3rem 2rem;
    font-size: 14px;
  }
`;
