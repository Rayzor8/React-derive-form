import styled from "styled-components";

export const COLORTEXT = Object.freeze({
  green: "#4caf50",
  red: "#f44336",
  blue: "midnightblue",
});

export const GlobalStyled = styled.div`
  background-color: #eee;
  font-family: Helvetica, sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 2rem;
  flex-direction: column;
  gap: 2rem;
`;

export const StylForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  gap: 10px;
`;
export const StylLabel = styled.label`
  display: block;
  font-size: 12px;
`;

export const StylBtn = styled.button`
  background-color: ${({bgColor}) => bgColor};
  border: none;
  color: white;
  padding: 8px 1rem;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
`;

export const StylInput = styled.input`
  outline: none;
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  &:focus {
    border: 1px solid black;
  }
`;

export const StylInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const StylFormTitle = styled.h3`
  color: ${COLORTEXT.green};
`;

export const StylText = styled.h5`
  color: ${COLORTEXT.blue};
  margin-bottom: 4px;
`;
