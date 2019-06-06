import React from 'react';
import PropTypes from 'prop-types';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
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
  HeartIcon,
  LikesDiv,
} from '../../styles/PostContainer';

const PostContainer = ({
  username,
  thumbnailUrl,
  imageUrl,
  timestamp,
  comments,
  newCommentText,
  likes,
  liked,
  addNewComment,
  changeNewComment,
  likePost,
  id,
}) => (
  <Post>
    <Header>
      <Thumbnail src={thumbnailUrl} alt="an avatar" />
      <Username>{username}</Username>
    </Header>
    <PostImage src={imageUrl} alt="an image" />
    <CommentsDiv>
      <LikesDiv>
        <HeartIcon liked={liked ? 1 : 0} onClick={() => likePost(id)} icon={faHeart} size="2x" />
        <Likes>{likes} likes</Likes>
      </LikesDiv>
      <CommentSection comments={comments} />
      <Timestamp>{timestamp}</Timestamp>
    </CommentsDiv>
    <form onSubmit={e => addNewComment(e, id)}>
      <input value={newCommentText} onChange={e => changeNewComment(e, id)} />
    </form>
  </Post>
);

PostContainer.propTypes = {
  username: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  timestamp: PropTypes.string.isRequired,
  newCommentText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ),
  addNewComment: PropTypes.func.isRequired,
  changeNewComment: PropTypes.func.isRequired,
  likePost: PropTypes.func.isRequired,
};

PostContainer.defaultProps = {
  comments: [],
};

export default PostContainer;
