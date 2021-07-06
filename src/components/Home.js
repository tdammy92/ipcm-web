import React from 'react'
import { motion } from "framer-motion";
import { Container } from '@material-ui/core'

import 'aos/dist/aos.css';

import {useHistory} from 'react-router-dom'


import {ScreenSize} from '../Config'
import {useMediaQuery} from 'react-responsive'

import Grid from '@material-ui/core/Grid';
import Footer from './partials/Footer/Footer'


import Image1 from '../assets/images/Image1.jpg'
import Image2 from '../assets/images/Image2.jpeg'
import Image3 from '../assets/images/Image3.jpeg'
import Image4 from '../assets/images/Image4.jpeg'
import Image5 from '../assets/images/Image5.jpg'
import Image6 from '../assets/images/Image6.jpg'
import Image7 from '../assets/images/Image7.jpg'
import Image8 from '../assets/images/Image8.jpg'
import Image9 from '../assets/images/Image9.jpg'


import BannerImage from '../assets/images/Banner1.jpg'
import BannerImage2 from '../assets/images/banner2.jpg'
// import BannerImage4 from '../assets/images/banner4.jpg'



import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



function MobilSlider(){



    return(
          

        <div className='Mobile__slider__content'>
        <Carousel infiniteLoop={true} autoPlay={true} showIndicators={false} showThumbs={false} width='100%'>
                <div className='Mobile__slideImage__item'>
                    <img src={Image1} className='Mobile__slideImage' alt='slide'/>
                    <p >Analysing Youth Restiveness, Electoral violence and security challenges</p>
                </div>
                <div className='Mobile__slideImage__item'>
                    <img src={Image2} className='Mobile__slideImage' alt='slide'/>
                    <p>Shaping the mindset and developing the atitudes tolerance in the next generation</p>
                </div>
                <div className='Mobile__slideImage__item'>
                    <img src={Image3} className='Mobile__slideImage' alt='slide'/>
                    <p >Advancing woman and youth in peace building</p>
                </div>
                <div className='Mobile__slideImage__item'>
                    <img src={Image4} className='Mobile__slideImage' alt='slide'/>
                    <p >Promoting and strengthening Comunity Peace</p>
                </div>
                <div className='Mobile__slideImage__item'>
                    <img src={Image5} className='Mobile__slideImage' alt='slide'/>
                    <p >Training and reaising Peace Builders</p>
                </div>
                <div className='Mobile__slideImage__item'>
                    <img src={Image6} className='Mobile__slideImage' alt='slide'/>
                    <p >Promoting Ethno-Religious Dialogue and inclusion</p>
                </div>
                <div className='Mobile__slideImage__item'>
                    <img src={Image7} className='Mobile__slideImage' alt='slide'/>
                    <p >Mediation, Negotiation,Dialogue and Reconcilliation</p>
                </div>
                <div className='Mobile__slideImage__item'>
                    <img src={Image8} className='Mobile__slideImage' alt='slide'/>
                    <p >Intervention and Resolving Economic Resources Conflict</p>
                </div>
                <div className='Mobile__slideImage__item'>
                    <img src={Image9} className='Mobile__slideImage' alt='slide'/>
                    <p >Corporate and Workplace Conflict Prevention</p>
                </div>
</Carousel>
</div>




    )
}
function DesktopSlider(){



    return(
          

        <div className='slider__content'>
        <Carousel infiniteLoop={true} autoPlay={true} showIndicators={false} showThumbs={false} width='100%'>
                <div className='slideImage__item'>
                    <img src={Image1} className='slideImage' alt='slide'/>
                    <p >Analysing Youth Restiveness, Electoral violence and security challenges</p>
                </div>
                <div className='slideImage__item'>
                    <img src={Image2} className='slideImage' alt='slide'/>
                    <p>Shaping the mindset and developing the atitudes tolerance in the next generation</p>
                </div>
                <div className='slideImage__item'>
                    <img src={Image3} className='slideImage' alt='slide'/>
                    <p >Advancing woman and youth in peace building</p>
                </div>
                <div className='slideImage__item'>
                    <img src={Image4} className='slideImage' alt='slide'/>
                    <p >Promoting and strengthening Comunity Peace</p>
                </div>
                <div className='slideImage__item'>
                    <img src={Image5} className='slideImage' alt='slide'/>
                    <p >Training and reaising Peace Builders</p>
                </div>
                <div className='slideImage__item'>
                    <img src={Image6} className='slideImage' alt='slide'/>
                    <p >Promoting Ethno-Religious Dialogue and inclusion</p>
                </div>
                <div className='slideImage__item'>
                    <img src={Image7} className='slideImage' alt='slide'/>
                    <p >Mediation, Negotiation,Dialogue and Reconcilliation</p>
                </div>
                <div className='slideImage__item'>
                    <img src={Image8} className='slideImage' alt='slide'/>
                    <p >Intervention and Resolving Economic Resources Conflict</p>
                </div>
                <div className='slideImage__item'>
                    <img src={Image9} className='slideImage' alt='slide'/>
                    <p >Corporate and Workplace Conflict Prevention</p>
                </div>
</Carousel>
</div>




    )
}











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
                            <Container>
                                            <h3 className='value__title'>CORE VALUES (T-A-L-E-N-T)   </h3>
                                            <ul className='values__list'
                                            data-aos="flip-right"
                                            >
                                                        <li><b>TOLERANCE:</b> We believe people should be given the opportunity to express their feelings and such expressions, viewpoints and opinions be tolerated no matter how provocative they seem.</li>
                                                        
                                                        <li><b>AMICABILITY:</b> We know that settling people’s differences in a friendly, objective and committed manner ensues peace.</li>
                                                        
                                                        <li><b>LEADERSHIP:</b> We demonstrates strategic, leading and superior decisions and arguments that influence people to agree with certain courses of action.</li>
                                                       
                                                        <li><b>EQUALITY/EQUITY:</b> We believe that all people have certain desires and values and should be treated fairly and justly, irrespective of their social, cultural, political, religious and economic differences.</li>
                                                       
                                                        <li><b>NEUTRALITY:</b> We take and maintain a posture of non-alignment while participating in conflict resolution.</li>
                                                        
                                                        <li><b>TRANQUILITY:</b> We believe in peace, we pursue peace and we achieve peace for development to thrive.</li>

                                            </ul>




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

                    {/* <section className='section4'>
                       
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
                      

                    </section> */}
                    <section  className='slider__section'>
                           

                            {isMobile && <MobilSlider/>}
                            {!isMobile && <DesktopSlider/>}



                    </section>
                        
                
                </div>
                <Footer/>
        </div>
    )
}

export default Home
