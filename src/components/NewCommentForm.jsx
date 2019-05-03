import React from 'react';
import PropTypes from 'prop-types';

function NewCommentForm(props){
  let _name = null;
  let _userInput=null;

  function handleNewCommentFormSubmission(event){
    event.preventDefault();
    props.onNewCommentCreation({names: _name.value, input: _userInput.value});
    _name.value = '';
    _userInput.value = '';
  }
  return (
    <div>
    <h1>Let me know you stopped by!</h1>
    <form onSubmit = {handleNewCommentFormSubmission}>
    <input
    type='text'
    id='name'
    placeholder='Your Name'
    ref={(input) => {_name = input;}}/>
    <textarea
    id='userInput'
    placeholder='comment'
    ref={(input) => {_userInput = input;}}/>
    <button type='submit'>Leave Comment</button>
    </form>
    </div>
  );
}
NewCommentForm.propTypes = {
  onNewCommentCreation: PropTypes.func
};

export default NewCommentForm;
