import React from 'react';
import fullsizeoutput_6 from '../assets/images/image1.png';




function Profile(){
  return (
    <div>
    <style jsx>{`
      .white{
        background-color:white;
      }
      img{
        width:180px;
        position:fixed;
        margin-left:130px;
      }
      `}</style>
      <div>
      <div className="white">
      <img src={fullsizeoutput_6}/>
      </div>
      </div>
    </div>
  );
}

export default Profile;