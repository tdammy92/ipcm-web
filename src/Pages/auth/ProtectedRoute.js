import React from 'react'
import {Route,Redirect} from 'react-router-dom'

function ProtectedRoute({IsLoggedin, Component,...rest}) {

   
    return (
        <Route 
        {...rest}
        
        render={(props)=>{

            if(IsLoggedin){
                    return <Component {...props}/>
            }else{
               return <Redirect to={{pathname:"/signin", state:{from:props.location}}}/>
            }
        }}
        />
    )
}

export default ProtectedRoute