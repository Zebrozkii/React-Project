import React from 'react';
import NewCommentForm from './NewCommentForm';
import CommentList from './CommentList';


class CommentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }



  handleAddingCommentToArray(newComment) {
    const newCommentsArray = this.state.comments.slice();
    newCommentsArray.push(newComment);
    this.setState({comments: newCommentsArray});
  };

  render() {
    return (
      <div>
        <NewCommentForm
          onAddComment={e => this.handleAddingCommentToArray(e)}
        />
        <CommentList
          commentList={this.state.comments}
        />
      </div>
    );
  }
}

export default CommentPage;
