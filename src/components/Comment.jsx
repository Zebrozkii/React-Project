import React, { Component } from 'react';
import PropTypes from "prop-types";


class Comment extends React.Component{

  constructor(props){
    super(props);
    this.state = { comment: '' };
  }
  handleChange(e){
    event.preventDefault();
    this.setState({ comment : commen});

  };

  render(){
  return (
    <div>
    <form>
    <label htmlFor="comment">Comment </label>
    <input
    type="text"
    name="comment"
    value={this.state.comment}
    onChange={this.handleChange}
    />
    </form>
    <h3>Comment Left: {this.state.comment}</h3>
    </div>
  );
}
}

export default Comment;
