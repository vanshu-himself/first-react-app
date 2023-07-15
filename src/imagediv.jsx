import React from 'react';
import './App.css';
let newimage=require( './imagehai.png')
function Imagediv() {
  return (

    <div className="imagediv">
        <h2 style={{padding:'120px 35px'}}>Find 3D Objects,Mockups <br/>
            and illustration here...</h2>
      <div><img className='img' src={newimage} alt="img"/></div>
        
    </div>
  );
}
export default Imagediv;