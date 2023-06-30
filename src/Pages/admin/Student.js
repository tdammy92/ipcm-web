import React, { useState, useEffect, useRef } from "react";
import { Link, Redirect, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../../Services/api/BaseUrl";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { makeStyles } from "@material-ui/core/styles";
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
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  List: {
    width: "100%",
    // maxHeight:'50px',
    maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
  },
});

function Student() {
  const { id } = useParams();

  const history = useHistory();

  const classes = useStyles();

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

  return (
    <div>
      <Card
        className={classes.root}
        variant="outlined"
        elevation={3}
      >
        <CardContent ref={componentRef}>
          <Typography
            variant="h4"
            color="primary"
          >
            {Details.title} {Details.surname} {Details.firstName}{" "}
            {Details.middleName}
          </Typography>

          <Divider />

          <List
            component="nav"
            className={classes.List}
            aria-label="mailbox folders"
          >
            <ListItem button>Email : {Details?.email}</ListItem>
            <Divider />
            <ListItem
              button
              divider
            >
              Phone: {Details?.phoneNumber}
            </ListItem>
            <ListItem button>Phone: {Details?.phoneNumber}</ListItem>
            <Divider light />
            <ListItem button>
              Date of Birth: {new Date(Details?.dob).toLocaleDateString()}
            </ListItem>
            <Divider light />
            <ListItem button>Country: {Details?.country}</ListItem>
            <Divider light />
            <ListItem button>State: {Details?.state}</ListItem>
            <Divider light />
            <ListItem button>
              Qualification : {Details?.eduQualification}
            </ListItem>
            <Divider light />
          </List>

          <Typography variant="h6">Employment Details</Typography>

          <List
            component="nav"
            className={classes.List}
            aria-label="mailbox folders"
          >
            <ListItem button>
              Organisation : {Details?.currentEmploymet?.organization}
            </ListItem>
            <Divider />
            <ListItem
              button
              divider
            >
              Role/Postion: {Details?.currentEmploymet?.position}
            </ListItem>
            <Divider />
            <ListItem
              button
              divider
            >
              Total Years of Career Experience:{" "}
              {Details?.currentEmploymet?.yearsExperience}
            </ListItem>

            <Divider light />
            <ListItem button>
              Date Joined:{" "}
              {new Date(
                Details?.currentEmploymet?.startDate
              ).toLocaleDateString()}
            </ListItem>
            <Divider light />

            <ListItem button>
              Address: {Details?.currentEmploymet?.location}
            </ListItem>
            <Divider light />
          </List>
          <Typography variant="h6">Course Application Details</Typography>

          <List
            component="nav"
            className={classes.List}
            aria-label="mailbox folders"
          >
            <ListItem button>
              Application Fee : {Details?.applicationFee}
            </ListItem>
            <Divider />
            <ListItem button>
              Payment Method: {Details?.paymentMethods}
            </ListItem>
            <Divider />
            <ListItem
              button
              divider
            >
              MemberShip Cader: {Details?.membershipCadre}
            </ListItem>
            <Divider light />
            <ListItem button>
              Membership Route: {Details?.membershipRoute}
            </ListItem>

            <Divider light />
            <ListItem button>PGD Course: {Details?.pgdCourses}</ListItem>
            <Divider light />

            <ListItem button>
              Membership Type: {Details?.membershipType?.join()}
            </ListItem>
            <Divider light />
            <ListItem button>
              Academic Programs : {Details?.academicPrograms?.join()}
            </ListItem>
            <Divider light />
            {/* Academic Programs :  */}
          </List>
        </CardContent>
        <CardActions
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
                <Button
                  disabled={true}
                  color="primary"
                >
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
            style={{ color: "red" }}
            className={classes.button}
            endIcon={<DeleteForeverIcon />}
            onClick={DeleteStudent}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Student;
