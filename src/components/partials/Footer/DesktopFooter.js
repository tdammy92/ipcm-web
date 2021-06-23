import React from 'react'
import {Link} from 'react-router-dom'
import data from './FooterData'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';




const Links=({name,path})=>{
    return <Link to={path}>{name}</Link>
}


function DesktopFooter() {
    return (
        <div className='DeskTopFooter__container'>

           
            <div className="FooterLinks">

                {
                    data.map((item)=>{
                        return <Links key={item.id} {...item}/>
                    })
                }
             </div>


             <div className="SocialLinks">

                <h3>Follow Us:</h3>
               
                <div className="socials">
                    
                        <Link to='/' className="SocialItem">
                           
                            <FacebookIcon fontSize='large' color='secondary'/>
                            <h5>FaceBook</h5>
                        </Link>
                        
                        <Link to='' className="SocialItem">
                          

                            <InstagramIcon fontSize='large' color='secondary'/>
                            <h5>Instgram</h5>
                        </Link>
                    
                        <Link to='/' className="SocialItem">
                           

                            <TwitterIcon fontSize='large' color='secondary'/>
                            <h5>Twitter</h5>
                        </Link>
                 
                </div>

                

              
                </div>
            
        </div>
    )
}

export default DesktopFooter
