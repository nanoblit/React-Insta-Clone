import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { gray, darkGray } from './variables';

export const Post = styled.div`
  max-width: 60rem;
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
  font-weight: bold;
`;

export const PostImage = styled.img`
  width: 100%;
`;

export const LikesDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const HeartIcon = styled(FontAwesomeIcon)`
  color: ${({ liked }) => (liked ? 'red' : 'black')};
  margin-right: 1rem;
`;

export const Likes = styled.span`
  display: inline-block;
  font-weight: bold;
`;

export const Timestamp = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  color: ${darkGray};
`;

export const CommentsDiv = styled.div`
  margin: 0 1.3rem;
  padding: 1.3rem 0;
  border-bottom: 0.1rem solid ${gray};
`;

export const CommentInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;

  ::placeholder {
    color: ${darkGray};
  }
`;
