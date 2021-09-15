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

                <div className="shedule__header">
                    <h5>(A)  CERTIFICATION AND PROFESSIONAL PROGRAMS SCHEDULES:</h5>
                </div>

                <div className='shedule__item'>

                        <h6>1ST DIET STARTS JANUARY AND ENDS MARCH</h6>
                        <ol>
                            <li>Registration begins Last week of December every year.</li>
                            <li>Training Commences 2nd week of January and Ends 3rd week of March each year.</li>
                            <li>Professional Examination Holds Saturday of 3rd week of March Every year.</li>
                            <li> Induction of Candidates holds last Saturday of April each year.</li>
                        </ol>

                </div>
                <div className='shedule__item'>

                        <h6>2nd DIET STARTS APRIL AND ENDS JUNE</h6>
                        <ol>
                            <li>Registration begins Last week of March every year.</li>
                            <li>Training Commences 1st week of April and Ends 3rd week of June every year.</li>
                            <li>Professional Examination Holds Saturday of 3rd week of June every year.</li>
                            <li> Induction of Candidates holds last Saturday of July every year.</li>
                        </ol>

                </div>
                <div className='shedule__item'>

                        <h6>3rd DIET STARTS JULY AND ENDS SEPTEMBER</h6>
                        <ol>
                            <li> Registration begins Last week of June every year.</li>
                            <li>Training Commences 1st week of July and Ends 3rd week of September every year.</li>
                            <li>Professional Examination Holds Saturday of 3rd week of September every year.</li>
                            <li> Induction of Candidates holds last Saturday of October every year.</li>
                        </ol>

                </div>
                <div className='shedule__item'>

                        <h6>4th DIET STARTS OCTOBER AND ENDS DECEMBER</h6>
                        <ol>
                            <li> Registration begins Last week of September every year.</li>
                            <li>Training Commences 1st week of October and Ends 2nd week of December every year..</li>
                            <li>Professional Examination Holds Saturday of 2nd week of December every year.</li>
                            <li>  Induction of Candidates holds last Saturday of January every year.</li>
                        </ol>

                </div>









                </div>


                <hr className='Hr__style'/>
                
                
                <div className='shedule__wrapper'>

                <div className="shedule__header">
                    <h5>(B) DIPLOMA AND POSTGRADUATE DIPLOMA  COURSES SCHEDULES:</h5>
                </div>

                    <div className='shedule__item'>

                           
                            <ol className='list__stype'>
                                <li>Sales of Forms: September-November every year</li>

                                <li>Admission Processing: December every year</li>
                               
                                <li>Registration and Training for 1st Semester: Start 2nd week of January and ends 3rd week of April every year</li>
                               
                                <li> 1st Semester Examination: Start 3rd week of April and ends 4th week of April every year.</li>


                                <li>Submission of Project Initiatives start 1st week of May and Ends 3rd week of May every year.</li>
                                
                                <li>2nd Semester Registration and Training: Starts 2nd week of June and ends 3rd of September every year</li>
                                <li>2nd Examination: Starts 3rd week of September and ends 4th week of September every year</li>
                                <li>Execution of Projects Initiatives by groups and Report starts July and ends November every year.
                                    </li>
                                
                            </ol>

                    </div>
                </div>
                </Container>

                <Container>
                <div className="bank__details" id="bankDetails">

<h3>IGPCM Accountant Details</h3>

<p>

    Account Name:
    <strong>
        Institute of Global Peace and Conflict Management
    </strong>
</p>
<p>
    Account Number:
    <strong>
        0645754697</strong>

</p>
<p>

    Bank:
    <strong>
        Guaranty Trust Bank</strong>
</p>
</div>
                </Container>
            </div>
            
        </div>
        <Footer/>
    </div>
    )
}

export default Examination
