import React from 'react';
import PropTypes from 'prop-types';
import PostContainer from './PostContainer';

const PostsPage = ({
  posts, addNewComment, changeNewComment, likePost,
}) => (
  <div>
    {posts
      .filter(({ isShown }) => isShown)
      .map(({
        username, thumbnailUrl, imageUrl, likes, liked, newCommentText, timestamp, comments, id,
      }) => (
        <PostContainer
          key={id}
          username={username}
          thumbnailUrl={thumbnailUrl}
          imageUrl={imageUrl}
          likes={likes}
          liked={liked}
          newCommentText={newCommentText}
          timestamp={timestamp}
          comments={comments}
          id={id}
          addNewComment={addNewComment}
          changeNewComment={changeNewComment}
          likePost={likePost}
        />
      ))}
  </div>
);

PostsPage.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      thumbnailUrl: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      timestamp: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      newCommentText: PropTypes.string.isRequired,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
        }),
      ),
    }),
  ),
  addNewComment: PropTypes.func.isRequired,
  changeNewComment: PropTypes.func.isRequired,
  likePost: PropTypes.func.isRequired,
};

PostsPage.defaultProps = {
  posts: [],
};

export default PostsPage;
