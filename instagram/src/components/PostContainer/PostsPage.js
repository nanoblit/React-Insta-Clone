import React from 'react';
import PropTypes from 'prop-types';
import PostContainer from './PostContainer';

const PostsPage = ({ posts }) => (
  <div>
    {posts
      .filter(({ isShown }) => isShown)
      .map(({
        username, thumbnailUrl, imageUrl, likes, timestamp, comments, id,
      }) => (
        <PostContainer
          key={id}
          username={username}
          thumbnailUrl={thumbnailUrl}
          imageUrl={imageUrl}
          likes={likes}
          timestamp={timestamp}
          comments={comments}
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
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
          id: PropTypes.string.isRequired,
        }),
      ),
    }),
  ),
};

PostsPage.defaultProps = {
  posts: [],
};

export default PostsPage;
