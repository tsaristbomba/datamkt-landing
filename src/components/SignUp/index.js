import React from "react";
import { FaDatabase } from "react-icons/fa";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
} from "./SignUp.style";

const SignUp = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">
          <FaDatabase style={{ marginRight: "5px" }} />
          DATAMKT
        </Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Create an account</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormLabel htmlFor="for">Confirm password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Continue</FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default SignUp;
