import React from 'react';
import { Link } from 'react-router-dom';


class Comment extends React.Component{
  render(){
  return (
      <div>
        <h1>Let Me know you stopped by:)</h1>
        <form>
        <input
        type='text'
        id = 'name'
        placeholder = 'userName'/>
        <textarea
        id = 'comment'
        placeholder = 'userComment'/>
        <button type='submit'>Comment</button>
        </form>
      </div>
  );
}
}

export default Comment;
