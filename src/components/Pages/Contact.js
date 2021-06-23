import React from 'react'
import Footer from '../partials/Footer/Footer'
import { Container } from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email';
import PublicIcon from '@material-ui/icons/Public';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import HomeIcon from '@material-ui/icons/Home';

function Contact() {
    return (
        <>
        <div  className='About__container'>
            <h3 className='about__title'>OUR CONTACT</h3>

            <div className="about__body">


                    <Container>

                    <div className="contact__List">
                        <div className="contact__item">
                           <PhoneForwardedIcon fontSize="large" color='primary'/>
                           <h4>+2347033458730, +2348128932090</h4>

                        </div>


                        <div className="contact__item">
                           <EmailIcon fontSize="large" color='primary'/>
                           <h4>igpcminfo@gmail.com</h4>

                        </div>

                        <div className="contact__item">
                           <PublicIcon fontSize="large" color='primary'/>
                           <h4>igpcm.org.ng</h4>

                        </div>
                        
                        
                     



                    </div>

                    <hr/>

                    <div className="address__container">
                        
                         <div className="contact__item">
                          
                           <HomeIcon fontSize="large" color='primary'/>
                           <h3 >OFFICE ADDRESS</h3>

                        </div>
                         

                       
               

                    </div>




                        
                    </Container>
            

           
            </div>
            
        </div>
        <Footer/>
    </>
    )
}

export default Contact
