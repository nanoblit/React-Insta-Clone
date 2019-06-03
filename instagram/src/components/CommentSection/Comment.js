import React from 'react';
import PropTypes from 'prop-types';

function Comment({ username, text }) {
  return (
    <p>
      <span>{username}</span>
      {text}
    </p>
  );
}

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Comment;
