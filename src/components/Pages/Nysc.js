import React from 'react'
import Footer from '../partials/Footer/Footer'
import Corper1 from '../../assets/images/corper1.jpg'
import Corper2 from '../../assets/images/Corper2.jpg'
import Corper3 from '../../assets/images/Corper3.png'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import { Container } from '@material-ui/core'

function Nysc() {
    return (
        <div className='base__page'>
        <div  className='About__container'>
           

        <div className="about__body">

                <h4 className='page__title'>NYSC SCHEME</h4>

                <div className="nysc__container">

                    <div className="nysc__image">
                    {/* <img src={Corper1} alt="Corper" /> */}

                    <Carousel infiniteLoop={true} autoPlay={true} showIndicators={false} showThumbs={false} width='100%'>
                    <div className='Nysc__slider'>
                        <img src={Corper1} className='' alt='slide'/>
                    </div>
                    <div className='Nysc__slider'>
                        <img src={Corper2} className='' alt='slide'/>
                    </div>
                    <div className='Nysc__slider'>
                        <img src={Corper3} className='' alt='slide'/>
                    </div>

                    </Carousel>


                    </div>
                    <div className="nysc__content">
                        <p>
                        The NYSC Scheme program is aim to provide serving Corps Members with the in-demand professional skills needed in a workplace today. This training will prepare them for work after their service year. This is necessary because many fresh graduates today lack the necessary skills employers request from applicants. This training will help them to start work strong and move on strong.
                        </p>
                        <p>
                        This 3 Months professional training will be organized 4 times a year. At the end of the training, corps members will be mandate to volunteer with the institute or our partners to execute some of its projects. This will help them to apply the knowledge learned and acquire field experience as well.

                        </p>
                    </div>



                </div>

              
            </div>
            
        </div>
        <Footer/>
    </div>
    )
}

export default Nysc




