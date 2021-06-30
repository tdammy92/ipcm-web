import React from 'react'
import Footer from '../partials/Footer/Footer'
// import { Paper } from '@material-ui/core'
// import { Typography } from '@material-ui/core'
import {Grid} from '@material-ui/core'
import { Container } from '@material-ui/core'
import {useHistory} from 'react-router-dom'
import BannerImage2 from '../../assets/images/banner2.jpg'

function Member() {

    const history = useHistory()
    return (

        <div className='base__page'>
            <div  className='Member__Container'>
            <h3 className='page__title'>IGPCM MEMBERSHIP</h3>

                   
                    <div className="Member__items">
                         <h4>Membership Information:</h4>
                        

                        <div className="member__item__list">
                            <div className="information__list__left">
                               
                                <h3 className='student__list__number__left'>1</h3>
                                <h5 className='student__list__title'>STUDENT MEMBER:</h5>

                                <p>This particular membership is open to students in the higher institutions in Nigeria and abroad. This is a qualifying grade and applicants will be subjected to foundation or basic course training and evaluation test. Upon successful evaluation, will be admitted at Student level and certificate for the completion of Basic Peace and conflict management course will be issued to them. This process runs for a maximum of 4 weeks only. Those who failed the assessment test will be required to pay another extra fee for re-training and re-evaluation.</p>
                            </div>


                            <div className="information__list__right">
                                
                                <h3 className='student__list__number__right'>2</h3>
                                <h5 className='student__list__title'>:AFFILIATE</h5>

                                <p>This particular membership of the institute is open to holders of NCE/OND certificates with 3 and above years of work experience in any organization and will be subjected to undergo Intermediate course in peace and conflict management for 2 Months and sit for examination test manually or online, after obtaining the pass mark and paying the prescribed fee they will be inducted into the institute as Affiliate Members and a certificate of completion in Intermediate course in Peace and Conflict Management  will be issued to them on the day of induction.  Those who failed the assessment test will be required to pay another extra fee for re-training and re-evaluation.</p>
                            </div>


                        </div>
                        <div className="member__item__list">
                            <div className="information__list__left">
                               
                                <h3 className='student__list__number__left'>3</h3>
                                <h5 className='student__list__title'>ASSOCIATE:</h5>

                                <p>This membership category is open to graduates from recognized higher institutions of learning in Nigeria and abroad. Holders of HND, B.SC, B.A, B.Ed, LLB, MBBS, B.ENG, B.TECH PGD etc with 1 to 5 years work experience will be subjected to a 3 Months intensive Professional and Advanced Course training with the option of self-pace study or class coaching and a Mandatory Professional Examination to evaluate the learning status of the participants. <b>NYSC Serving Corps Members</b>  fit well in this category. Upon successful evaluation, the participants will be admitted at the Associate level and awarded a Professional certificate.  Those who failed the examinations for 3 consecutive attempts in a single sitting, will be required to pay extra fee of 20% of the total initial fee for the level and carryover to the next batch of trainees.</p>
                            </div>


                            <div className="information__list__right">
                                
                                <h3 className='student__list__number__right'>4</h3>
                                <h5 className='student__list__title'>:Full MEMBER</h5>

                                <p>This full membership category is open to Holders of HND, B.SC, B.A, B.Ed, LLB, MBBS, B.ENG, B.TECH, PGD, MSC, M.Ed, MBA, MPA, MPHIL, PHD or a membership of other recognized professional bodies subject to confirmation with 6-10 years of work experience. This category is in two-folds:  </p>

                                <ul>
                                    <li>Direct Membership Admission</li>
                                    <li>Direct Membership with Evaluation Test</li>
                                    <li>Senior</li>
                                    <li>Fellow</li>
                                    <li>Corporate</li>
                                </ul>
                            </div>


                        </div>
                        <div className="member__item__list">
                            <div className="information__list__left">
                               
                                <h3 className='student__list__number__left'>5</h3>
                                <h5 className='student__list__title'>SENIOR:</h5>

                                <p>This direct membership category is open to Holders of HND, B.SC, B.A, LLB, MBBS, B.ENG, B.TECH, PGD, MSC, MBA, M.Ed, MPA, MPHIL, PHD or a membership of other recognized professional bodies subject to confirmation with 10-15 years of work experience from all areas of endeavor. No examination is required. Admission is based on work experience because he/she must have in the course of their duties come across different conflicts and might have settled them in their own wisdom. This way of resolving conflict maybe unprofessional but it is highly recognized and appreciated, hence their admission to be grounded professionally for more development and career opportunities.</p>
                            </div>


                            <div className="information__list__right">
                                
                                <h3 className='student__list__number__right'>6</h3>
                                <h5 className='student__list__title'>:FELLOW</h5>

                                <p>This direct membership category is open to Holders of HND, B.SC, B.A, LLB, MBBS, B.ENG, B.TECH, PGD, MSC, MBA, M.Ed, MPA, MPHIL, PHD or a membership of other recognized professional bodies subject to confirmation with 16 and above years of work experience from all areas of endeavor. Admission is based on work experience because he/she must have in the course of their duties come across different conflicts and might have settled them in their own wisdom. This way of resolving conflict maybe unprofessional but is highly recognized and appreciated, hence their admission to be grounded professionally for more development and career opportunities.  </p>

                            </div>


                        </div>
                        <div className="member__item__list">
                            <div className="information__list__left">
                               
                                <h3 className='student__list__number__left'>7</h3>
                                <h5 className='student__list__title'>CORPORATE:</h5>

                                <p>This is open to non-governmental organizations, CSOs, CBOs, schools and private businesses that want a discounted platform to enhance the profile of their businesses and collaborates to improve their employees’ skills in workplace conflict management, in order to advance a peaceful workplace environment and achieve the organizational goals.</p>
                            </div>

{/* 
                            <div className="information__list__right">
                                
                                <h3 className='student__list__number__right'>6</h3>
                                <h5 className='student__list__title'>:FELLOW</h5>

                                <p>This direct membership category is open to Holders of HND, B.SC, B.A, LLB, MBBS, B.ENG, B.TECH, PGD, MSC, MBA, M.Ed, MPA, MPHIL, PHD or a membership of other recognized professional bodies subject to confirmation with 16 and above years of work experience from all areas of endeavor. Admission is based on work experience because he/she must have in the course of their duties come across different conflicts and might have settled them in their own wisdom. This way of resolving conflict maybe unprofessional but is highly recognized and appreciated, hence their admission to be grounded professionally for more development and career opportunities.  </p>

                            </div> */}


                        </div>
                    </div>
                    <section className='section3'>

        <Grid container spacing={2} className="cta2">
                
                <Grid item xs={12} md={4} 
            className="cta2__item">

                    <h2>Join IGPCM Today</h2>

                    <button className='btnCTA'
                    onClick={()=>{history.push('/register')}}>
                        Register Now
                    </button>

                
                </Grid>
                
                
                
                <Grid xs={12} md={8} 
            
                item className="cta2__image">

                    <img src={BannerImage2} alt="cta2" />

                </Grid>


        </Grid>

</section>
<section>
<div className="Member__items">
                         <h4>ELIGIBILITY:</h4>

                         <Container >

                         <p className='eligibilty__paragraph'>
                         Peace building and conflict management skills transverses every facet of life. To this end, graduates from Faculties of Art, Humanities, Education, Social Sciences, Management Sciences, Laws, Sciences, Engineering and Medical sciences can apply and obtain peace and conflict management professional skills to excel in their life’s endeavours. 

                         </p>

                         <p className='eligibilty__paragraph'>This means that, those who are working or desiring to pursue careers in the following areas can and should apply for formal peace and conflict management training courses through our various channels. The careers includes:</p>





                        <div className="eligibilty__list__container">
                                <ul className="eligibility__list">

                                    <li>Arm Forces: Military, Para-military and Police personnel</li>
                                    <li>Diplomats</li>
                                    <li>Company Secretaries</li>
                                    <li>Civic/Religious leaders</li>
                                    <li>Political leaders</li>
                                    <li>Traditional leaders</li>
                                    <li>Opinion leaders</li>
                                    <li>Conflict analyst</li>
                                    <li>Lawyers</li>
                                    <li>Researchers/Scholars	/Educators</li>
                                    <li> Human Resource officers</li>
                                    <li>Entrepreneurs/Proprietors</li>
                                    <li>Journalist/media experts</li>
                                    <li>Humanitarian/ development experts</li>
                                    <li>Civil servants/Labour union executives</li>
                                    <li>Conflict/security management consultants </li>
                                    <li>Human right activists </li>
                                    <li>Political Party officials</li>
                                    <li> Entertainers	</li>
                                    <li> Youth and women leaders</li>
                                    <li>Medical practitioners </li>
                                    <li>Sales expert </li>
                                    <li>Sport professionals </li>
                                    <li>Policy/peace advocates</li>
                                    <li>Management team</li>
                                    <li>Authors/Speech writers </li>
                                  



                                </ul>

                        </div>
                         </Container>
                        

 
                    </div>



</section>
<section className='section3'>

<Grid container spacing={2} className="cta2">



  
<Grid xs={12} md={8} 
    
    item className="cta2__image">

        <img src={BannerImage2} alt="cta2" />

    </Grid>
        
        <Grid item xs={12} md={4} 
    className="cta2__item">

            <h2>Join IGPCM Today</h2>

            <button className='btnCTA'
            onClick={()=>{history.push('/register')}}>
                Register Now
            </button>

        
        </Grid>
        
        
      


</Grid>

</section>
<section>
<div className="Member__items">
                         <h4>MEMBERSHIP ROUTES:</h4>

                         <Container >

                         <h3  className='membership__route__head'>EXAMINATION ROUTES</h3>
                         <Grid container>
                         
                                

                            <Grid item xs={12}  md={6} className='membership__route__body'>
                            <h4 >Foundation Course in Peace and Conflict Management </h4>
                                <p>This 4 weeks training leads to the award of certificate of completion and admission at Student membership of the institute. It meant for students in colleges of Education, polytechnics, Monotechnics and undergraduate students of university institutions. Evaluation Test to be conducted at the end of training. After completion of their OND/NCE and Degree/ HND programmes, the Student members will be made to take the Intermediate or Professional Examination after 3 weeks or 3 months of advanced course training to progress to next stage of membership according to their academic qualifications and work experiences. He/she must also be willing to engage his/her community with other members of the institute in peace building and community conflict resolution.</p>

                            </Grid>

                            <Grid item xs={12}  md={6} className='membership__route__body'>
                               

                                <h4 >Intermediate Course in Peace and Conflict Management </h4>

                                <p>This 2 months training course is open to holders of NCE/OND certificates in any field with at least 2-5 years of work experience in any organization. After the training, they will sit for an examination test. If passed, they will be inducted into the institute and certificate of completion in Intermediate course in peace and conflict management will be issued to them on the day of induction. He/she must also be willing to engage his/her community with other members of the institute in peace building and community conflict resolution.</p>

                            </Grid>
                            <Grid item xs={12}   className='membership__route__body'>
                               

                                <h4 >Professional Course in Peace and Conflict Management  </h4>

                                <p>This is a 3 month intensive Training course that leads to the award of professional certificate and admission at the Associate level of the individual membership of the institute. All participants MUST take the Professional Examination. No option for exemption here. It is open to ALL holders of degrees/HNDs, who are interested in Peace and conflict management and employees who have at least 1-5 years of work experience in any field. Associates can progress to the next level of membership after 5years of ACTIVE membership from the date of the induction. He/she must also be willing to engage his/her community with other members of the institute in peace building and community conflict resolution.</p>

                            </Grid>





                         </Grid>




                         
                         <h3  className='membership__route__head'>EXECUTIVE ROUTES</h3>
                         
                         
                         
                         
                         
                         <Grid container>
                         
                                

                            <Grid item xs={12}  md={6} className='membership__route__body'>
                            <h4 >Direct Membership with Evaluation Test (Optional). </h4>
                                <p>Those applying for Full Membership have an option for Evaluation Test which is optional but once decided to take the test, he/she must get the required pass mark. If you wish to be evaluated to ascertain your level of peace building and conflict management skills, this is the level for you. However, whether undertaking the examination or not, the applicant MUST participate in the workshop training, group discussion and simulation activities leading to the induction of applicants. He/she must be a holder of HND/Degree, have at least 6-10 years of work experience and must head a unit in his/her organization at the time of this application.  Full Members can progress to next level of individual membership of the institute after 5years of ACTIVE membership from the date of induction.</p>

                            </Grid>

                            <Grid item xs={12}  md={6} className='membership__route__body'>
                               

                                <h4 >Direct Membership on Experience Basis</h4>

                                <p>Exemption from Examination but MUST participate in the workshop training, group discussion and simulation activities leading to the induction of applicants. The admission here is for the Senior and Fellow Memberships.  Senior Membership admission is by nomination /application and is open to persons from all walks of life who desire to possess professional skills in peace building and conflict management, he/she must hold degree/HND in any field, must have 10-15 years of work experience and must be in a leadership position in his/her organization/society at the time of application/nomination. They can progress to next level of individual membership of the institute after 5years of ACTIVE membership from the date of admission. Admission is by years of work experience. Fellow Membership is the highest individual category and admission process is same as the Senior Membership category. However, the applicant/nominee must have 15 and above years of work experience. Must be in leadership position in his/her organization at the time of nomination or application.</p>

                            </Grid>
                            <Grid item xs={12}  md={6} className='membership__route__body'>
                               

                                <h4 >PEACEBUILDER ROUTE  </h4>

                                <p>This is open to individuals and organizations with cognizance experience in peace building. The individual and the organization must have at least 3 and above years of work experience in conflict analysis, prevention, intervention, reconciliation, conciliation, reconstruction, mediation, negotiation, dialogue, arbitration and in the promotion of peace, justice, equality and national cohesion both at community, state, national and global levels. While the organizations will be admitted as corporate members, the individuals will be admitted at various individual membership categories based on their years of work experiences. They will be inducted after attending a two-day workshop on peace, security and sustainable development.</p>

                            </Grid>
                            <Grid item xs={12}  md={6} className='membership__route__body'>
                               

                                <h4 >ACADEMIC/TEACHERS’ ROUTE   </h4>

                                <p>This is open to Vice Chancellors, Professors, Doctors and Lecturers in the higher institutions of learning. This route is also applies to Teachers in Secondary and Primary Schools both public and private schools. The applicants are expected to be promoters of peace in their various institutions and must be willing to influence the inclusion of peace building in the academic curriculum of Nigeria. The applicant under this category must have 3 and above years of teaching experience and can be admitted at the various levels of individual membership categories, based on their qualifications and years of work experience. The Principals and Head Teachers whose schools are housing our Peace Clubs, will receive reasonable discount on the membership application fee. They will be inducted after attending a two-day seminar on Peace, Security and Strategic Leadership and Fundamentals of Peace Education.</p>

                            </Grid>
               
                            <Grid item xs={12}  md={6} className='membership__route__body'>
                               

                                <h4 >MILITARY/PARAMILITARY ROUTE   </h4>

                                <p>(a) This route is open to officers of the Nigerian Army, Air force, Navy, Civil Defense, Customs, Immigration, Police, DSS, Correction Officers, Road Safety Officers, VIO Officers, Peace Corps etc.  The holders of OND/NCE at the rank of Lance Corporal to Sergeant or its equivalent with 5 and above years of work experience will be admitted at level of Affiliate Member after attending the necessary training course and a workshop leading to the induction of members.
(b) The holders of Degree/HND from the Rank of Second Lieutenant and its equivalent to the highest ranking in those respective institutions with adequate work experience ranging from 3 and above years of work experience will be admitted at the various membership categories appropriate to their work experience and after taking a professional examination or attending a two-day workshop leading to the induction of new members. Those with evidence of Peace-Keeping Mission experience will have other advantages ranging from cash discount and membership placement.    All applicants will be required to attend a two-day workshop on Civilian-Military Relation, Security, Violent Extremism and Youth Restiveness and Peace, Security and Strategic Leadership training and pay the required fee for membership induction.
</p>

                            </Grid>
                            <Grid item xs={12}  md={6} className='membership__route__body'>
                               

                               <h4 >CORPORATE  </h4>

                               <p>This is open to organizations promoting peace, justice, good governance and human rights of citizenry at community, Local, State and International levels. These are NGOs, Civil Society Organizations, Churches and Community-Based Organizations. 
The membership is also extended to private businesses working towards promoting a peaceful workplace environment and offer equal opportunities to all applicants and employees.
The organization must be fully registered with CAC, have at least 3 years of full time operation and must be willing to accept in-house training opportunities offered by institute for the continuous professional development of her workers.     
A rebate will be given to organizations sponsoring more than 3 of its staff for our trainings or those seeking for an in-house training. 

</p>

                           </Grid>





                         </Grid>
                         </Container>
                        

 
                    </div>



</section>
                    <section className='section3'>

<Grid container spacing={2} className="cta2">
        
        <Grid item xs={12} md={4} 
    className="cta2__item">

            <h2>Join IGPCM Today</h2>

            <button className='btnCTA'
            onClick={()=>{history.push('/register')}}>
                Register Now
            </button>

        
        </Grid>
        
        
        
        <Grid xs={12} md={8} 
    
        item className="cta2__image">

            <img src={BannerImage2} alt="cta2" />

        </Grid>


</Grid>

</section>
<section>
<div className="Member__items">
                         <h4>MEMBERSHIP BENEFITS:</h4>

                         <Container >

                         <Grid container>

                         <ul className='member__benefit__list'>

                                <li>Access to career and volunteer opportunities with United Nations Agencies, AU, ECOWAS, Arab leagues, European Union, World Bank Groups, Christian and Muslim NGOs, governmental and private establishments and International NGOs. </li>
                                
                                <li>Access to fellowship and grant opportunities to pursue postgraduate programs in peace and conflict management and development studies overseas through our partners.</li>

                                <li>Enjoy affordable platform to acquire newest ideas, techniques and toolkits through our short courses training and Mandatory Professional Education Programmes (MPEP) such as inductions, workshops, seminars, annual lectures and conferences.</li>

                                <li>Access to help and support for research works in peace building and conflict management as a member</li>
                              
                                <li>Walk your way to management position in your organization with our professional skills and membership certifications.</li>


                                <li>Enjoy international recognization as Global Peace Icon and connect with network of global professionals for greater opportunities in your career.</li>
                                
                                <li>Free publication of your research works and write ups on peace building and conflict resolution in our peace journal and on our website.</li>
                                
                                <li>Become a certified peace and conflict professional (CPCP) and advance your consultancy career and other professional careers. </li>
                               
                                <li>Opportunity to use the institute’s prefix after your name. e.g SIPCM, AfIPCM, AIPCM, MIPCM, SnrIPCM, FIPCM</li>
                                
                                <li>Opportunity to be appointed as the president of the institute or member of the governing council or the various committees of the institute.</li>
                                




                         </ul>
                         </Grid>
                         </Container>
                        

 
                    </div>



</section>
<section>
<div className="Member__items">
                         <h4>MEMBERSHIP UPGRADE</h4>

                         <Container >

                         <Grid container>

                         <p>As a member you must satisfy the following mandatory requirements for upgrade of your membership</p>

                         <ul className='member__benefit__list'>

                                
                            <li>Fulfill the statutory period between grades of membership which is 5 years from the year of induction.</li>
                            
                            <li>Meet all financial obligations to date</li>
                           
                            <li>Complete an Upgrading Request Form</li>
                            
                            <li>Send Curriculum Vitae showing detailed Employment history to date and key responsibilities of positions.</li>
                            
                            <li>Attach all relevant credentials/certificates </li>
                           
                            <li>List of Contributions to the Institute’s peace activities:
                            
                            <ol className='nested__list'>
                                <li>Membership of State Branch</li>
                                <li>Participation in Committee/Council work where applicable.</li>
                                <li>Attendance at the Institute Activities such as Annual Conference, AGM, Annual Peace Lecture, Pace Day celebration.</li>
                                <li>Participation in the Institute’s Mandatory Professional Education Programme (MPEP) and forward copies of certificate of participation to the Institute.</li>
                                <li>Participation in community peace promotion activities.</li>
                               

                            </ol>
                            
                            
                            </li>
                           



                         </ul>
                         </Grid>
                         </Container>
                        

 
                    </div>



</section>

                
            </div>
        <Footer/>
    </div>
    )
}

export default Member
