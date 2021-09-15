import React from 'react'

import EditLocationIcon from '@material-ui/icons/EditLocation';
import { Button, Paper ,Container} from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import { makeStyles } from '@material-ui/core/styles';
import Footer from '../partials/Footer/Footer'
import Corper1 from '../../assets/images/corper1.jpg'
import Corper2 from '../../assets/images/Corper2.jpg'
import Corper3 from '../../assets/images/Corper3.png'

import PdfForm from '../../assets/document/IGPCM__REGForm.pdf'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import { Container } from '@material-ui/core'



const useStyles = makeStyles((theme) => ({
    // formControl: {
    //   margin: theme.spacing(1),
    //   minWidth: 120,
    // },

    // inputStyle:{
    //     width:300,
    // }

    paper:{
        padding:10,
        margin:20
    }
   
  }));


function Nysc() {

    const classes = useStyles();
    return (
        <div className='base__page'>
        <div  className='About__container'>
           

        <div className="about__body">

                <h4 className='page__title'>NYSC SCHEME</h4>

                <div className="nysc__container">

                    <div className="nysc__image">
                   

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

                <Container>

<div className="contact__item">
      
      <EditLocationIcon fontSize="large" color='primary'/>
      <h3 >Steps to Register Offline</h3>

   </div>

   <Paper className={classes.paper}>Click here to 
                       
                       <a className='Adownload' href={PdfForm}  download='IGPCM__REGForm.pdf'>
                       
                           <Button  color='primary' endIcon={<CloudDownloadIcon/>}>Download</Button>
                       </a> 
                  
                   form  
                   </Paper>

   <ol  className='offline__reg__list'>

   <li> Obtain a FORM from our State Coordinator in your state of service during orientation camp, during CDS meetings, visit the office or call the contact of the coordinator for this purpose.</li>
   <li>Pay your registration fee directly to our Coordinator in your state of service</li>
   <li> Attend Training and sit for your professional examination</li>
   <li>Pay your induction fee directly to the INSTITUTE ACCOUNT detail below after obtaining pass mark: 
   
   <ul>

   <li>Acct Name:<strong> Institute of Global Peace and Conflict Management</strong></li>
                            <li>Acct Number:<strong> 0645754697</strong></li>
                            <li>Bank:<strong> Guaranty Trust Bank Plc</strong></li>
   </ul></li>
   <li>Get inducted as an Associate Member of the Institute during induction ceremony.</li>






   </ol>


</Container>

              
            </div>
            
        </div>
        <Footer/>
    </div>
    )
}

export default Nysc




