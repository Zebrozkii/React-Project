import React from 'react';
import interests from '../assets/images/image4.jpeg';
import contacts from '../assets/images/image3.jpeg';
import projects from '../assets/images/image2.jpeg';
import fullsizeoutput_6 from '../assets/images/main.jpeg';
import image5 from '../assets/images/image5.jpeg';
import { Link } from 'react-router-dom';



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
    .item:nth-child(even){
      background: none;
      box-shadow:none;
      border-style:none;
      border-width:0px;
      border-color:none;
      }
      img{
      height:100%;
      width:auto;
      }


      `}</style>
      <div className="background">
        <div className="wrapper">
          <div className="item"><Link to="/about"><img src={image5}/></Link><h1>About Me</h1></div>
          <div className="item"><h1>Home</h1></div>
          <div className="item"><img src={interests}/><h1>Interests</h1></div>
          <div className="item"></div>
          <div className="item"><img src={fullsizeoutput_6}/></div>
          <div className="item"></div>
          <div className="item"><img src={contacts}/><h1>Contact Info</h1></div>
          <div className="item"></div>
          <div className="item"><img src={projects}/></div>
        </div>
      </div>
    </div>
  );
}

export default Body;
