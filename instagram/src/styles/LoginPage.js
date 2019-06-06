import styled from 'styled-components';
import { Input } from './default';
import { gray, darkGray } from './variables';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

export const LoginInput = styled(Input)`
  margin-bottom: 2rem;
`;
