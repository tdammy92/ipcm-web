import React from 'react'
import Footer from '../partials/Footer/Footer'
import { Container } from '@material-ui/core'

import Grid from '@material-ui/core/Grid';

import {ScreenSize} from '../../Config'
import {useMediaQuery} from 'react-responsive'

import EmailIcon from '@material-ui/icons/Email';
import PublicIcon from '@material-ui/icons/Public';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';




const MobileContact = ()=>{
    
   
    return (<div className="MobileContact__List">
                    <div className="contact__item">
                    <PhoneForwardedIcon  color='primary'/>
                    <h4>+2347033458730</h4>

                    </div>
                    <div className="contact__item">
                    <PhoneForwardedIcon  color='primary'/>
                    <h4> +2348128932090</h4>

                    </div>


                    <div className="contact__item">
                    <EmailIcon  color='primary'/>
                    <h4>igpcminfo@gmail.com</h4>

                    </div>

                    <div className="contact__item">
                    <PublicIcon  color='primary'/>
                    <h4>igpcm.org.ng</h4>

                    </div>
                    
        
    </div>)
    
}





function Contact() {

    const isMobile = useMediaQuery({maxWidth:ScreenSize.mobile})



    return (
        <div className='base__page'>
        <div  className='About__container'>
            <h3 className='page__title'>OUR CONTACT</h3>

            <div className="about__body">


                    <Container>


                {isMobile &&  <MobileContact/> }
                
               
                
                 {!isMobile &&  <div className="contact__List">
                        <div className="contact__item">
                           <PhoneForwardedIcon  color='primary'/>
                           <h4>+2347033458730, +2348128932090</h4>

                        </div>


                        <div className="contact__item">
                           <EmailIcon  color='primary'/>
                           <h4>igpcminfo@gmail.com</h4>

                        </div>

                        <div className="contact__item">
                           <PublicIcon  color='primary'/>
                           <h4>igpcm.org.ng</h4>

                        </div>
                        
                        
                     



                    </div>
                    }

                    <hr className='seperator'/>

                    <div className="address__container">
                        
                         <div className="contact__item">
                          
                           <HomeIcon fontSize="large" color='primary'/>
                           <h3 >OFFICE ADDRESS</h3>

                        </div>

                        <Grid container spacing={4} className="address__List">

                            <Grid item xs={12}  md={6} className="address__items">

                                <div className='address__heading'>   
                                    <LocationOnIcon color='primary'/>
                                    <h4>JIGAWA OFFICE</h4>
                                </div>
                          
                                <p  className='address__body'>Baba Chai-chai Plaza, Abdullahi Maikano Road, Dutse Jigawa State.
                               
                                </p>
                                <p className='address__body'>
                                +2347033458730, +2348128932090 igpcminfo@gmail.com
                                    igpcm.org.ng
                                    </p>
                            </Grid>

                            <Grid item xs={12}  md={6} className="address__items">
                            
                                <div className='address__heading'>   
                                    <LocationOnIcon color='primary'/>
                                    <h4>KATSINA STATE OFFICE</h4>
                                </div>
                                <p className='address__body'>Mangal Plaza, Yahaya Madaki Way, Kofar Kaura, Katsina State

                                </p>
                                <p className='address__body'>
                                +2347038286393, +2348171203116
                                    igpcmkatsina@gmail.com
                                </p>
                            </Grid>






                        </Grid>



                         

                       
               

                    </div>




                        
                    </Container>
            

           
            </div>
            
        </div>
        <Footer/>
    </div>
    )
}

export default Contact
