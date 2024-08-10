import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Paper from "@material-ui/core/Paper";
import { Box, Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const OnlineExam = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="startExam">
      <Container
        mx="auto"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          height: "100%, 90%",
        }}
      >
        <Paper
          elevation={3}
          style={{
            width: "90%",
            height: "80%, 90%",
          }}
          className="paper__container"
        >
          <Typography variant="h5" component="h5">
            What is the gender of Isaac newton ?
          </Typography>

          <Box>
            <FormControl component="fieldset">
              <FormLabel component="legend">Choose answer</FormLabel>
              <RadioGroup
                // aria-label="gender"
                // name="gender1"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />

                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />

                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
                <FormControlLabel
                  value="disabled"
                  control={<Radio />}
                  label="Amaphrodite"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Button
            mt={15}
            component={Link}
            to="/exam-result"
            variant="contained"
            color="primary"
            size="small"
          >
            Next To Result !
          </Button>
        </Paper>
      </Container>
    </div>
  );
};

export default OnlineExam;
