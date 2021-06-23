import React from 'react'
import {Link} from "react-router-dom";
import data from './HeaderData'







const Links = ({item})=> {
const {name,path} = item

 return (<Link to={path}> {name}</Link>)
    
    
}


function DesktopNavBar() {

  

    return (
        <div className='navListContainer'>
          
                <div className='navListWrapper'> 

                    {data?.map((item)=>{
                       
                        return (<div className='navListItem'>
                                    <Links key={item.id} item={item}/>
                                    
                                </div>
                            
                            )

                    })}

                </div>

          
                <div className='RegisterContainer'>
                        
                        <button  className='registerBtn' >
                            Register
                        </button>

                </div>
   
      


            
        </div>
    )
}





export default DesktopNavBar;
