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
      background:white;
      color:white;
      padding:10px;
      border-radius:25px;
      box-shadow:10px 3px black;
    }
    *{
      background-image: linear-gradient(black, white,black);
    }
    .picture{
      background:white;
      color:white;
      padding:10px;
      border-radius:200px;
    }
    .item:nth-child(even){
      background: none;
      box-shadow:none;
      }
            
      
      `}</style>
      <div className="background">
      <div className="wrapper">
      <div className="item">1</div>
      <div className="item"></div>
      <div className="item">1</div>
      <div className="item"></div>
      <div className="picture" className="item"></div>
      <div className="item"></div>
      <div className="item">1</div>
      <div className="item"></div>
      <div className="item">1</div>
      </div>
      </div>
    </div>
  );
}

export default Body;