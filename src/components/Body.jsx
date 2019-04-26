import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Profile from './Profile';
import about from '../assets/images/image5.jpeg';



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
      grid-gap:0px;
    }
    .item{
      background:white;
      border-style:solid;
      border-width:2px;
      border-color:aqua;
      color:white;
      padding:10px;
      border-radius:25px;
      box-shadow:3px 3px black;
      text-align:center;
      
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
      border-style:none;
      border-width:0px;
      border-color:none;
      }
      .resize{
        height:50%;
        width:auto;
      }
      
      
      
            
      
      `}</style> 
      <div className="background">
        <div className="wrapper">
          <div className="resize" className="item"><img src={about}/></div>
          <div className="item"></div>
          <div className="item">Interests</div>
          <div className="item"></div>
          <div className="picture" className="item"><Profile/></div>
          <div className="item"></div>
          <div className="item">Contact</div>
          <div className="item"></div>
          <div className="item">Projects</div>
        </div>
      </div>
    </div>
  );
}

export default Body;