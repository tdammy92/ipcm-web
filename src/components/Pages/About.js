import React from 'react'
import { Container } from '@material-ui/core'
import Footer from '../partials/Footer/Footer'

function About() {
    return (

        <>
        <div  className='About__container'>
            <h3 className='about__title'>ABOUT IGPCM</h3>

        <div className="about__body">
        <Container>
            <p>The Institute of Global Peace and Conflict Management is established by the laws of the Federal Republic of Nigeria as an independent research, not-for profit, nonpartisan membership and global professional organization for the development, adaption and promotion of peace and conflict management best practices at organizational, grass-root, national, regional and global levels.</p>

            <p>IGPCM professionally raises, trains and primes individuals and corporate bodies, with practical skills training, in peace building, conflict analysis, prevention and intervention, mediation and negotiation, conflict management, resolution and transformation, arbitration, conciliation, reconciliation and reconstruction. </p>

            <p>
            IGPCM is a useful resource to its members, government officials, military and paramilitary, political leaders, civic/religious leaders, employees, lawyers, medical practitioners, engineers, journalists, educators, students, business executives and policy analysts and other interested persons to help them understand better the various conflicts confronting us at individual, national, institutional and community levels in order to chart a common course for peace.
            </p>

            <p>The institute also provides a professional network platform where peace-building practitioners, development professionals, conflict managers and policy strategists share experiences, collaborates and improve their professional knowledge and skills.  </p>

            <p>As a think-tank body, we conducts independent result-based research, plays effective third-party intervention role and provides solution-based policy suggestions and influences relevant bodies for adoption and implementation.</p>

            <p>The institute initiates and imparts creative and innovative ways of promoting, sustaining and maintaining peace in our communities, collaborates to bring acceptable solutions to conflicts and advance global best practices in peace building and conflict resolution.   </p>

            <p>We believe that, peace-building and conflict resolution skills are learnable and coachable. IGPCM as a global membership driven professional body therefore, trains, certifies and retains her members for continuous professional development, for maximum career fulfilment.</p>
            </Container>
            </div>
            
        </div>
        <Footer/>
    </>
    )
}

export default About
