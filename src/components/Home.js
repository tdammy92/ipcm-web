import React from 'react'
import { motion } from "framer-motion";
import { Container } from '@material-ui/core'

import {useHistory} from 'react-router-dom'


import {ScreenSize} from '../Config'
import {useMediaQuery} from 'react-responsive'

import Grid from '@material-ui/core/Grid';
import Footer from './partials/Footer/Footer'
import BannerImage from '../assets/images/Banner1.jpg'
import BannerImage2 from '../assets/images/banner2.jpg'
import BannerImage4 from '../assets/images/banner4.jpeg'


// const transition = { duration: 0.33 };

function Home() {

    const history = useHistory();
    const isMobile = useMediaQuery({maxWidth:ScreenSize.mobile})


    return (
        <div className='base__page'>
                <div  className="Home__container">
                
                    <section className="Section1">
                        <img src={BannerImage} alt="banner"/>

                        <motion.div className="cta"
                             animate={{
                                            y:"30%",
                                            opacity:0.6
                    
                                        }}

                                        initial={{
                                            y:'-10%',
                                            opacity:0.1
                                        }}
                                        transition={{
                                            type:'spring',
                                            stiffness:150
                                        }}

                                        
        
                        
                        >
                            <h3 className='cta__title'>@ IGPCM We Train The Mind</h3>
                                <p>Everyone experiences difficulty in different ways.
                                Let IGPCM guide you in your path to achieving greatness .</p>
                        </motion.div>
                    </section>

                    <section>
                            <Container>
                                    <section className="Section2">
                                        <div className='sub__Section2'>
                                            <Grid container className='top__heading'>
                                                <Grid item  xs={12}  sm={6}>
                                                    <motion.h2 className='section__titile'
                                                        animate={{
                                                            x:"20%",
                                                            opacity:0.9
                                    
                                                        }}

                                                        initial={{
                                                            x:'1%',
                                                            opacity:0.2
                                                        }}
                                                        transition={{
                                                            type:'spring',
                                                            stiffness:40
                                                        }}
                                                    >

                                                        OUR VISION:
                                                    </motion.h2>
                                                </Grid>
                                                <Grid item  xs={12}  sm={6}>
                                                    <p className='section__conetent'> 
                                                    We envisaged a world of tranquility and we are committed to raising a generation of peace builders for sustainable development.
                                                    </p>
                                                </Grid>

                                            </Grid>

                                            {isMobile && <hr className='seperator'/>}


                                            <Grid container className='top__heading'>

                                                <Grid item  xs={12}  sm={6}>
                                                    
                                                    
                                                            <p className='section__conetent'> 
                                                
                                                            To achieve peace through the instrumentality of minds shaping, inculcation of true values and development of attitudes of tolerance and accommodation of divergence of opinions and perceptions of people.
                                                            </p>
                                                    </Grid>
                                                    <Grid item xs={12}  sm={6}>
                                                    <motion.h2 className='section__titile' 
                                                        animate={{
                                                            x:"10%",
                                                            opacity:0.9
                                    
                                                        }}

                                                        initial={{
                                                            x:'100%',
                                                            opacity:0.2
                                                        }}
                                                        transition={{
                                                            type:'spring',
                                                            stiffness:40
                                                        }}
                                                    
                                                    >

                                                        :OUR MISSION
                                                        </motion.h2>


                                                        </Grid>

                                            </Grid>
                                        




                                        </div>





                                    </section>

                            </Container>

                    </section>
                    <section className='section3'>

                            <div className="cta2">
                                    
                                    <div   className="cta2__item">

                                        <h2>Join IGPCM Today</h2>

                                        <button className='btnCTA'
                                         onClick={()=>{history.push('/register')}}>
                                            Register Now
                                        </button>

                                       
                                    </div>
                                    
                                    
                                    
                                    <div 
                                  
                                     item className="cta2__image">

                                        <img src={BannerImage2} alt="cta2" />

                                    </div>

     
                            </div>

                    </section>

                    <section className='section4'>
                        {/* <Container> */}
                             <div  className='student__testimony'>
                                       
                                        <div  className='testimony__item'>
                                                    <div className="studentImage">

                                                    <img src={BannerImage4} alt="" />



                                                    </div>

                                                        

                                        </div>
                                       
                                        <div className='testimony__item'>
                                                    <div className="studentStory">

                                                    <h3>Student Story</h3>

                                                    <h2>Our Student has got somthing great to share with  you</h2>

                                                    <p>I registered for my project management Courses with IGPCM, i took the exams am happy i passed</p>


                                                    <button className='memberBtn'
                                                    onClick={()=>{history.push('/member')}}
                                                    >Membership</button>


                                                    </div>

                                        </div>
                             </div>
                        {/* </Container> */}

                    </section>
                        
                
                </div>
                <Footer/>
        </div>
    )
}

export default Home
