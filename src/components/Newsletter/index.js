import React from "react";
import {
  NewsletterContainer,
  NewsletterItems,
  NewsletterContent,
  NewsletterH2,
  NewsletterP,
  Form,
  NewsletterInput,
  NewsletterButton,
} from "./Newsletter.style";

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <NewsletterContent>
        <NewsletterItems>
          <NewsletterH2>Join Thousands of Companies Using DATAMKT</NewsletterH2>
          <NewsletterP>Signing up is fast, free and easy</NewsletterP>
          <Form>
            <NewsletterInput
              type="email"
              placeholder="you@email.com"
            ></NewsletterInput>
            <NewsletterButton type="submit">Get Started</NewsletterButton>
          </Form>
        </NewsletterItems>
      </NewsletterContent>
    </NewsletterContainer>
  );
};

export default Newsletter;
