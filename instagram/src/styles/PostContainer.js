import styled from 'styled-components';
import { defaultText } from './default';
import { gray } from './variables';

export const Post = styled.div`
  width: 60rem;
  border: 0.1rem solid ${gray};
  border-radius: 0.5rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const Thumbnail = styled.img`
  width: 4rem;
  border-radius: 100%;
`;

export const Username = styled.span`
  ${defaultText}
`;

export const PostImage = styled.img`
  width: 100%;
`;

