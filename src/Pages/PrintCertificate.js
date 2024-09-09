import React, { useState } from 'react'
import certificate from "../../src/assets/images/IGPCM_Certificate.jpeg";
import { Box, Button, makeStyles, Paper, TextField, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        marginTop: theme.spacing(3),
        margin: theme.spacing(2),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
    root2: {
      width: "100%",
    },
  
    //   form: {
    //     [theme.breakpoints.down("sm")]: {
    //       // backgroundColor:'red'
    //     },
  
    //     maxWidth: 500,
    //   },
    form: {
      [theme.breakpoints.down("sm")]: {
          // backgroundColor:'red'
          minWidth:750
        },
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      width:'100%',
  
      // backgroundColor: "red",
    },
  
    formItem: {
      maxWidth: 600,
      minWidth: 500,
      marginTop: "15px",
      marginBottom: "15px",
      justifySelf:'center'
      // backgroundColor:'blue'
    },
  
  
    tableContainer: {
      maxHeight: 550,
    },
  
    headerCard: {
      display: "flex",
      width: "auto",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      maxHeightheight: "150px",
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(3),
      // padding: theme.spacing(2),
      // flexWrap: "wrap",
  
      // backgroundColor: "yellow",
      // border: "1px solid  red",
    },
    cards: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "90px",
      width: "45%",
      // minWidth: "80px",
      textDecoration: "none",
      borderRadius: 2,
      margin: "8px",
  
      // border: "1px solid  blue",
    },
  
    cardsInfoIcon: {
      fontSize: "70px",
      color: theme.palette.primary.main,
      cursor: "pointer",
      marginLeft: "20px",
    },
    cardsInfoIcon2: {
      fontSize: "40px",
      color: theme.palette.primary.main,
      cursor: "pointer",
      marginLeft: "10px",
    },
  
  
  
    dialogueContainer: {
      // width: "100%",
      // height: "100%",
      [theme.breakpoints.down("sm")]: {
          // backgroundColor:'red'
          minWidth:750
        },
  
    },
    button: {
      margin: theme.spacing(1),
    },
  
    btnContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 50,
    },
  
    previewBox: {
      width: "100%",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      // alignItems:'center'
    },
    studentName: {
      position: "absolute",
      top: 300,
      left: "20%",
      right: "20%",
      // backgroundColor:'red'
    },
    studentCourse: {
      position: "absolute",
      top: 412,
      left: "20%",
      right: "20%",
      // backgroundColor:'yellow'
    },
    dateTaken: {
      position: "absolute",
      top: 475,
      left: "20%",
      right: "20%",
      // backgroundColor:'orange'
    },
  }));
  


const PrintCertificate = ({studentDetail}) => {

    const classes = useStyles();


  return (
  <>
        <Box className={classes.btnContainer}>
          <Button 
        //   onClick={handleClose}
           variant="outlined" color="primary">
            Cancle
          </Button>
          <Button
            // disabled={isUploadingExams}
            // onClick={handleUpload}
            color="primary"
            variant="contained"
            autoFocus
          >
            Generate
          </Button>
        </Box>
        <Box className={classes.previewBox}>
          <Paper
            mt={10}
            elevation={3}
            style={{
              // padding: "20px",
              marginTop: 25,
              height: 600,
              width: 800,
            }}
          >
            <img src={certificate} height="100%" width="100%" />
          </Paper>
          <Typography
            variant="h4"
            align="center"
            className={classes.studentName}
          >
            {studentDetail?.studentName}
          </Typography>
          <Typography
            align="center"
            variant="h6"
            className={classes.studentCourse}
          >
            {studentDetail?.courseTitle}
          </Typography>
          <Typography align="center" variant="h6" className={classes.dateTaken}>
            {studentDetail?.dateGenerated}
          </Typography>
        </Box>
  </>
  )
}

export default PrintCertificate