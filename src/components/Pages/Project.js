import React from 'react'
import Footer from '../partials/Footer/Footer'

function Project() {
    return (
        <div className='base__page'>
        <div  className='About__container'>
           

        <div className="about__body">

                {/* <h4 className='page__title'>PROJECTS</h4> */}

                <div className="Project__container">

                    <div className="project__item">
                        <h4>Projects</h4>

                        <p>
                       (a) Peace Clubs: The institute is working on establishing 50,000 <strong className="Adownload" style={{color:'green'}}>Peace Clubs</strong> and Trains 100,000 Teachers in peace-building in both public and private Primary and Secondary schools across Nigeria in 7 years. The project starts 2022 and Ends 2028.  This project is inspired by the United States Institute of Peace (USIP) and the desire to contribute towards the attainment of SDGs goal 16 (Peace, Justice and Strong Institutions). The project aims to create at least 200 peace clubs and train 400 teachers in schools across the 36 states including the capital territory Abuja annually. <strong className="Adownload"  style={{color:'green'}}>(DONATE)</strong>

                        </p>

                    </div> 
                    <div className="project__item">
                        <h4>Research Works</h4>

                        <p>
                        (a) Research work to bring solution to the problem of structural conflicts caused by employment and appointment of officers of public institutions in Nigeria.

                        </p>
                        (b) Research work to eliminate the decamping of political leaders from one political party to another in order to strengthen the democratic institutions and encourage peace building and conflict resolution among political actors.

                        <p>

                        </p>
                    </div>




                </div>
            </div>
            
        </div>
        <Footer/>
    </div>
    )
}

export default Project
