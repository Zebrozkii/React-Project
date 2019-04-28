import React from 'react';
import image5 from '../assets/images/image5.jpeg';




function AboutPic(){
  return (
    <div>
    <style jsx>{`
      img{
        width:180px;
        position:absolute;
        padding-right:50px;
      }
      `}</style>
      <div>
      <div className="white">
      <img src={image5}/>
      </div>
      </div>
    </div>
  );
}

export default AboutPic;