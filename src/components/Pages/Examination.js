import React from 'react'
import Footer from '../partials/Footer/Footer'

import { Container } from '@material-ui/core'

function Examination() {
    return (

        <div className='base__page'>
        <div  className='About__container'>
            {/* <h3 className='page__title'>Examination</h3> */}

        <div className="about__body">


                {/* <Paper color='primary'>
                <Typography variant="h4" component="h2" color='primary' align='center'>
                    Coming Soon
                    </Typography>
                </Paper> */}

                <h4 className='page__title'>SEE ANNUAL TRAINING AND EXAMINATION SCHEDULES BELOW:</h4>

                <Container>

                <div className='shedule__wrapper'>

                <div className='shedule__item'>

                        <h5>1ST DIET STARTS JANUARY AND ENDS MARCH</h5>
                        <ol>
                            <li>Registration begins Last week of December every year.</li>
                            <li>Training Commences 2nd week of January and Ends 3rd week of March each year.</li>
                            <li>Professional Examination Holds Saturday of 3rd week of March Every year.</li>
                            <li> Induction of Candidates holds last Saturday of April each year.</li>
                        </ol>

                </div>
                <div className='shedule__item'>

                        <h5>2nd DIET STARTS APRIL AND ENDS JUNE</h5>
                        <ol>
                            <li>Registration begins Last week of March every year.</li>
                            <li>Training Commences 1st week of April and Ends 3rd week of June every year.</li>
                            <li>Professional Examination Holds Saturday of 3rd week of June every year.</li>
                            <li> Induction of Candidates holds last Saturday of July every year.</li>
                        </ol>

                </div>
                <div className='shedule__item'>

                        <h5>3rd DIET STARTS JULY AND ENDS SEPTEMBER</h5>
                        <ol>
                            <li> Registration begins Last week of June every year.</li>
                            <li>Training Commences 1st week of July and Ends 3rd week of September every year.</li>
                            <li>Professional Examination Holds Saturday of 3rd week of September every year.</li>
                            <li> Induction of Candidates holds last Saturday of October every year.</li>
                        </ol>

                </div>
                <div className='shedule__item'>

                        <h5>4th DIET STARTS OCTOBER AND ENDS DECEMBER</h5>
                        <ol>
                            <li> Registration begins Last week of September every year.</li>
                            <li>Training Commences 1st week of October and Ends 2nd week of December every year..</li>
                            <li>Professional Examination Holds Saturday of 2nd week of December every year.</li>
                            <li>  Induction of Candidates holds last Saturday of January every year.</li>
                        </ol>

                </div>









                </div>
                </Container>
            </div>
            
        </div>
        <Footer/>
    </div>
    )
}

export default Examination
