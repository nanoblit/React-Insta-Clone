import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import {
  Post,
  Header,
  Thumbnail,
  Username,
  PostImage,
  Likes,
  Timestamp,
  CommentsDiv,
} from '../../styles/PostContainer';

function PostContainer({
  username, thumbnailUrl, imageUrl, likes, timestamp, comments,
}) {
  return (
    <Post>
      <Header>
        <Thumbnail src={thumbnailUrl} alt="an avatar" />
        <Username>{username}</Username>
      </Header>
      <PostImage src={imageUrl} alt="an image" />
      <CommentsDiv>
        <Likes>{likes} likes</Likes>
        <CommentSection comments={comments} />
        <Timestamp>{timestamp}</Timestamp>
      </CommentsDiv>
    </Post>
  );
}

PostContainer.propTypes = {
  username: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
};

PostContainer.defaultProps = {
  comments: [],
};

export default PostContainer;
