import styled from 'styled-components';
import { defaultText } from './default';
import { gray, lightGray, darkGray } from './variables';

export const Search = styled.input`
  ${defaultText}
  color: ${darkGray};
  text-align: center;
  background-color: ${lightGray};
  border: 0.1rem solid ${gray};
  border-radius: 0.3rem;
  margin-bottom: 2rem;
  padding: 0.2rem 0;

  ::placeholder {
    color: ${darkGray};
  }
`;
