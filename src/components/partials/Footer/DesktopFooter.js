import React from 'react'
import {Link} from 'react-router-dom'
import data from './FooterData'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
// import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';



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
                    
                        <a  className="SocialItem" href='https://www.facebook.com' target="_blank"
                        rel="noreferrer">
                           
                            <FacebookIcon color='secondary'/>
                            <h5>FaceBook</h5>
                        </a>
                        
                        <a href='https://www.instagram.com' className="SocialItem"
                        target="_blank"
                        rel="noreferrer">
                          

                            <InstagramIcon color='secondary'/>
                            <h5>Instgram</h5>
                        </a>
                    
                        <a href='mailto:igpcminfo@gmail.com' className="SocialItem"
                        target="_blank"
                        rel="noreferrer">
                           

                            <EmailIcon color='secondary'/>
                            <h5>igpcminfo@gmail.com</h5>
                        </a>
                 
                </div>

                

              
                </div>
            
        </div>
    )
}

export default DesktopFooter
