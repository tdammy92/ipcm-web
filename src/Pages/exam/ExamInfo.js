import React from "react";

import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Footer from "../../components/partials/Footer/Footer";
import { Link } from "react-router-dom";

function ExamInfo() {
  return (
    <div className="base__page">
      <Container mx="auto">
        <div className="About__container">
          {/* <h3 className='page__title'>Examination</h3> */}
          <div style={{ marginTop: 50 }}>
            <Paper my={5} elevation={2}>
              <Box
                display="flex"
                flexDirection="column"
                height={100}
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Typography variant="subtitle1" pb={5} gutterBottom>
                  Click on the button to take an exam!
                </Typography>
                <Button
                  mt={5}
                  component={Link}
                  to="/start-exam"
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  Take an Exam !
                </Button>
              </Box>
            </Paper>
          </div>

          <div className="about__body">
            <h4 className="page__title">
              SEE ANNUAL TRAINING AND EXAMINATION SCHEDULES BELOW:
            </h4>

            <div className="shedule__wrapper">
              <div className="shedule__header">
                <h5>(A) CERTIFICATION AND PROFESSIONAL PROGRAMS SCHEDULES:</h5>
              </div>

              <div className="shedule__item">
                <h6>1ST DIET STARTS JANUARY AND ENDS MARCH</h6>
                <ol>
                  <li>Registration begins Last week of December every year.</li>
                  <li>
                    Training Commences 2nd week of January and Ends 3rd week of
                    March each year.
                  </li>
                  <li>
                    Professional Examination Holds Saturday of 3rd week of March
                    Every year.
                  </li>
                  <li>
                    {" "}
                    Induction of Candidates holds last Saturday of April each
                    year.
                  </li>
                </ol>
              </div>
              <div className="shedule__item">
                <h6>2nd DIET STARTS APRIL AND ENDS JUNE</h6>
                <ol>
                  <li>Registration begins Last week of March every year.</li>
                  <li>
                    Training Commences 1st week of April and Ends 3rd week of
                    June every year.
                  </li>
                  <li>
                    Professional Examination Holds Saturday of 3rd week of June
                    every year.
                  </li>
                  <li>
                    {" "}
                    Induction of Candidates holds last Saturday of July every
                    year.
                  </li>
                </ol>
              </div>
              <div className="shedule__item">
                <h6>3rd DIET STARTS JULY AND ENDS SEPTEMBER</h6>
                <ol>
                  <li> Registration begins Last week of June every year.</li>
                  <li>
                    Training Commences 1st week of July and Ends 3rd week of
                    September every year.
                  </li>
                  <li>
                    Professional Examination Holds Saturday of 3rd week of
                    September every year.
                  </li>
                  <li>
                    {" "}
                    Induction of Candidates holds last Saturday of October every
                    year.
                  </li>
                </ol>
              </div>
              <div className="shedule__item">
                <h6>4th DIET STARTS OCTOBER AND ENDS DECEMBER</h6>
                <ol>
                  <li>
                    {" "}
                    Registration begins Last week of September every year.
                  </li>
                  <li>
                    Training Commences 1st week of October and Ends 2nd week of
                    December every year..
                  </li>
                  <li>
                    Professional Examination Holds Saturday of 2nd week of
                    December every year.
                  </li>
                  <li>
                    {" "}
                    Induction of Candidates holds last Saturday of January every
                    year.
                  </li>
                </ol>
              </div>
            </div>

            <hr className="Hr__style" />

            <div className="shedule__wrapper">
              <div className="shedule__header">
                <h5>(B) DIPLOMA AND POSTGRADUATE DIPLOMA COURSES SCHEDULES:</h5>
              </div>

              <div className="shedule__item">
                <ol className="list__stype">
                  <li>Sales of Forms: September-November every year</li>

                  <li>Admission Processing: December every year</li>

                  <li>
                    Registration and Training for 1st Semester: Start 2nd week
                    of January and ends 3rd week of April every year
                  </li>

                  <li>
                    {" "}
                    1st Semester Examination: Start 3rd week of April and ends
                    4th week of April every year.
                  </li>

                  <li>
                    Submission of Project Initiatives start 1st week of May and
                    Ends 3rd week of May every year.
                  </li>

                  <li>
                    2nd Semester Registration and Training: Starts 2nd week of
                    June and ends 3rd of September every year
                  </li>
                  <li>
                    2nd Examination: Starts 3rd week of September and ends 4th
                    week of September every year
                  </li>
                  <li>
                    Execution of Projects Initiatives by groups and Report
                    starts July and ends November every year.
                  </li>
                </ol>
              </div>
            </div>

            <div className="bank__details" id="bankDetails">
              <h3>IGPCM Accountant Details</h3>

              <p>
                Account Name:
                <strong>
                  Institute of Global Peace and Conflict Management
                </strong>
              </p>
              <p>
                Account Number:
                <strong>0645754697</strong>
              </p>
              <p>
                Bank:
                <strong>Guaranty Trust Bank</strong>
              </p>
            </div>
          </div>

        </div>
      </Container>

    </div>
  );
}

export default ExamInfo;
