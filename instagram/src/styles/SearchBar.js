import styled from 'styled-components';
import { Input } from './default';

export const SearchDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchInputDiv = styled.div`
  margin: 2rem 1rem;
  max-width: 19.4rem;
`;

export const Search = styled(Input)`
  width: 100%;
`;

export const LogoImg = styled.img`
  height: 4rem;
`;

export const RightImg = styled.img`
  height: 2rem;

  @media screen and (max-width: 490px) {
    display: none;
  }
`;
