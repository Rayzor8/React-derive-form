import React from "react";
import {
  StylForm,
  StylLabel,
  StylBtn,
  StylInput,
  StylInputContainer,
  StylFormTitle,
} from "../../../style/globalStyled";

const FormOne = () => {
  const [input, setInput] = React.useState({
    userName: "",
    password: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const inputValue = {
      userName: input.userName,
      password: input.password,
    };
    console.log(inputValue);

    //clear input field
    setInput({ userName: "", password: "" });
  };

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <StylForm onSubmit={onSubmit}>
      <StylFormTitle>Common Form</StylFormTitle>
      <StylInputContainer>
        <StylLabel htmlFor="username">Username</StylLabel>
        <StylInput
          value={input.userName}
          type="text"
          id="username"
          minLength="4"
          maxLength="12"
          name="userName"
          onChange={onChange}
        />
      </StylInputContainer>

      <StylInputContainer>
        <StylLabel htmlFor="password">Password</StylLabel>
        <StylInput
          value={input.password}
          type="password"
          id="password"
          minLength="4"
          maxLength="10"
          name="password"
          onChange={onChange}
        />
      </StylInputContainer>
      <StylBtn type="submit">Submit</StylBtn>
    </StylForm>
  );
};

export default FormOne;
