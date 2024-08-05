import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",

    maxWidth: "380px",
    height: 80,
    "&:hover": {
      backgroundColor: "#f6f6f6",
    },
  },
}));

const DashItem = ({ title, description, count, Icon, url }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6}>
      <Paper
        elevation={1}
        component={Link}
        to={url}
        className={classes.container}
      >
        {Icon && (
          <IconButton color="primary" p={2} aria-label={`dash-icon-${title}`}>
            <Icon />
          </IconButton>
        )}
        <Box spacing={0}>
          <Typography
            variant="h6"
            color="primary"
            style={{
              padding: 0,
              margin: 0,
              fontFamily: "sans-serif",
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle2"
            component="P"
            color="primary"
            style={{ padding: 0, margin: 0, fontStyle: "italic" }}
          >
            {description}
            {count && count}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default DashItem;
