import React, {  useRef } from "react";
import { 
  // Redirect,
   useParams, useHistory } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import PrintIcon from "@material-ui/icons/Print";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { FaUserCircle } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";


import PrintForm from "../printForm";
// import Pdf from "react-to-pdf";
import { useStudent } from "../../Services/queries/student-query";
import { userAvater } from "../../constants";
import { useDeleteStudent } from "../../Services/mutations/student-mutation";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 30,
  },
  divider: {
    backgroundColor: "#01996D",
  },
  gridContainer: {
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
  },
  subHeading: {
    textTransform: "uppercase",
  },

  passport: {
    borderRadius: 4,
    height: 180,
    width: 200,
    objectFit: "cover",
  },
  valueColum: {
    marginTop: 7,
  },
  title: {
    marginRight: 5,
  },
  value: {
    fontWeight: 500,
  },
});

function Student() {
  const { id } = useParams();

  const history = useHistory();

  const classes = useStyles();


  const {data:studentDetails,isLoading:isLoadingStudent} = useStudent({id,enabled:!!id});
  const {mutateAsync,isLoading:isDeleteing}  = useDeleteStudent()





  //function to delete student
const DeleteStudent  = async() =>{


    const documentIds = studentDetails?.documents?.map((doc) => doc?.file?.public_id);

    const mongoStudentId = studentDetails?._id;
    const cloudinaryPublicIds = [
      ...(studentDetails?.passport?.public_id ? [studentDetails?.passport?.public_id] : []),
      ...(documentIds.length > 0 ? [...documentIds] : []),
    ];

    const payload = {
      mongoStudentId,
      cloudinaryPublicIds,
    };

    try {
      const res = await mutateAsync(id,payload)


      if (res.status) {
        history.replace("/students");
        
      }

    } catch (error) {
      console.log(error);
    } 
  }

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    copyStyles: true,
  });



  // console.log(JSON.stringify(studentDetails, null, 2));

  return (
    <>
 {!isLoadingStudent &&   <div>
      <Container maxWidth="md" mx="auto">
        <Card className={classes.root} variant="outlined" elevation={3}>
          <CardContent ref={componentRef}>
            <Box style={{ marginBottom: 10 }}>
              <Typography color="primary" align="center" variant="subtitle1">
                INSTITUTE OF GLOBAL PEACE AND CONFLICT MANAGEMENT
              </Typography>
              <Typography align="center">
                Head office:Suite 311 a&b, 2nd floor, Beta foundation plaza
                No:359, Ebitu Ukiwe str, Jabi, abuja
              </Typography>
              <Typography align="center">
                igpcminfo@gmail.com || +2347033458730 || RC:1787595
              </Typography>
            </Box>
            <Divider className={classes.divider} />
            <Typography
              variant="subtitle1"
              align="center"
              color="primary"
              className={classes.subHeading}
            >
              Basic details
            </Typography>
            <Grid container className={classes.gridContainer}>
              <Grid item sm={12} md={6}>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.valueColum}
                >
                  <Typography variant="subtitle1" className={classes.title}>
                    Title:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.value}
                  >
                    {studentDetails.title}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.valueColum}
                >
                  <Typography variant="subtitle1" className={classes.title}>
                    Name:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.value}
                  >
                    {studentDetails.surname} {studentDetails.firstName} {studentDetails.middleName}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.valueColum}
                >
                  <Typography variant="subtitle1" className={classes.title}>
                    Phone:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.value}
                  >
                    {studentDetails?.phoneNumber}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.valueColum}
                >
                  <Typography variant="subtitle1" className={classes.title}>
                    Email:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.value}
                  >
                    {studentDetails?.email}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.valueColum}
                >
                  <Typography variant="subtitle1" className={classes.title}>
                    Date of Birth:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.value}
                  >
                    {new Date(studentDetails?.dob).toLocaleDateString()}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.valueColum}
                >
                  <Typography variant="subtitle1" className={classes.title}>
                    Gender:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.value}
                  >
                    {studentDetails?.gender}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.valueColum}
                >
                  <Typography variant="subtitle1" className={classes.title}>
                    Nationality:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.value}
                  >
                    {studentDetails?.country}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.valueColum}
                >
                  <Typography variant="subtitle1" className={classes.title}>
                    State/Province:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.value}
                  >
                    {studentDetails?.state}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.valueColum}
                >
                  <Typography variant="subtitle1" className={classes.title}>
                    Qualification:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.value}
                  >
                    {studentDetails?.eduQualification}
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                sm={12}
                md={6}
                alignItems="center"
                justifyContent="center"
              >
                <Box roundeds style={{ maxWidth: 150 }}>
                  {studentDetails?.passport ? (
                    <img
                      alt={`${studentDetails.firstName} ${studentDetails.surname}`}
                      src={studentDetails?.passport?.url ?? userAvater}
                      className={classes.passport}
                    />
                  ) : (
                    <FaUserCircle size={180} color="#01996D" />
                  )}
                </Box>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Typography
              className={classes.subHeading}
              variant="subtitle1"
              align="center"
              color="primary"
            >
              Employment details
            </Typography>
            <Grid container className={classes.gridContainer}>
              <Grid item sm={12} md={6}>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.valueColum}
                >
                  <Typography variant="subtitle1" className={classes.title}>
                    Organisation:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.value}
                  >
                    {studentDetails?.currentEmploymet?.organization}
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={12} md={6}>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.valueColum}
                >
                  <Typography variant="subtitle1" className={classes.title}>
                    Role/Postion:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.value}
                  >
                    {" "}
                    {studentDetails?.currentEmploymet?.position}
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={12} md={6}>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.valueColum}
                >
                  <Typography variant="subtitle1" className={classes.title}>
                    Years of Experience:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.value}
                  >
                    {studentDetails?.currentEmploymet?.yearsExperience}
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={12} md={6}>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.valueColum}
                >
                  <Typography variant="subtitle1" className={classes.title}>
                    Date Joined:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.value}
                  >
                    {new Date(
                      studentDetails?.currentEmploymet?.startDate
                    ).toLocaleDateString()}
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={12} md={6}>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.valueColum}
                >
                  <Typography variant="subtitle1" className={classes.title}>
                    Address:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.value}
                  >
                    {studentDetails?.currentEmploymet?.location}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <Typography
              className={classes.subHeading}
              variant="subtitle1"
              align="center"
              color="primary"
            >
              Course Application Details
            </Typography>
            <Grid container className={classes.gridContainer}>
              <Grid item sm={12} md={6}>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.valueColum}
                >
                  <Typography variant="subtitle1" className={classes.title}>
                    Application Fee:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.value}
                  >
                    {studentDetails?.applicationFee}
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={12} md={6}>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.valueColum}
                >
                  <Typography variant="subtitle1" className={classes.title}>
                    Payment Method:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.value}
                  >
                    {" "}
                    Payment Method: {studentDetails?.paymentMethods}
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={12} md={6}>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.valueColum}
                >
                  <Typography variant="subtitle1" className={classes.title}>
                    MemberShip Cader:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.value}
                  >
                    {studentDetails?.membershipCadre}
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={12} md={6}>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.valueColum}
                >
                  <Typography variant="subtitle1" className={classes.title}>
                    Membership Route:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.value}
                  >
                    {studentDetails?.membershipRoute}
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={12} md={6}>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.valueColum}
                >
                  <Typography variant="subtitle1" className={classes.title}>
                    PGD Course:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.value}
                  >
                    {studentDetails?.pgdCourses}
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={12} md={6}>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.valueColum}
                >
                  <Typography variant="subtitle1" className={classes.title}>
                    Membership Type:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.value}
                  >
                    {studentDetails?.membershipType?.join()}
                  </Typography>
                </Box>
              </Grid>
              <Grid item sm={12} md={6}>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.valueColum}
                >
                  <Typography variant="subtitle1" className={classes.title}>
                    Academic Programs:
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    className={classes.value}
                  >
                    {studentDetails?.academicPrograms?.join()}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions
            gutterBottom
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 20,
            }}
          >
            <Button
              onClick={handlePrint}
              variant="contained"
              color="primary"
              size="small"
              className={classes.button}
              startIcon={<PrintIcon />}
            >
              Print
            </Button>

            <PDFDownloadLink
              document={<PrintForm studentDetails={studentDetails} />}
              fileName={`IGPCM_FORM_REPRINT_${studentDetails?.surname}`}
            >
              {({ loading }) =>
                loading ? (
                  <Button disabled={true} color="primary">
                    Getting Pdf
                  </Button>
                ) : (
                  <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    className={classes.button}
                    startIcon={<PictureAsPdfIcon />}
                  >
                    Pdf
                  </Button>
                )
              }
            </PDFDownloadLink>

            {/* <Pdf
            targetRef={componentRef}
            filename={`${Details.surname}-${Details.firstName}`}
          >
            {({ toPdf }) => (
              <Button
                variant="outlined"
                size="small"
                color="primary"
                onClick={toPdf}
                className={classes.button}
                startIcon={<PictureAsPdfIcon />}
              >
                Pdf
              </Button>
            )}
          </Pdf> */}

            <Button
              variant="outlined"
              size="small"
              // color="error"
              style={{ color: "red" }}
              endIcon={<DeleteForeverIcon />}
              onClick={DeleteStudent}
            >
              Remove
            </Button>
          </CardActions>
        </Card>
      </Container>
    </div>}
    
    </>
  );
}

export default Student;
