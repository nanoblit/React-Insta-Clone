import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
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

class PostContainer extends React.Component {
  state = {
    comments: this.props.comments,
    newCommentText: '',
    likes: this.props.likes,
    liked: false,
  };

  addNewComment = e => {
    e.preventDefault();
    const newComment = {
      username: 'User',
      text: this.state.newCommentText,
      id: uuid(),
    };
    this.setState(prevState => ({
      comments: [...prevState.comments, newComment],
      newCommentText: '',
    }));
  };

  changeNewComment = e => {
    this.setState({ newCommentText: e.target.value });
  };

  likePost = () => {
    this.setState(prevState => {
      const newLiked = !prevState.liked;
      const newLikes = newLiked ? prevState.likes + 1 : prevState.likes - 1;
      return {
        liked: newLiked,
        likes: newLikes,
      };
    });
  };

  render() {
    const {
      username, thumbnailUrl, imageUrl, timestamp,
    } = this.props;
    const {
      comments, newCommentText, likes, liked,
    } = this.state;
    return (
      <Post>
        <Header>
          <Thumbnail src={thumbnailUrl} alt="an avatar" />
          <Username>{username}</Username>
        </Header>
        <PostImage src={imageUrl} alt="an image" />
        <CommentsDiv>
          <LikesDiv>
            <HeartIcon liked={liked ? 1 : 0} onClick={this.likePost} icon={faHeart} size="2x" />
            <Likes>{likes} likes</Likes>
          </LikesDiv>
          <CommentSection comments={comments} />
          <Timestamp>{timestamp}</Timestamp>
        </CommentsDiv>
        <form onSubmit={this.addNewComment}>
          <input value={newCommentText} onChange={this.changeNewComment} />
        </form>
      </Post>
    );
  }
}

PostContainer.propTypes = {
  username: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired,
  newCommentText: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    }),
  ),
};

PostContainer.defaultProps = {
  comments: [],
};

export default PostContainer;
