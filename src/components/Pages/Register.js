import React,{useState, forwardRef} from 'react'

import { Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import TextField from '@material-ui/core/TextField';
import Footer from '../partials/Footer/Footer'
import InputLabel from '@material-ui/core/InputLabel';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

// const useStyles = makeStyles((theme) => ({
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },

//     inputStyle:{
//         width:300,
//     }
   
//   }));



function Register() {

    const [FirstName,setFirstName] = useState('');
    const [email,setEmail] = useState('');

    const [open, setOpen] = useState(false);

    // const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);


      };

     

    //   useEffect(() => {
    //     setTimeout(() => {
    //         setOpen(false);
    //     }, 7000);
        
    //   }, [open])


    return (

        <div className='base__page'>
        <div  className='About__container'>
            <h3 className='page__title'>Registration Portal</h3>

             <div className="about__body">

            <div className="form__container">

                    <form action=""  className='regForm'>


                        <div className="form__list">
                  
                       
                                <TextField
                                id="outlined-text-input"
                                label="First Name"
                                type="text"
                                style={{width:'300px', margin:'10px'}}
                                value={FirstName}
                                onChange={(e)=>{setFirstName(e.target.value)}}
                                variant="outlined"
                                placeholder='Jane'
                        />

                  
                       



                                <TextField
                                id="outlined-helperText"
                                label="Last Name"
                                type="text"
                                style={{width:'300px', margin:'10px'}}
                                value=""
                                variant="outlined"
                                placeholder='Doe'
                        />

                       



                                <TextField
                                id="outlined-helperText"
                                label="Email"
                                type="email"
                                style={{width:'300px', margin:'10px'}}
                                value={email}
                                onChange={(e)=>{setEmail(e.target.value)}}
                                variant="outlined"
                                placeholder='User@you.com'
                        />

                           



                                <TextField
                                id="outlined-helperText"
                                label="Mobile No:"
                                type="text"
                                style={{width:'300px', margin:'10px'}}
                                value=""
                                variant="outlined"
                                placeholder='+234-080000IGPCM'
                        />

                          

                            <FormControl variant="outlined"
                             style={{width:'300px', margin:'10px'}} >
                            <InputLabel htmlFor="outlined-age-native-simple">Membership</InputLabel>
                            
                            <Select
                            native
                            value=''
                            onChange={()=>{}}
                            label="Membership"
                            autoWidth='false'
                          
                        
                            >
                            <option aria-label="None" value="" />
                         
                            <option value='Student Member'>Student Member</option>
                            <option value='Affiliate Member'>Affiliate Member</option>
                            <option value='Associate Member'>Associate Member</option>
                            <option value='Full Member'>Full Member</option>
                            <option value='Senior Member'>Senior Member</option>
                            <option value='Fellowship Member'>Fellowship Member</option>
                           
                            </Select>
                        </FormControl>

                        <TextField
                        id="outlined-multiline-static"
                        label="Address"
                        style={{width:'300px', margin:'10px'}} 
                        multiline
                        rows={4}
                       placeholder='Plot 2, Obafemi Awolowo way Lagos'
                        variant="outlined"
                        />
                     

                         

</div>
                          

                      
                          


                    
                    
                    <div className="form__Btn">

                        <Button variant='contained' 
                        disabled={!FirstName}
                        onClick={handleClickOpen}
                        endIcon={<ArrowForwardIosIcon/>}
                        color='primary'>Register</Button>
                        
                    </div>

                    </form>
            </div>


        
        
        
        <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      
      >
            <DialogTitle id="alert-dialog-slide-title">{"IGPCM  Portal"}</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
            Dear {FirstName} you will be contacted when your application has been duly reviewed.
            <hr/>
            see you soon..
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
            
        </div>
        <Footer/>
    </div>
    )
}

export default Register
