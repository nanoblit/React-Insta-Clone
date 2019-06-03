import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function CommentSection({ comments }) {
  return (
    <div>
      {comments.map(({ username, text }, idx) => (
        <Comment key={idx} username={username} text={text} />
      ))}
    </div>
  );
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default CommentSection;
