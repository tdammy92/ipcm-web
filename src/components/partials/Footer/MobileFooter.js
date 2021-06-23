import React from 'react'
import {Link} from 'react-router-dom'
import data from './FooterData'

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';




const Links=({name,path})=>{
    return <Link to={path}>{name}</Link>
}


function MobileFooter() {
    return (
        <div  className='MobileFooter__container'>

            <div className="Mobile__FooterLinks">

            {
                data.map((item)=>{
                    return <Links key={item.id} {...item}/>
                })
            }
            </div>


            <div className="Mobile__SocialLinks">

            <h5>Follow Us:</h5>

            <div className="Mobile__socials">
                
                    <Link to='/' className="Mobile__SocialItem">
                    <FacebookIcon  color='secondary'/>
                        <h5>FaceBook</h5>
                    </Link>
                    
                    <Link to='' className="Mobile__SocialItem">
                    <InstagramIcon  color='secondary'/>
                        <h5>Instgram</h5>
                    </Link>
                
                    <Link to='/' className="Mobile__SocialItem">
                    <TwitterIcon color='secondary'/>
                        <h5>Twitter</h5>
                    </Link>
            
            </div>




            </div>

                        
         </div>
        )
}

export default MobileFooter
