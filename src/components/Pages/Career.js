import React from 'react'
import Footer from '../partials/Footer/Footer'

function Career() {
    return (
        <div className='base__page'>
        <div  className='About__container'>
           

        <div className="about__body">

                {/* <h4 className='page__title'>PROJECTS</h4> */}

                <div className="Project__container">

                    <div className="project__item">
                        {/* <h4> Internal opportunities</h4> */}
                        <h5><strong>(1) Internal opportunities</strong></h5>

                        <p>
                        (a) Permanent Job
                            Any vacant position will be announced.

                        </p>
                        <p>
                        (b) Volunteer Job
                            Research Assistant: As a member you can apply for a research assistant. This position is open to Affiliate to Associate members only. More details we be communicated once we have project to be conducted.

                        </p>
                        <p>
                        Monitoring and Evaluation Assistant: Open to members from Associate to Full Membership level. More details we be communicated once we have project to be conducted.
                        Project Assistant: This position is open to Affiliate to Associate members only. More details we be communicated once we have project to be conducted.
                        Instructor: This position is open to members from Associate level to Senior Membership categories.
                        </p>

                        <p>The above volunteer opportunities will be made open soon</p>


                        <h5><strong>(2) External Opportunities
                            No information</strong></h5>
                        
                        <h5><strong>(3) Grant and fellowship opportunities: 
                            No informatio</strong></h5>

                    </div>
                    {/* <div className="project__item">
         
                    </div> */}




                </div>
            </div>
            
        </div>
        <Footer/>
    </div>
    )
}

export default Career
