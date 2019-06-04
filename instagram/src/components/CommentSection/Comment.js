import React from 'react';
import PropTypes from 'prop-types';
import { CommentText, Name } from '../../styles/Comment';

function Comment({ username, text }) {
  return (
    <CommentText>
      <Name>{username}</Name>
      {text}
    </CommentText>
  );
}

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Comment;
