import React from 'react'
import {useLocation}  from 'react-router-dom'

function NotFound() {

  const location = useLocation().pathname;
  return (
    <div  style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
      <div  style={{marginTop:'30px'}}>

        <h4  style={{color:'#01996D', fontSize:'30px',textAlign:'center'}}>Oops  !!!</h4>

        <p   style={{fontSize:'50px',color:'#01996D', textAlign:'center',fontWeight:'bold'}}>404</p>
        <p style={{fontSize:'40px',color:'#01996D', textAlign:'center',fontWeight:'500'}} >The url <span  style={{color:'red', textDecoration:'underline',fontWeight:'bolder',cursor:'not-allowed'}}>{location}</span>  can not be found</p>
      </div>
    </div>
  )
}

export default NotFound