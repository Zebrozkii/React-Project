import React from 'react';
import { Link } from 'react-router-dom';
import surprise from '../assets/images/image1-2.jpeg';




function Projects(){
  return (

    <div>
      <style jsx>{`
      img{
        transform: rotate(0deg);
        position:absolute;
        top: 550px;
        right: 450px;
      }

      `}</style>
      <div>
        <h1>Interests</h1><Link to="/"><h3>Home</h3></Link>
        <ul>
          <li>Jimmy's Shoe Shop (Angular Project)</li>
          <li>Space Boi(javascript game)</li>
          <li>HairSalon (C#,.Net project)</li>
          <li>Video Games</li>
          <li>Many other things</li>
        </ul>
      </div>
      <img src={surprise}/>
    </div>
  );
}

export default Projects;
