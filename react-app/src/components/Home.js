import React from 'react'
import pic from './react.jpg';

export default function Home() {
  return (
    <div style={{backgroundColor:'grey'}}>
       {/* <h3 style={{backgroundColor:'green',color:'white',textAlign:'center'}}>Hello, I am React-App.</h3> */}
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
       <img src={pic} id="demo"/>  
    </div>
  )
}
