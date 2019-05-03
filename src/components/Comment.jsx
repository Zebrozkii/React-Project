import React from 'react';
import PropTypes from 'prop-types';


class Comment extends React.Component{

  constructor(props){
    super(props);
    this.state = { };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({ comment: event.target.value});
  };

  render(){
  return (
    <div>
    <form>
    <input
    type="text"
    name="comment"
    id="comment"
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
