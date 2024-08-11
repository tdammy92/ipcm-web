import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";
// import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    position:'relative',
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    maxWidth: "300px",
    minWidth: "300px",
    marginTop:10,
    height: 85,
    "&:hover": {
      backgroundColor: "#f6f6f6",
    },
  },

  iconContainer: {
    position:'absolute',
    top:5,
    right:6,
    borderRadius:25,
    height:40,
    width:40,
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:theme?.palette.primary.main
  },
  textContainer: {
    alignItems:'center',
    justifyContent:'center'
  },

  g:{
    backgroundColor:'yellow'
  }
}));

const DashItem = ({ title, description, count, Icon, url }) => {
  const classes = useStyles();
  return (
      <Paper
        elevation={1}
        // component={Link}
        // to={url}
        className={classes.container}
      >
        {Icon && (
          <Box className={classes.iconContainer}>
            <IconButton color="white" p={2} aria-label={`dash-icon-${title}`}>
              <Icon />
            </IconButton>
          </Box>
        )}
        <Box className={classes.textContainer}>
          <Typography
            variant="h4"
            component="h3"
            color="primary"
            align="center"
            style={{
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
          >
            {count}
          </Typography>
          <Typography
            variant="subtitle2"
            component="P"
            align="center"
            color="primary"
            style={{ fontStyle: "italic" }}
          >
            {description}
          </Typography>
        </Box>
      </Paper>

  );
};

export default DashItem;
