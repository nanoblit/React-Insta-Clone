import styled from 'styled-components';
import { defaultText } from './default';
import { gray, darkGray } from './variables';

export const Post = styled.div`
  width: 60rem;
  border: 0.1rem solid ${gray};
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem;
`;

export const Thumbnail = styled.img`
  width: 4rem;
  border-radius: 100%;
  margin-right: 1rem;
`;

export const Username = styled.span`
  ${defaultText}
  font-weight: bold;
`;

export const PostImage = styled.img`
  width: 100%;
`;

export const Likes = styled.span`
  ${defaultText}
  display: inline-block;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Timestamp = styled.span`
  ${defaultText}
  display: inline-block;
  font-size: 1.2rem;
  color: ${darkGray};
`;

export const CommentsDiv = styled.div`
  margin: 1.3rem;
`;
