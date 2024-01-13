import React, { useState, useEffect, useRef } from "react";
import { Redirect, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../../Services/api/BaseUrl";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PrintIcon from "@material-ui/icons/Print";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { useReactToPrint } from "react-to-print";
import { useSelector, useDispatch } from "react-redux";
import { iSLoading } from "../../Store/feature";
import PrintForm from "../printForm";
import Pdf from "react-to-pdf";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "10px",
  },
  valueColum: {},
  title: {
    marginRight: 5,
  },
  value: {},
});

function Student() {
  const { id } = useParams();

  const history = useHistory();

  const classes = useStyles();
  const theme = useTheme();

  const dispatch = useDispatch();
  const { details } = useSelector((state) => state.users);

  const [Details, setDetails] = useState({});
  const [studentDetails, setStudentDetails] = useState({});

  async function getStudent() {
    dispatch(iSLoading(true));
    try {
      const res = await axios.get(`${BaseUrl}student/${id}`, {
        headers: {
          "Content-Type": "apllication/json",
          Authorization: `Bearer ${details?.token}`,
        },
      });

      // console.log(res?.data);

      setDetails(res?.data);

      setStudentDetails({
        ...res?.data,
        passport: {
          url:
            res.data.passport === undefined
              ? `https://res.cloudinary.com/bilektechnologies/image/upload/v1687963208/samples/f19cjtmikb6r7geqrpkf.jpg`
              : res?.data?.passport?.url,
        },
      });
      dispatch(iSLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(iSLoading(false));
    }
  }

  //function to delete student
  async function DeleteStudent() {
    dispatch(iSLoading(true));

    const documentIds = Details?.documents?.map((doc) => doc?.file?.public_id);

    const mongoStudentId = Details?._id;
    const cloudinaryPublicIds = [
      ...(Details?.passport?.public_id ? [Details?.passport?.public_id] : []),
      ...(documentIds.length > 0 ? [...documentIds] : []),
    ];

    const payload = {
      mongoStudentId,
      cloudinaryPublicIds,
    };

    try {
      const res = await axios.delete(`${BaseUrl}student/${id}`, {
        data: payload,
        headers: {
          Authorization: `Bearer ${details?.token}`,
        },
      });

      history.replace("/students");
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(iSLoading(false));
    }
  }

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    getStudent();
  }, [id]);

  console.log(JSON.stringify(studentDetails, null, 2));
  console.log({ theme });
  return (
    <div>
      <Container maxWidth="md" mx="auto">
        <Typography
          style={{ marginLeft: 10, marginTop: 40, marginBottom: 10 }}
          text-center
          variant="h6"
          color="primary"
        >
          Student Details
        </Typography>
        <Card className={classes.root} variant="outlined" elevation={3}>
          <CardContent ref={componentRef}>
            <Typography variant="h6" align="center" color="primary">
              Basic details
            </Typography>
            <Grid container>
              <Grid item>
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
                    {Details.title}
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
                    {Details.surname} {Details.firstName} {Details.middleName}
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
                    {Details?.phoneNumber}
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
                    {Details?.email}
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
                    {new Date(Details?.dob).toLocaleDateString()}
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
                    {Details?.gender}
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
                    {Details?.country}
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
                    {Details?.state}
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
                    {Details?.eduQualification}
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box></Box>
              </Grid>
            </Grid>
            <Typography variant="h6" align="center" color="primary">
              Employment details
            </Typography>
            <Grid container>
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
                    {Details?.currentEmploymet?.organization}
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
                    {Details?.currentEmploymet?.position}
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
                    {Details?.currentEmploymet?.yearsExperience}
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
                      Details?.currentEmploymet?.startDate
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
                    {Details?.currentEmploymet?.location}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Typography variant="h6" align="center" color="primary">
              Course Application Details
            </Typography>
            <Grid container>
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
                    {Details?.applicationFee}
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
                    Payment Method: {Details?.paymentMethods}
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
                    {Details?.membershipCadre}
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
                    {Details?.membershipRoute}
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
                    {Details?.pgdCourses}
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
                    {Details?.membershipType?.join()}
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
                    {Details?.academicPrograms?.join()}
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
              fileName={`IGPCM_FORM_REPRINT_${Details?.surname}`}
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
    </div>
  );
}

export default Student;
