import React from 'react'
import Footer from '../partials/Footer/Footer'
import { Container , Paper} from '@material-ui/core'

import Grid from '@material-ui/core/Grid';

import {ScreenSize} from '../../Config'
import {useMediaQuery} from 'react-responsive'

import EmailIcon from '@material-ui/icons/Email';
import PublicIcon from '@material-ui/icons/Public';
import PhoneForwardedIcon from '@material-ui/icons/PhoneForwarded';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';




const MobileContact = ()=>{
    
   
    return (<div className="MobileContact__List">
                    <div className="contact__item">
                    <PhoneForwardedIcon  color='primary'/>
                    <h4>+2347033458730</h4>

                    </div>
                    <div className="contact__item">
                    <PhoneForwardedIcon  color='primary'/>
                    <h4> +2348128932090</h4>

                    </div>


                    <div className="contact__item">
                    <EmailIcon  color='primary'/>
                    <h4>igpcminfo@gmail.com</h4>

                    </div>

                    <div className="contact__item">
                    <PublicIcon  color='primary'/>
                    <h4>igpcm.org.ng</h4>

                    </div>
                    
        
    </div>)
    
}


const MobileTable =()=>{
        return(

                <div className='contact__table__container'>
                <div className="contact__item">
                  
                  <CallIcon fontSize="large" color='primary'/>
                  <h4 >STATE COORDINATORS CONTACT:</h4>

               </div>
               <TableContainer component={Paper}  style={{width:'100%', margin:'2px',padding:'2px'}}>
                        {/* <span style={{color:'#01996D'}}>  

                        STUDENT MEMBERSHIP
                        </span>  */}
                        <Table >
                            <TableHead>
                            <TableRow  style={{backgroundColor:'#01996D', borderRadius:'10px'}}>
                                <TableCell align='center'  component='th' style={{fontFamily:'Lato',color:'white',fontWeight:'600'}}>STATE</TableCell>
                                <TableCell align="center" component='th' style={{fontFamily:'Lato',color:'white',fontWeight:'600'}}>NAME</TableCell>
                                <TableCell align="center" component='th' style={{fontFamily:'Lato',color:'white',fontWeight:'600'}}>CONTACT</TableCell>
                            </TableRow>
                            </TableHead> 
                            <TableBody>
                            
                                <TableRow>
                                
                                        <TableCell align="center">Abuja 	</TableCell>
                                        <TableCell align="center">Ms. Asanga Ifreke Precious</TableCell>
                                        <TableCell align="center">08092693020</TableCell>
                                </TableRow>
                                <TableRow>
                                
                                        <TableCell align="center">Bauchi State	</TableCell>
                                        <TableCell align="center">Mr. Ohaju Stanley Ugochukwu</TableCell>
                                        <TableCell align="center">08166467814, 08134995959</TableCell>
                                </TableRow>
                                <TableRow>
                                
                                        <TableCell align="center">Bayelsa State	</TableCell>
                                        <TableCell align="center">Ms. Micheal Precious Onyenyechi</TableCell>
                                        <TableCell align="center">08145770061, 08184439402</TableCell>
                                </TableRow>
                                <TableRow>
                                
                                        <TableCell align="center">Benue State	</TableCell>
                                        <TableCell align="center">Ms. Ene Divine Inalegwu</TableCell>
                                        <TableCell align="center">08110196680, 09076283060</TableCell>
                                </TableRow>
                                <TableRow>
                                
                                        <TableCell align="center">Edo State	</TableCell>
                                        <TableCell align="center">Mr. Godswill Osagie E.</TableCell>
                                        <TableCell align="center">08075020854</TableCell>
                                </TableRow>
                                <TableRow>
                                
                                        <TableCell align="center">Gombe	</TableCell>
                                        <TableCell align="center">Mr. Nathaniel Richard Bono</TableCell>
                                        <TableCell align="center">08149370633</TableCell>
                                </TableRow>
                                <TableRow>
                                
                                        <TableCell align="center">Kano State	</TableCell>
                                        <TableCell align="center">Ms. Adebayo Christiana Tolulope</TableCell>
                                        <TableCell align="center">08163234027</TableCell>
                                </TableRow>
                                <TableRow>
                                
                                        <TableCell align="center">Kaduna State	</TableCell>
                                        <TableCell align="center">Ms. Ezenwe Chinaza Chinelo</TableCell>
                                        <TableCell align="center">08162656220, 08136161592</TableCell>
                                </TableRow>
                                <TableRow>
                                
                                        <TableCell align="center">Nasarawa State	</TableCell>
                                        <TableCell align="center">Mr. Victor Kingsley Umbugadu</TableCell>
                                        <TableCell align="center">08098312681</TableCell>
                                </TableRow>
                                <TableRow>
                                
                                        <TableCell align="center">Niger State	</TableCell>
                                        <TableCell align="center">Ms. Michael Janet Ihotu</TableCell>
                                        <TableCell align="center">08141569400</TableCell>
                                </TableRow>
                                <TableRow>
                                
                                        <TableCell align="center">Ogun State	</TableCell>
                                        <TableCell align="center">Mr. Animasaun Lukmon Abiola</TableCell>
                                        <TableCell align="center">07038877922</TableCell>
                                </TableRow>
                                <TableRow>
                                
                                        <TableCell align="center">Plateau Sate	</TableCell>
                                        <TableCell align="center">Mr Puttu Lot Musa</TableCell>
                                        <TableCell align="center">08056796881, 09020638912</TableCell>
                                </TableRow>
                                <TableRow>
                                
                                        <TableCell align="center">Taraba State</TableCell>
                                        <TableCell align="center">Mr. Emmanuel Shawulu</TableCell>
                                        <TableCell align="center">09037566599, 08071463057</TableCell>
                                </TableRow>
                                <TableRow>
                                
                                        <TableCell align="center">Sokoto State</TableCell>
                                        <TableCell align="center">Mr. Ajijila Gideon Victor</TableCell>
                                        <TableCell align="center">08130301659</TableCell>
                                </TableRow>
                                <TableRow>
                                
                                        <TableCell align="center"> Rivers State	</TableCell>
                                        <TableCell align="center">XXXXXXXXX</TableCell>
                                        <TableCell align="center">0900XXXXX</TableCell>
                                </TableRow>
                               
                            </TableBody>
                        </Table>
                </TableContainer>


                






                </div>
        )
}





function Contact() {

    const isMobile = useMediaQuery({maxWidth:ScreenSize.mobile})



    return (
        <div className='base__page'>
        <div  className='About__container'>
            <h3 className='page__title'>OUR CONTACT</h3>

            <div className="about__body">


                    <Container>


                {isMobile &&  <MobileContact/> }
                
               
                
                 {!isMobile &&  <div className="contact__List">
                        <div className="contact__item">
                           <PhoneForwardedIcon  color='primary'/>
                           <h4>+2347033458730, +2348128932090</h4>

                        </div>


                        <div className="contact__item">
                           <EmailIcon  color='primary'/>
                           <h4>igpcminfo@gmail.com</h4>

                        </div>

                        <div className="contact__item">
                           <PublicIcon  color='primary'/>
                           <h4>igpcm.org.ng</h4>

                        </div>
                        
                        
                     



                    </div>
                    }

                    <hr className='Hr__style'/>

                    <div className="address__container">
                        
                         <div className="contact__item">
                          
                           <HomeIcon fontSize="large" color='primary'/>
                           <h3 >OFFICE ADDRESS</h3>

                        </div>

                        <Grid container spacing={4} className="address__List">

                            <Grid item xs={12}  md={6} className="address__items">

                                <div className='address__heading'>   
                                    <LocationOnIcon color='primary'/>
                                    <h4>JIGAWA OFFICE</h4>
                                </div>
                          
                                <p  className='address__body'>Baba Chai-chai Plaza, Abdullahi Maikano Road, Dutse Jigawa State.
                               
                                </p>
                                <p className='address__body'>
                                +2347033458730, +2348128932090 igpcminfo@gmail.com
                                    igpcm.org.ng
                                    </p>
                            </Grid>

                            <Grid item xs={12}  md={6} className="address__items">
                            
                                <div className='address__heading'>   
                                    <LocationOnIcon color='primary'/>
                                    <h4>KATSINA STATE OFFICE</h4>
                                </div>
                                <p className='address__body'>Mangal Plaza, Yahaya Madaki Way, Kofar Kaura, Katsina State

                                </p>
                                <p className='address__body'>
                                +2347038286393, +2348171203116
                                    igpcmkatsina@gmail.com
                                </p>
                            </Grid>






                        </Grid>

                        <hr  className='Hr__style'/>

              
                        {!isMobile && 
                        
                                <div className='contact__table__container'>
                        <div className="contact__item">
                          
                          <CallIcon fontSize="large" color='primary'/>
                          <h4 >STATE COORDINATORS CONTACT:</h4>

                       </div>
                       <TableContainer component={Paper}  style={{width:'100%', margin:'5px',padding:'5px'}}>
                                {/* <span style={{color:'#01996D'}}>  

                                STUDENT MEMBERSHIP
                                </span>  */}
                                <Table >
                                    <TableHead>
                                    <TableRow  style={{backgroundColor:'#01996D', borderRadius:'10px'}}>
                                        <TableCell align='center'  component='th' style={{fontFamily:'Lato',color:'white',fontWeight:'600'}}>STATE</TableCell>
                                        <TableCell align="center" component='th' style={{fontFamily:'Lato',color:'white',fontWeight:'600'}}>NAME</TableCell>
                                        <TableCell align="center" component='th' style={{fontFamily:'Lato',color:'white',fontWeight:'600'}}>CONTACT</TableCell>
                                    </TableRow>
                                    </TableHead> 
                                    <TableBody>
                                    
                                        <TableRow>
                                        
                                                <TableCell align="center">Abuja 	</TableCell>
                                                <TableCell align="center">Ms. Asanga Ifreke Precious</TableCell>
                                                <TableCell align="center">08092693020</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Bauchi State	</TableCell>
                                                <TableCell align="center">Mr. Ohaju Stanley Ugochukwu</TableCell>
                                                <TableCell align="center">08166467814, 08134995959</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Bayelsa State	</TableCell>
                                                <TableCell align="center">Ms. Micheal Precious Onyenyechi</TableCell>
                                                <TableCell align="center">08145770061, 08184439402</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Benue State	</TableCell>
                                                <TableCell align="center">Ms. Ene Divine Inalegwu</TableCell>
                                                <TableCell align="center">08110196680, 09076283060</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Edo State	</TableCell>
                                                <TableCell align="center">Mr. Godswill Osagie E.</TableCell>
                                                <TableCell align="center">08075020854</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Gombe	</TableCell>
                                                <TableCell align="center">Mr. Nathaniel Richard Bono</TableCell>
                                                <TableCell align="center">08149370633</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Kano State	</TableCell>
                                                <TableCell align="center">Ms. Adebayo Christiana Tolulope</TableCell>
                                                <TableCell align="center">08163234027</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Kaduna State	</TableCell>
                                                <TableCell align="center">Ms. Ezenwe Chinaza Chinelo</TableCell>
                                                <TableCell align="center">08162656220, 08136161592</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Nasarawa State	</TableCell>
                                                <TableCell align="center">Mr. Victor Kingsley Umbugadu</TableCell>
                                                <TableCell align="center">08098312681</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Niger State	</TableCell>
                                                <TableCell align="center">Ms. Michael Janet Ihotu</TableCell>
                                                <TableCell align="center">08141569400</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Ogun State	</TableCell>
                                                <TableCell align="center">Mr. Animasaun Lukmon Abiola</TableCell>
                                                <TableCell align="center">07038877922</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Plateau Sate	</TableCell>
                                                <TableCell align="center">Mr Puttu Lot Musa</TableCell>
                                                <TableCell align="center">08056796881, 09020638912</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Taraba State</TableCell>
                                                <TableCell align="center">Mr. Emmanuel Shawulu</TableCell>
                                                <TableCell align="center">09037566599, 08071463057</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Sokoto State</TableCell>
                                                <TableCell align="center">Mr. Ajijila Gideon Victor</TableCell>
                                                <TableCell align="center">08130301659</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center"> Rivers State	</TableCell>
                                                <TableCell align="center">XXXXXXXXX</TableCell>
                                                <TableCell align="center">0900XXXXX</TableCell>
                                        </TableRow>
                                       
                                    </TableBody>
                                </Table>
                        </TableContainer>


                        






                        </div>
                        
                        
                        }


                         

                       
               

                    </div>




                        
                    </Container>


                    {isMobile && <MobileTable/>}
            

           
            </div>
            
        </div>
        <Footer/>
    </div>
    )
}

export default Contact
