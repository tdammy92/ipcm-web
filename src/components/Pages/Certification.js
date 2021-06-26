import React,{useState,forwardRef} from 'react'
import Footer from '../partials/Footer/Footer'
import { Container, Paper } from '@material-ui/core'
import { Button, TextField} from '@material-ui/core'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
// import {DatePicker,InlineDatePicker} from '@material-ui/pickers'


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';



import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


function Certification() {


    const [RegNo, setRegNo] = useState('')

    const [open, setOpen] = useState(false);

  

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);


      };

      const handleSubmit = (e)=>{
            e.preventDefault();
           
           
            handleClickOpen()
            
      }

   
   
    return (

        <div className='base__page'>
        <div  className='About__container'>
            <h3 className='page__title'>Certification</h3>

                <div className="about__body">

                <section>
                    <div>
                        <h4>Membership Verification</h4>

                        <Container>

                            <Paper elevation={3} style={{padding:'20px'}}>

                                <h4>Kindly Input REG Number to verify</h4>

                                <form onSubmit={(e)=>handleSubmit(e)} className='verify__form'>


                                <TextField
                                id="outlined-text-input"
                                label="Reg No:"
                                type="text"
                                style={{width:'200px', margin:'10px'}}
                                value={RegNo}
                                onChange={(e)=>{setRegNo(e.target.value)}}
                                variant="outlined"
                                placeholder='123GFGXX-IGPCM'
                        />

                  
                       



                              <TextField
                                id="outlined-helperText"
                                label="Select Year"
                                type="date"
                                views={["year"]}
                                style={{width:'200px', margin:'10px'}}
                                value=""
                                variant="outlined"
                               
                        /> 

{/* 
                         <DatePicker
                            views={["year"]}
                            label="Year only"
                            value=''
                            onChange={()=>{}}
                            animateYearScrolling
                            />  */}


                            {/* <>
                            <div className="picker">
                                <DatePicker
                                views={["year"]}
                                label="Year only"
                                value=''
                                onChange={()=>{}}
                                animateYearScrolling
                                />
                            </div>
                            </> */}

                        <Button variant='contained' 
                        disabled={!RegNo}
                        type='submit'
                        endIcon={<CheckBoxIcon/>}
                        color='primary'>Verify</Button>


                                </form>

       
                 <h5 style={{textAlign:'center'}}>Report Forgery to <a href="mailto:igpcminfo@gmail.com">igpcminfo@gmail.com</a></h5>




                            </Paper>



                        </Container>



                    </div>
                </section>


                    <section className='Fees__section'>

                    <div className="Section__title">
                        <h4>IGPCM MEMBERSHIP AND OTHER FEES:</h4>
                    </div>
                            <div className="Fees__container">


                            <TableContainer component={Paper}  style={{width:'350px', margin:'10px',padding:'10px'}}>
                                <span style={{color:'#01996D'}}>  

                                STUDENT MEMBERSHIP
                                </span> 
                                <Table >
                                    <TableHead>
                                    <TableRow  style={{backgroundColor:'#01996D', borderRadius:'10px'}}>
                                        <TableCell align='center'  component='th' style={{fontFamily:'Lato',color:'white',fontWeight:'600'}}>ITEM</TableCell>
                                        <TableCell align="center" component='th' style={{fontFamily:'Lato',color:'white',fontWeight:'600'}}>FEES(₦)</TableCell>
                                    </TableRow>
                                    </TableHead> 
                                    <TableBody>
                                    
                                        <TableRow>
                                        
                                                <TableCell align="center">Form</TableCell>
                                                <TableCell align="center">₦500</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Training Fee</TableCell>
                                                <TableCell align="center">₦6,500</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Certificate fee</TableCell>
                                                <TableCell align="center">₦5,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Membership Admission</TableCell>
                                                <TableCell align="center">₦1,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Annual Subscription</TableCell>
                                                <TableCell align="center">₦1,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Development levy</TableCell>
                                                <TableCell align="center">₦1,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center"
                                                style={{fontFamily:'Lato',fontWeight:'600'}}
                                                >TOTAL</TableCell>
                                                <TableCell align="center"
                                                 style={{fontFamily:'Lato',fontWeight:'600'}}
                                                >₦15,000</TableCell>
                                        </TableRow>
                                
                                    </TableBody>
                                </Table>
                        </TableContainer>

                            <TableContainer component={Paper}  style={{width:'350px', margin:'10px',padding:'10px'}}>
                                <span style={{color:'#01996D'}}>  

                                AFFILIATE MEMBERSHIP
                                </span> 
                                <Table >
                                    <TableHead>
                                    <TableRow  style={{backgroundColor:'#01996D', borderRadius:'10px'}}>
                                        <TableCell align='center'  component='th' style={{fontFamily:'Lato',color:'white',fontWeight:'600'}}>ITEM</TableCell>
                                        <TableCell align="center" component='th' style={{fontFamily:'Lato',color:'white',fontWeight:'600'}}>FEES(₦)</TableCell>
                                    </TableRow>
                                    </TableHead> 
                                    <TableBody>
                                    
                                        <TableRow>
                                        
                                                <TableCell align="center">Form</TableCell>
                                                <TableCell align="center">₦3,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Training Fee</TableCell>
                                                <TableCell align="center">₦10,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Induction fee</TableCell>
                                                <TableCell align="center">₦10,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Membership Admission</TableCell>
                                                <TableCell align="center">₦10,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Annual Subscription</TableCell>
                                                <TableCell align="center">₦3,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Development levy</TableCell>
                                                <TableCell align="center">₦4,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center"
                                                style={{fontFamily:'Lato',fontWeight:'600'}}
                                                >TOTAL</TableCell>
                                                <TableCell align="center"
                                                 style={{fontFamily:'Lato',fontWeight:'600'}}
                                                >₦40,000</TableCell>
                                        </TableRow>
                                
                                    </TableBody>
                                </Table>
                        </TableContainer>
                            <TableContainer component={Paper}  style={{width:'350px', margin:'10px',padding:'10px'}}>
                                <span style={{color:'#01996D'}}>  

                                ASSOCIATE MEMBER
                                </span> 
                                <Table >
                                    <TableHead>
                                    <TableRow  style={{backgroundColor:'#01996D', borderRadius:'10px'}}>
                                        <TableCell align='center'  component='th' style={{fontFamily:'Lato',color:'white',fontWeight:'600'}}>ITEM</TableCell>
                                        <TableCell align="center" component='th' style={{fontFamily:'Lato',color:'white',fontWeight:'600'}}>FEES(₦)</TableCell>
                                    </TableRow>
                                    </TableHead> 
                                    <TableBody>
                                    
                                        <TableRow>
                                        
                                                <TableCell align="center">Form</TableCell>
                                                <TableCell align="center">₦5,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Training Fee</TableCell>
                                                <TableCell align="center">₦15,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Membership addmission</TableCell>
                                                <TableCell align="center">₦20,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Induction fee</TableCell>
                                                <TableCell align="center">₦10,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Annual Subscription</TableCell>
                                                <TableCell align="center">₦5,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Development levy</TableCell>
                                                <TableCell align="center">₦5,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center"
                                                style={{fontFamily:'Lato',fontWeight:'600'}}
                                                >TOTAL</TableCell>
                                                <TableCell align="center"
                                                 style={{fontFamily:'Lato',fontWeight:'600'}}
                                                >₦60,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center"
                                                style={{fontFamily:'Lato',fontWeight:'600'}}
                                                >SERVING NYSC CORPS MEMBERS CONVERSION</TableCell>
                                                <TableCell align="center"
                                                 style={{fontFamily:'Lato',fontWeight:'600'}}
                                                ></TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                        <TableCell align="center">Form</TableCell>
                                        <TableCell align="center">₦1,000</TableCell>
                                </TableRow>
                                <TableRow>
                                
                                        <TableCell align="center">Training Fee</TableCell>
                                        <TableCell align="center">₦9,000</TableCell>
                                </TableRow>
                                <TableRow>
                                
                                        <TableCell align="center">Induction/certification fee</TableCell>
                                        <TableCell align="center">₦13,000</TableCell>
                                </TableRow>
                                <TableRow>
                                        
                                        <TableCell align="center"
                                        style={{fontFamily:'Lato',fontWeight:'600'}}
                                        >TOTAL</TableCell>
                                        <TableCell align="center"
                                         style={{fontFamily:'Lato',fontWeight:'600'}}
                                        >₦23,000</TableCell>
                                </TableRow>
                                
                                    </TableBody>
                                </Table>
                        </TableContainer>



                        <TableContainer component={Paper}  style={{width:'350px', margin:'10px',padding:'10px'}}>
                                <span style={{color:'#01996D'}}>  

                                FULL MEMBERSHIP
                                </span> 
                                <Table >
                                    <TableHead>
                                    <TableRow  style={{backgroundColor:'#01996D', borderRadius:'10px'}}>
                                        <TableCell align='center'  component='th' style={{fontFamily:'Lato',color:'white',fontWeight:'600'}}>ITEM</TableCell>
                                        <TableCell align="center" component='th' style={{fontFamily:'Lato',color:'white',fontWeight:'600'}}>FEES(₦)</TableCell>
                                    </TableRow>
                                    </TableHead> 
                                    <TableBody>
                                    
                                        <TableRow>
                                        
                                                <TableCell align="center">Form</TableCell>
                                                <TableCell align="center">₦5,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Training Fee</TableCell>
                                                <TableCell align="center">₦25,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Induction fee</TableCell>
                                                <TableCell align="center">₦20,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Membership Admission</TableCell>
                                                <TableCell align="center">₦20,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Annual Subscription</TableCell>
                                                <TableCell align="center">₦5,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Development levy</TableCell>
                                                <TableCell align="center">₦5,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center"
                                                style={{fontFamily:'Lato',fontWeight:'600'}}
                                                >TOTAL</TableCell>
                                                <TableCell align="center"
                                                 style={{fontFamily:'Lato',fontWeight:'600'}}
                                                >₦80,000</TableCell>
                                        </TableRow>
                                
                                    </TableBody>
                                </Table>
                        </TableContainer>
                        <TableContainer component={Paper}  style={{width:'350px', margin:'10px',padding:'10px'}}>
                                <span style={{color:'#01996D'}}>  

                                SENIOR MEMBERSHIP
                                </span> 
                                <Table >
                                    <TableHead>
                                    <TableRow  style={{backgroundColor:'#01996D', borderRadius:'10px'}}>
                                        <TableCell align='center'  component='th' style={{fontFamily:'Lato',color:'white',fontWeight:'600'}}>ITEM</TableCell>
                                        <TableCell align="center" component='th' style={{fontFamily:'Lato',color:'white',fontWeight:'600'}}>FEES(₦)</TableCell>
                                    </TableRow>
                                    </TableHead> 
                                    <TableBody>
                                    
                                        <TableRow>
                                        
                                                <TableCell align="center">Form</TableCell>
                                                <TableCell align="center">₦5,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Training Fee</TableCell>
                                                <TableCell align="center">₦30,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Induction fee</TableCell>
                                                <TableCell align="center">₦23,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Membership Admission levy</TableCell>
                                                <TableCell align="center">₦25,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Annual Subscription</TableCell>
                                                <TableCell align="center">₦7,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Development levy</TableCell>
                                                <TableCell align="center">₦10,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center"
                                                style={{fontFamily:'Lato',fontWeight:'600'}}
                                                >TOTAL</TableCell>
                                                <TableCell align="center"
                                                 style={{fontFamily:'Lato',fontWeight:'600'}}
                                                >₦100,000</TableCell>
                                        </TableRow>
                                
                                    </TableBody>
                                </Table>
                        </TableContainer>
                        <TableContainer component={Paper}  style={{width:'350px', margin:'10px',padding:'10px'}}>
                                <span style={{color:'#01996D'}}>  

                                FELLOW MEMBERSHIP
                                </span> 
                                <Table >
                                    <TableHead>
                                    <TableRow  style={{backgroundColor:'#01996D', borderRadius:'10px'}}>
                                        <TableCell align='center'  component='th' style={{fontFamily:'Lato',color:'white',fontWeight:'600'}}>ITEM</TableCell>
                                        <TableCell align="center" component='th' style={{fontFamily:'Lato',color:'white',fontWeight:'600'}}>FEES(₦)</TableCell>
                                    </TableRow>
                                    </TableHead> 
                                    <TableBody>
                                    
                                        <TableRow>
                                        
                                                <TableCell align="center">Form</TableCell>
                                                <TableCell align="center">₦5,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Training Fee</TableCell>
                                                <TableCell align="center">₦50,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Induction fee</TableCell>
                                                <TableCell align="center">₦35,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Membership Admission levy</TableCell>
                                                <TableCell align="center">₦40,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Annual Subscription</TableCell>
                                                <TableCell align="center">₦10,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Development levy</TableCell>
                                                <TableCell align="center">₦10,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center"
                                                style={{fontFamily:'Lato',fontWeight:'600'}}
                                                >TOTAL</TableCell>
                                                <TableCell align="center"
                                                 style={{fontFamily:'Lato',fontWeight:'600'}}
                                                >₦150,000</TableCell>
                                        </TableRow>
                                
                                    </TableBody>
                                </Table>
                        </TableContainer>
                        <TableContainer component={Paper}  style={{width:'350px', margin:'10px',padding:'10px'}}>
                                <span style={{color:'#01996D'}}>  

                                OTHER FEES
                                </span> 
                                <Table >
                                    <TableHead>
                                    <TableRow  style={{backgroundColor:'#01996D', borderRadius:'10px'}}>
                                        <TableCell align='center'  component='th' style={{fontFamily:'Lato',color:'white',fontWeight:'600'}}>ITEM</TableCell>
                                        <TableCell align="center" component='th' style={{fontFamily:'Lato',color:'white',fontWeight:'600'}}>FEES(₦)</TableCell>
                                    </TableRow>
                                    </TableHead> 
                                    <TableBody>
                                    
                                        <TableRow>
                                        
                                                <TableCell align="center">Corporate Membership</TableCell>
                                                <TableCell align="center">₦190,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Membership ID CARD (plastic)</TableCell>
                                                <TableCell align="center">₦1,500</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Sticker</TableCell>
                                                <TableCell align="center">₦300</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Global Peace Journal</TableCell>
                                                <TableCell align="center">₦2,500</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Face Cap</TableCell>
                                                <TableCell align="center">₦1,500</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">IGPCM Polo</TableCell>
                                                <TableCell align="center">₦3,000</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">IGPCM customized Laptop Bag </TableCell>
                                                <TableCell align="center">₦3,500</TableCell>
                                        </TableRow>
                                        <TableRow>
                                        
                                                <TableCell align="center">Lapel Pin </TableCell>
                                                <TableCell align="center">₦1,000</TableCell>
                                        </TableRow>
                                        {/* <TableRow>
                                        
                                                <TableCell align="center"
                                                style={{fontFamily:'Lato',fontWeight:'600'}}
                                                >TOTAL</TableCell>
                                                <TableCell align="center"
                                                 style={{fontFamily:'Lato',fontWeight:'600'}}
                                                >₦150,000</TableCell>
                                        </TableRow> */}
                                
                                    </TableBody>
                                </Table>
                        </TableContainer>
                           





                            </div>
                    </section>
                </div>


                
                
                
                
                
                <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >


            <DialogTitle id="alert-dialog-slide-title">{"IGPCM Portal"}</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
            Dear  User kindly hold on, result will be displayed in a bit...
            <hr/>
            Loading.....
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            {/* <Button onClick={handleClose} color="primary">
                Disagree
            </Button> */}
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
      </Dialog>
            
        </div>
        <Footer/>
    </div>
    )
}

export default Certification
