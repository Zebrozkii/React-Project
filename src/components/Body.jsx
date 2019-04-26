import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from './Profile';



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
      background:aqua;
      color:white;
      padding:10px;
      border-radius:25px;
      box-shadow:3px 3px black;
    }
    *{
      background-color:black;
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
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="picture" className="item"><Profile/></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </div>
    </div>
  );
}

export default Body;