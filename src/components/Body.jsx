import React from 'react';
import { Switch, Route } from 'react-router-dom';



function Body(){
  return (
    <div>
    <style jsx>{`
      .wrapper{
      width:100%;
      magrin:0 auto;
      display:grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows:250px 250px 250px;
      grid-gap:20px;
    }
    .item{
      background:blue;
      color:white;
      padding:10px;
    }
      
      
      `}</style>
      <div className="wrapper">
      <div className="item">1</div>
      <div className="item">1</div>
      <div className="item">1</div>
      <div className="item">1</div>
      <div className="item">1</div>
      <div className="item">1</div>
      <div className="item">1</div>
      <div className="item">1</div>
      <div className="item">1</div>
      </div>
    </div>
  );
}

export default Body;