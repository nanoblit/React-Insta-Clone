import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function CommentSection({ comments }) {
  return (
    <div>
      {comments.map(({ username, text, id }) => (
        <Comment key={id} username={username} text={text} />
      ))}
    </div>
  );
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default CommentSection;
