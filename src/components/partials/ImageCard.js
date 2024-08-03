import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";


import Typography from "@material-ui/core/Typography";
import { trimText } from "../../utils";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: "15px",
    marginLeft: "5px",
    marginRight: "5px",
  },
  media: {
    height: 140,
  },
  caption: {
    color: "primary",
    padding: "4px",
    wordWrap: "break-word",
  },
});

function ImageCard({ image_url, caption }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {/* <CardMedia
					component="img"
					
					className={classes.media}
					image={image_url}
					title=""
                    style={{}}
				/> */}

        <img
          src={image_url}
          height="100%"
          width="100%"
        />
        {/* <CardContent> */}
        {caption && caption !== "" && (
          <Typography
            variant="body2"
            color="primary"
            component="p"
            className={classes.caption}
          >
            {trimText(caption, 40)}
          </Typography>
        )}
        {/* </CardContent> */}
      </CardActionArea>
    </Card>
  );
}

export default ImageCard;
