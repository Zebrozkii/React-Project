import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';


function CommentList(props){
  return (
    <div>
      <hr/>
      {props.commentList.map((comment) =>
        <Comment name={comment.name}
          comment={comment.comment}
          key={comment.id}/>
      )}
    </div>
  );
}
CommentList.propTypes = {
  commentList: PropTypes.array
};


export default CommentList;