import React from 'react';
import NewCommentForm from './NewCommentForm';
import CommentList from './CommentList';


class CommentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: []
    };
  }



  handleAddingCommentToArray(newComment) {
    const newCommentsArray = this.state.comment;
    newCommentsArray.push(newComment);
    this.setState({comment: newCommentsArray});
  }

  render() {
    return (
      <div>
        <NewCommentForm
          onAddComment={e => this.handleAddingCommentToArray(e)}
        />
        <CommentList
          commentList={this.state.comment}
        />
      </div>
    );
  }
}

export default CommentPage;
