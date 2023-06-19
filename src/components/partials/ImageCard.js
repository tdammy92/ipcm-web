import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from '@material-ui/core/CardActions';
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		marginTop: "15px",
	},
	media: {
		height: 140,
	},
});

function ImageCard({ image_url }) {
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

				<img src={image_url} height="100%" width="100%" />
				{/* <CardContent>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
					></Typography>
				</CardContent> */}
			</CardActionArea>
		</Card>
	);
}

export default ImageCard;
