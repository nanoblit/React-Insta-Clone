import styled from 'styled-components';
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
