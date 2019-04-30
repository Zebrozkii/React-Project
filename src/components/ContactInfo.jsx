import React from 'react';
import { Link } from 'react-router-dom';
import surprise from '../assets/images/image1-2.jpeg';




function ContactInfo(){
  return (

    <div>
    <style jsx>{`
      img{
        transform: rotate(270deg);
        position:absolute;
        top: 80px;
        right: -150px;
      }
      `}</style>
      <div>
      <h1>About</h1><Link to="/"><h3>Home</h3></Link><img src={surprise}/>
      <p>Hello, i got my first taste of programming back in a intro class to C++ and since then ive loved it.
      I thouroughly enjoy the struggle of solving problems with the tools i know and leraning new thing constatnly always keeps me entertained</p>
    </div>
    </div>
  );
}

export default ContactInfo;
