import React from 'react'
import { useSelector } from 'react-redux';
import {Route,Redirect} from 'react-router-dom'
import { AdminRoutes, SuperAdminRoutes } from '../../constants';

function ProtectedRoute({ Component,...rest}) {
    const user = useSelector((state) => state.users);
    const isLoggedin = user?.isLoggedin;


    const adminRoutes = Object.values(AdminRoutes);
    const superAdminRoutes = Object.values(SuperAdminRoutes);



   
    return (
        <Route 
        {...rest}
        
        render={(props)=>{

            if(isLoggedin){
                    return <Component {...props}/>
            }else{
               return <Redirect to={{pathname:"/signin", state:{from:props.location}}}/>
            }
        }}
        />
    )
}

export default ProtectedRoute