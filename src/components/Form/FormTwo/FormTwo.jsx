import React from "react";
import {
  StylBtn,
  StylForm,
  StylFormTitle,
  StylInput,
  StylInputContainer,
  StylLabel,
  StylText,
} from "../../../style/globalStyled";
import { COLORTEXT } from "../../../style/globalStyled";

const FormTwo = () => {
  const DATA = [
    { id: 1, name: "Lorem Ipsum" },
    { id: 2, name: "Tortilla" },
  ];

  const [userDatas, setUserDatas] = React.useState(DATA);

  const [inputValue, setInputValue] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setUserDatas([
      ...userDatas,
      { id: userDatas.length + 1, name: inputValue },
    ]);
    setInputValue("");
  };

  const onChange = (e) => setInputValue(e.target.value);

  const onDeleteAll = () => setUserDatas((prev) => (prev = []));

  const getData = () => setUserDatas((prev) => (prev = DATA));

  const onDeleteNewData = () =>
    setUserDatas((prev) => prev.filter((item) => item.id <= 2));

  return (
    <StylForm onSubmit={onSubmit}>
      <StylFormTitle>Common Form</StylFormTitle>
      <StylInputContainer>
        <StylLabel htmlFor="addUser">Add User</StylLabel>
        <StylInput id="addUser" onChange={onChange} value={inputValue} />
        <StylBtn type="submit" bgColor={COLORTEXT.green}>
          Submit
        </StylBtn>
        <StylBtn type="button" onClick={onDeleteAll} bgColor={COLORTEXT.red}>
          Delete All Data
        </StylBtn>
        <StylBtn type="button" onClick={getData} bgColor={COLORTEXT.red}>
          Replace with Dummy Data
        </StylBtn>
        <StylBtn
          type="button"
          onClick={onDeleteNewData}
          bgColor={COLORTEXT.red}
        >
          Delete new Data
        </StylBtn>
      </StylInputContainer>

      <div style={{ marginTop: "1rem" }}>
        {userDatas.map((user) => {
          return (
            <StylText key={user.id}>
              {user.id}. {user.name}
            </StylText>
          );
        })}
      </div>
    </StylForm>
  );
};

export default FormTwo;
