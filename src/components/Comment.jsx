import React from 'react';
import PropTypes from 'prop-types';

function Comment(props){
  return (
    <div>
      <h3>{props.comment} - {props.name}</h3>
      <hr/>
    </div>
  );
}

Comment.propTypes = {
  name: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired
};

export default Comment;