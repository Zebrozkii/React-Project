
import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';




function NewCommentForm(props) {
  let name = null;
  let comment = null;

  function handleNewCommentSubmission() {
    props.onAddComment({ name: name.value, comment: comment.value, id: v4() });
    console.log(name.value);
    name.value = '';
    comment.value = '';
  }


  return (
    <div>
      <style jsx>{`
        #name{
          width:200px;
          height:25px;
          padding:20px;
        }
        #comment{
          width:400px;
          height:300px;
          margin-top:20px;
        }
      `}</style>
      <div>
        <form onSubmit={handleNewCommentSubmission}>
          <input
            type='text'
            id='name'
            placeholder='Name'
            ref={(input) => { name = input; }} />
          <br />
          <textarea
            type='text'
            id='comment'
            placeholder='Comment'
            ref={(input) => { comment = input; }} />
          <br />
          <button type='submit'>Comment!</button>
        </form>
      </div>
    </div>
  );
}
NewCommentForm.propTypes = {
  onAddComment: PropTypes.func
};

export default NewCommentForm;
