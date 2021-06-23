import React from 'react'
import Footer from './partials/Footer/Footer'
import BannerImage from '../assets/images/Banner1.jpg'


function Home() {
    return (
        <>
        <div  className="Home__container">
           
            <section className="Section1">
                <img src={BannerImage} alt="banner"/>

                <div className="cta">
                    <h3 className='cta__title'>@ IGPCM We Train The Mind</h3>
                        <p>Everyone experiences stress in different ways.
                        Let Alivio guide you, in a personalized journal experience, to overcome your stress.</p>
                </div>


            </section>
                
           
        </div>
        <Footer/>
        </>
    )
}

export default Home
