import styled, { createGlobalStyle } from 'styled-components';
import reset from './reset';
import {
  black, darkGray, gray, lightGray,
} from './variables';

export const Input = styled.input`
  color: black;
  text-align: center;
  background-color: ${lightGray};
  border: 0.1rem solid ${gray};
  border-radius: 0.3rem;
  padding: 0.2rem 0.2rem;

  ::placeholder {
    color: ${darkGray};
  }
`;

export const Button = styled.button`
  background-color: ${gray};
  border: 0.1rem solid ${gray};
  border-radius: 0.3rem;
  padding: 0.8rem 0;

  &:hover {
    background-color: ${lightGray};
  }
`;

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+HK:400,700&display=swap');

  ${reset}

  :root {
    font-size: 62.5%;
    font-family: 'Noto Sans HK', sans-serif;
    color: ${black};
  }

  p,
  span,
  input,
  button,
  h1 {
    font-family: 'Noto Sans HK', sans-serif;
    font-size: 1.4rem;
  }
`;

export default GlobalStyles;
