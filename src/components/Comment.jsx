import React from 'react';
import { Link } from 'react-router-dom';
import surprise from '../assets/images/image1-2.jpeg';
import NewCommentForm from './NewCommentForm';
import PropTypes from "prop-types";

class Comment extends React.Component{
  constructor(props){
    super(props);
    this.state={
      masterCommentList:[]
    };
    this.handleAddingNewComment= this.handleAddingNewComment.bind(this);
    this.handleTroubleshootingConfirmation= this.handleTroubleshootingConfirmation.bind(this);
  }
  handleAddingNewComment(newComment){
    var newMasterCommentList = this.state.masterCommentList.slice();
    newMasterCommentList.push(newComment);
    this.setState({masterCommentList: newMasterCommentList});
  }
  handleTroubleshootingConfirmation(){
    this.setState({formVisableOnPage:true});
  }
  render(){
    let currentlyVisibleContent = null;
    if(this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewCommentForm onNewCommentCreation={this.props.onNewCommentCreation}/>;
    }else{
      <p>sfdkjfaiusebnfijwaenfnibnerfibeibiabfsjidbnfjsbdvbnsidbv</p>
    }
    return (

    <div>
      <div>
      {currentlyVisibleContent}
      <NewCommentForm/>
      </div>
    </div>
  );
}
}
Comment.propTypes={
  onNewCommentCreation: PropTypes.func
};
export default Comment;
